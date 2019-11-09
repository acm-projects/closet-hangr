import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//IMPORT FILES
import HomeScreen from './HomeScreen'
import WeatherScreen from './WeatherScreen'
import SettingsScreen from './SettingsScreen'

//DIFFERENT PAGES
export const CustomDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Weather: {screen: WeatherScreen},
    Settings: {screen: SettingsScreen},
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#00bf7f',
    },
    edgeWidth: 0
  }
)