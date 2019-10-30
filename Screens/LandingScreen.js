import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Back-end functions
import * as backEndFunctions from '../back_end_functions'

//Font
import * as Font from 'expo-font'

import { Auth } from 'aws-amplify';

import styles from '../styles'

import FastImage from 'react-native-fast-image'


//DIFFERENT PAGES
export class LandingScreen extends Component {
   constructor(props)
   {
      super(props)
      this.state = {loaded: false}
   }  

   

  	async componentDidMount() {
        //Loading font
		await Font.loadAsync({
		  'Avenir': require('../assets/fonts/Avenir.ttf'),
      });

      let user = await backEndFunctions.getCurrentUserInfo()

      //Loading images
      if (user != null) {
         let urlOfImages = []
         urlOfImages =  await backEndFunctions.retrieveAllClothing(user.username)
         for (let i = 0; i < urlOfImages.length; i++)
            await Image.prefetch(urlOfImages[i].uri)
      }

      await backEndFunctions.sleep(1000)
      
   

      this.setState({loaded: true})
      
      //Navigating to the correct screen based on if the user is currently signed in
      if(user == null)
         this.props.navigation.navigate('SignUp')
      else
         this.props.navigation.navigate('Home')

	}

  render() {
   if(this.state.fontsLoaded && this.state.imagesLoaded) {
      return (
         <View style = {styles.container}>
            <Text style={styles.title}>
               Closet-hangr
            </Text>
         </View>
      )
   }
   else {
      return (
         <View style = {styles.container}>
            <Text style={styles.title}>
               Closet-hangr
            </Text>
         </View>
      )
   }
  }
}