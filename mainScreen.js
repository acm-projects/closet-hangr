import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {CustomDrawerNavigator} from './CustomDrawerNavigator'
import {CustomHeader} from './CustomHeader'

//DIFFERENT PAGES
export class MainScreen extends Component {
  static router = CustomDrawerNavigator.router

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{height: 100}}>
          <CustomHeader navigation={this.props.navigation} />
        </View>
        <View style={{height: 300}}>
          <CustomDrawerNavigator navigation={this.props.navigation} />
        </View>
        
      </View>
    );
  }
}