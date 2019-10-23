import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles'

export default class HomeScreen extends Component {
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