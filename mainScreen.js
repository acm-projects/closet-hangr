import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

//IMPORT FILES
import HomeScreen from './HomeScreen'
import LikedOutfitsScreen from './LikedOutfits'
import WeatherScreen from './WeatherScreen'
import SettingsScreen from './SettingsScreen'
import LoginScreen from './LoginPage'

//DIFFERENT PAGES
const MyDrawerNavigator = new DrawerNavigator(
  {
    'Home': HomeScreen,
    'Liked Outfits': LikedOutfitsScreen,
    'Weather': WeatherScreen,
    'Settings': SettingsScreen,
    'Log Out': LoginScreen, //still need to add a button to Login Page to redirect it
    
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default MyDrawerNavigator;