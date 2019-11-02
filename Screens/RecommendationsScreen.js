import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ImageBackground,
  FlatList,
  Image
} from 'react-native';

import * as backEndFunctions from '../back_end_functions'

import * as recommendationEngine from '../recommendation_engine'


function Item({ uri }) {
  return (
    <View style={{ height: 150, width: 150, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd', borderRadius: 25}}>
      <View style={{ flex: 2 }}>
        <ImageBackground source={{uri:uri}} style={{resizeMode: 'cover', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 25}}></ImageBackground>
      </View>
    </View>
  );
}


export default class RecommendationsScreen extends Component {
  constructor(props)
  {
    super(props)
    this.state = {images: []}
  }

  async componentDidMount() {
    let user = await backEndFunctions.getCurrentUserInfo()
    this.setState({images: await recommendationEngine.trendingAmongUsers(5)})
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, paddingTop: 20 }}>
          Recommendations
        </Text>

        <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 20 }}>
          Based on the weather...
        </Text>
        <View style={{ height: 160, marginTop: 10 }}>
              <FlatList
                data = {this.state.images} 
                renderItem={({item})=><Item uri={item.uri}/> } 
                keyExtractor={item => item.id} 
                horizontal = {true} 
              />
        </View>
            
        <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 40 }}>
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

        <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 40 }}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});