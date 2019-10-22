import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//IMPORT FILES
import HomeScreen from './HomeScreen'
import LikedOutfitsScreen from './LikedOutfitsScreen'
import WeatherScreen from './WeatherScreen'
import SettingsScreen from './SettingsScreen'
import signInScreen from './signInScreen'

//https://reactnavigation.org/docs/en/drawer-navigator.html

//DIFFERENT PAGES
export const CustomDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    LikedOutfits: {screen: LikedOutfitsScreen},
    Weather: {screen: WeatherScreen},
    Settings: {screen: SettingsScreen},
    //LogOut: {screen: signInScreen}, 
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
)