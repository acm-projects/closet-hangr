import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native';
import styles from '../styles'
import * as backEndFunctions from '../back_end_functions'
import Paginator from '../Paginator'

//For flatlist
function Item({ uri }) {
  return (
    <View>
      <Image source={{uri: uri}} style = {{width: Dimensions.get('window').width*3/4, height: Dimensions.get('window').width*3/4, marginHorizontal: Dimensions.get('window').width/8}}/>
    </View>
  );
}

export default class HomeScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {images: []}
    this.index = 0
  }

  async componentDidMount() {
    let user = await backEndFunctions.getCurrentUserInfo()
    this.setState({images: await backEndFunctions.retrieveAllClothing(user.username)})
  }

  render() {
    return (
      <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
                <Image 
                  style = {styles.menuIcon}
                  source = {require('../assets/images/menu.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LikedOutfitsScreen')}>
                <Image 
                  style = {styles.heartIcon}
                  source = {require('../assets/images/heart.png')}
                />
            </TouchableOpacity>
          </View>
        <View style={{marginTop: Dimensions.get('window').height/30}} >
          <Paginator
            data = {this.state.images} 
            renderItem={({item})=><Item uri={item.uri}/> } 
            keyExtractor={item => item.id} 
            horizontal = {true} 
            itemWidth={Dimensions.get('window').width*3/4} 
          />
          <Paginator
            data = {this.state.images} 
            renderItem={({item})=><Item uri={item.uri}/> } 
            keyExtractor={item => item.id} 
            horizontal = {true} 
            itemWidth={Dimensions.get('window').width*3/4} 
          />
        </View>
      </View>
    );
  }
}
