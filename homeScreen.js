import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, FlatList, Platform } from 'react-native';
import styles from './styles'
import * as backEndFunctions from './back_end_functions'
import { ScrollView } from 'react-native-gesture-handler';

//For flatlist
function Item({ uri }) {
  return (
    <View>
      <Image source={{uri: uri}} style = {{width: 200, height: 200}}/>
    </View>
  );
}

export default class HomeScreen extends Component {
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
                  source = {require('./assets/images/menu.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LikedOutfitsScreen')}>
                <Image 
                  style = {styles.heartIcon}
                  source = {require('./assets/images/heart.png')}
                />
            </TouchableOpacity>
          </View>
        <View>
          <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25, textAlign: 'center', textAlignVertical: 'center' }}>Home Screen</Text>
          <FlatList 
            data = {this.state.images} 
            renderItem={({item})=><Item 
            uri={item.uri}/> } 
            keyExtractor={item => item.id} 
            horizontal = {true} 
          />
        </View>
      </View>
    );
  }
}

export class EmailField extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.regularText}
    
          placeholder="Email"
          placeholderTextColor={'#2a78a0'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );
  }
}