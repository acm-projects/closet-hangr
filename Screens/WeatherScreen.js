import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Image } from 'react-native';

import App from '../App'

import styles from "../styles";

export default class WeatherScreen extends React.Component {
  render() {
    return (
      <View style={{  }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.openDrawer()}>
            <Image 
              style = {styles.menuIcon}
              source = {require('../assets/images/menu.png')}
            />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25, textAlign: 'center', textAlignVertical: 'center' }}>Weather Screen</Text>
      </View>
    );
  }
}
