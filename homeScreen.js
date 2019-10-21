import React, { Component} from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import App from './App'

import styles from './styles'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{  }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Image 
              style = {{height: 55, width: 55, marginTop: 40, marginLeft: 10}}
              source = {require('./Fw96Z.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity
          //Make it save the
          onPress={() => this.props.navigation.navigate('LikedOutfitsScreen')}>
            <Image 
              style = {{height: 50, width: 50, position: 'absolute', right: 0, top: -60, marginRight: 10}}
              source = {require('./HEARTVECTOR3.png')}
            />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25, textAlign: 'center', textAlignVertical: 'center' }}>Home Screen</Text>
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