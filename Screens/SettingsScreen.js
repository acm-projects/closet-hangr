//General
import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Image, } from 'react-native';
//Stylesheet
import styles from "../styles";
//Backend
import * as backEndFunctions from '../backend/back_end_functions'

import App from '../App'
import { SafeAreaView } from 'react-navigation';

export default class SettingsScreen extends React.Component {

  signOut = async event => {
    await backEndFunctions.signOut()
    this.props.navigation.navigate ('SignUp')
  }

  render() {
    return (
      <SafeAreaView style={{}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.openDrawer()}>
            <Image 
              style = {styles.menuIcon}
              source = {require('../assets/images/menu.png')}
            />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25, textAlign: 'center', textAlignVertical: 'center' }}>Settings</Text>
        <View style = {{justifyContent: 'center', flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity onPress = {this.signOut} style = {styles.signInButton}>
            <Text style = {styles.regularText}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}