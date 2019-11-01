import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native';
import styles from '../styles'
import * as backEndFunctions from '../back_end_functions'
import Paginator from '../Paginator'
import * as PaginatorValues from '../Paginator'



export default class HomeScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {allClothing: [], tops: [], bottoms: [], loaded: false}
    this.index = 0
  }

  async componentDidMount() {
    let user = await backEndFunctions.getCurrentUserInfo()
    this.setState({
      allClothing: await backEndFunctions.retrieveAllClothing(user.username),
      tops: await backEndFunctions.retrieveAllTops(user.username),
      bottoms: await backEndFunctions.retrieveAllBottoms(user.username),
      loaded: true
    })
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
          <Tops tops = {this.state.tops} loaded = {this.state.loaded}/>
          <Bottoms bottoms = {this.state.bottoms} loaded = {this.state.loaded}/>
        </View>
      </View>
    );
  }
}


class Tops extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    if(this.props.tops.length > 0)
      return (
        <Paginator
        data = {this.props.tops} 
        />
      )
    else if (this.props.loaded == true) 
      return (
        <View style = {{width: Dimensions.get('window').width, height: PaginatorValues.ITEM_WIDTH, alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {styles.promptText}>
            Please Add Tops!
          </Text>
        </View>
      )
    else 
      return (
        <View >
        </View>
      )
  }
}

class Bottoms extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    if(this.props.bottoms.length > 0)
    return (
      <Paginator
      data = {this.props.bottoms} 
      />
    )
  else if(this.props.loaded == true) 
    return (
      <View style = {{width: Dimensions.get('window').width, height: PaginatorValues.ITEM_WIDTH, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {styles.promptText}>
          Please Add Bottoms!
        </Text>
      </View>
    )
  else 
    return (
      <View>
      </View>
    )
  }
}