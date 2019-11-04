//General
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
//Amplify
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});
//Stylesheet
import styles from '../styles'
//Backend
import * as backendFunctions from '../backend/back_end_functions'
// Permissions
import * as Permissions from 'expo-permissions'
//Image Picker
import * as ImagePicker from 'expo-image-picker'

 export default class AddClothingScreen extends Component {
	constructor(props) {
		super(props)
	}

	addFromCamera = async event => {
		//	ASKING FOR PERMISSION
		const { status2, permissions2 } = await Permissions.askAsync(Permissions.CAMERA);

		// Calling the Camera
		let response = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1,1],
		})
		if(response.cancelled != 'false') {
			await backendFunctions.addImageToDatabase(response.uri)
		}
	}

	addFromImagePicker = async event => {
		// ASKING FOR PERMISSION
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		let response = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
		});
		if(response.cancelled != 'false') {
			await backendFunctions.addImageToDatabase(response.uri)
		}
   }
   
   //Returns an array of objects that contain information of piece of clothing
   getUserClothing = async event => {
      let user = await backendFunctions.getCurrentUserInfo()
      let username = user.username
      let clothing = await backendFunctions.retrieveAllClothing(username)
      for(let i = 0; i < clothing.length; i++)
         console.log(clothing[i])
	}

	render() {
		return(
			<View style = {styles.container}>
				<TouchableOpacity onPress={this.addFromCamera} style={styles.signUpButton}>
					<Text style={styles.regularText}>
						Take Picture
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.addFromImagePicker} style={styles.signUpButton}>
					<Text style={styles.regularText} >
						Choose from Photos
					</Text>
				</TouchableOpacity>
            <TouchableOpacity onPress={this.getUserClothing} style={styles.signUpButton}>
					<Text style={styles.regularText} >
						Get User Clothing
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
 }
 