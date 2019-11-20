import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import * as backEndFunctions from '../backend/back_end_functions'
import * as recommendationEngine from '../backend/recommendation_engine'
import styles from '../styles'


function Item({ uri }) {
  return (
    <View style={{ height: 150, width: 150, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd', borderRadius: 25}}>
      <View style={{ flex: 2 }}>
        <ImageBackground source={{uri:uri}} style={{resizeMode: 'cover', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 25}}></ImageBackground>
      </View>
    </View>
  );
}

function TrendingTypesText({trendingClothing}) {
  types = ''
  // Retrieve the trending types from the array of clothing objects and make a list to display
  for(let i = 0; i < trendingClothing.length; i++) {
    types += recommendationEngine.pluralize(trendingClothing[i].type)
    if(i!=trendingClothing.length-1)
      types += ', '
  }
  
  if(types.length > 0) {
    return (
      <Text style={styles.heading2}>
        Trending: {types}
      </Text>
    )
  }
  else {
    return (
      <Text style={styles.heading2}>
        Trending: 
      </Text>
    )
  }
}

function TrendingColorsText({trendingColors}) {
  if(trendingColors != undefined) {
    colors = ''
    // Retrieve the trending types from the array of clothing objects and make a list to display
    for(let i = 0; i < trendingColors.length; i++) {
      colors += recommendationEngine.pluralize(trendingColors[i].color)
      if(i!=trendingColors.length-1)
        colors += ', '
    }
    
    if(types.length > 0) {
      return (
        <Text style={styles.heading2}>
          Trending Colors: {colors}
        </Text>
      )
    }
  }
  else {
    return (
      <Text style={styles.heading2}>
        Trending Colors: 
      </Text>
    )
  }
}


export default class RecommendationsScreen extends Component {
  constructor(props)
  {
    super(props)
    this.state = {images: []}
  }

  async componentDidMount() {
    let user = await backEndFunctions.getCurrentUserInfo()
    //Get the typs of clothing that are trending among other users
    this.setState({
      images: await recommendationEngine.trendingAmongUsers(3),
      colorRecommendations: await recommendationEngine.trendingColorsAmongUsers(3),
      weatherRecommendations: await recommendationEngine.weatherForUser(3, 30)
    })
  }

  render() {
    return (
    <View style = {{marginTop: 25}}>
      <Text style={styles.heading1}>
        Recommendations
      </Text>

      <TrendingTypesText trendingClothing = {this.state.images}/>

      <View style={{ height: 160, marginTop: 10 }}>
        <FlatList
          data = {this.state.images} 
          renderItem={({item})=><Item uri={item.uri}/> } 
          keyExtractor={item => item.id} 
          horizontal = {true} 
        />
      </View>

      <TrendingColorsText trendingColors = {this.state.colorRecommendations}/>

      <View style={{ height: 160, marginTop: 10 }}>
        <FlatList
          data = {this.state.colorRecommendations} 
          renderItem={({item})=><Item uri={item.uri}/> } 
          keyExtractor={item => item.id} 
          horizontal = {true} 
        />
      </View>

      <Text style={styles.heading2}>
        Recommended Based on Weather:
      </Text>

      <View style={{ height: 160, marginTop: 10 }}>
        <FlatList
          data = {this.state.weatherRecommendations} 
          renderItem={({item})=><Item uri={item.uri}/> } 
          keyExtractor={item => item.id} 
          horizontal = {true} 
        />
      </View>


    </View>     
    )
  }
}


/*


          <View style={{ height: 160, marginTop: 10 }}>
                <FlatList
                  data = {this.state.images} 
                  renderItem={({item})=><Item uri={item.uri}/> } 
                  keyExtractor={item => item.id} 
                  horizontal = {true} 
                />
          </View>
              
          <Text style={styles.heading2}>
            Based on likes and dislikes...
          </Text>

          <View style={{ height: 160, marginTop: 10 }}>
            <FlatList
              data = {this.state.images} 
              renderItem={({item})=><Item uri={item.uri}/> } 
              keyExtractor={item => item.id} 
              horizontal = {true} 
            />
          </View>

          <Text style={styles.heading2}>
            Brands you might like...
          </Text>

          <View style={{ height: 160, marginTop: 10 }}>
            <FlatList
              data = {this.state.images} 
              renderItem={({item})=><Item uri={item.uri}/> } 
              keyExtractor={item => item.id} 
              horizontal = {true} 
            />
          </View>

          */