import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';

// Back-end functions
import * as backEndFunctions from '../backend/back_end_functions'

//Font
import * as Font from 'expo-font'

import styles from '../styles'

//Amplify
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
})


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
         urlOfImages =  await backEndFunctions.retrieveAllUserClothing(user.username)
         if(urlOfImages) {
            for (let i = 0; i < urlOfImages.length; i++)
               urlOfImages[i] = await Image.prefetch(urlOfImages[i].uri)

            for (let i = 0; i < urlOfImages.length; i++)
               console.log(urlOfImages[i] ? ('Image successfullly loaded') : ('ERROR: Image not successfully loaded'))
         }
      }

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
         <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.container}>
               <Text style={styles.title}>
                  Closet-hangr
               </Text>
            </View>
         </SafeAreaView>
      )
   }
   else {
      return (
         <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.container}>
               <Text style={styles.title}>
                  Closet-hangr
               </Text>
            </View>
         </SafeAreaView>
      )
   }
  }
}
