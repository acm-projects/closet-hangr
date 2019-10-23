import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {CustomDrawerNavigator} from './CustomDrawerNavigator'

//DIFFERENT PAGES
export class MainScreen extends Component {
  static router = CustomDrawerNavigator.router

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 1}}>
          <CustomDrawerNavigator navigation={this.props.navigation} />
        </View> 
      </View>
    );
  }
}