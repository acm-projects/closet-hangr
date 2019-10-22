import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Back-end functions
import * as backEndFunctions from './back_end_functions'

//Font
import * as Font from 'expo-font'

//DIFFERENT PAGES
export class LandingScreen extends Component {
   constructor(props)
   {
      super(props)
      this.state = {fontsLoaded: false}
   }  

  	async componentDidMount() {
		await Font.loadAsync({
		  'Avenir': require('./assets/fonts/Avenir.ttf'),
      });
      this.setState({fontsLoaded: true})
      await backEndFunctions.sleep(2000)
      this.props.navigation.navigate('SignUp')
	}

  render() {
   if(this.state.fontsLoaded) {
      return (
            <View>
               <Text>
                  After loading
               </Text>
            </View>
      )
   }
   else {
      return (
         <View>
            <Text>
               HAS NOT LOADED YET
            </Text>
         </View>
      )
   }
  }
}