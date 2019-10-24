import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import styles from './styles'
import * as backEndFunctions from './back_end_functions'
/*
const DATA = [
  {
    id: '0',
    uri: 'https://image.freepik.com/free-photo/pink-background-with-golden-stars_23-2148239106.jpg'
  },
  {
    id: '1',
    uri: 'https://image.freepik.com/free-photo/stroke-background-bright-blue-paint_64049-134.jpg'
  },
  {
    id: '2',
    uri: 'https://image.freepik.com/free-photo/pink-background-with-golden-stars_23-2148239106.jpg'
  },
  {
    id: '3',
    uri: 'https://image.freepik.com/free-photo/stroke-background-bright-blue-paint_64049-134.jpg'
  },
  {
    id: '4',
    uri: 'https://image.freepik.com/free-photo/stroke-background-bright-blue-paint_64049-134.jpg'
  },
  {
    id: '5',
    uri: 'https://image.freepik.com/free-photo/stroke-background-bright-blue-paint_64049-134.jpg'
  },

]
*/

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
  }

  async componentDidMount() {
    let user = await backEndFunctions.getCurrentUserInfo()
    this.setState({images: await backEndFunctions.retrieveAllClothing(user.username)})
    console.log('here')
    console.log(this.state.images)
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
          <FlatList data = {this.state.images} renderItem={({item})=><Item uri={item.uri}/> } keyExtractor={item => item.id} horizontal = {true} />
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