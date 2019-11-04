/*
   ____ ___  _   _ _____ ___ ____  __  __   ____ ___ ____ _   _   _   _ ____    ____   ____ ____  _____ _____ _   _                                                                                                                                                                                                             
  / ___/ _ \| \ | |  ___|_ _|  _ \|  \/  | / ___|_ _/ ___| \ | | | | | |  _ \  / ___| / ___|  _ \| ____| ____| \ | |                                                                                                                                                                                                            
 | |  | | | |  \| | |_   | || |_) | |\/| | \___ \| | |  _|  \| | | | | | |_) | \___ \| |   | |_) |  _| |  _| |  \| |                                                                                                                                                                                                            
 | |__| |_| | |\  |  _|  | ||  _ <| |  | |  ___) | | |_| | |\  | | |_| |  __/   ___) | |___|  _ <| |___| |___| |\  |                                                                                                                                                                                                            
  \____\___/|_| \_|_|   |___|_| \_\_|  |_| |____/___\____|_| \_|  \___/|_|     |____/ \____|_| \_\_____|_____|_| \_|                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                
*/

//General
import React, { Component } from 'react';
import { Image, StyleSheet, Platform, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
//Amplify
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});
//Backend
import * as backendFunctions from '../backend/back_end_functions'
//Font
import * as Font from 'expo-font'
//Stylesheet
import styles from '../styles'


export class confirmSignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {username: "", confirmationCode: ""};
	 }

	confirmSignUp = async event => {
		backendFunctions.confirmSignUp(this.state.username, this.state.confirmationCode)
		this.props.navigation.navigate('SignIn')
	}

	changeUsername = (newValue) => {
		this.setState({
		  username: newValue,
		});
	 }

	 changeConfirmationCode = (newValue) => {
		 this.setState({
			 confirmationCode: newValue,
		 })
	 }

	render() {
	  return(
		 <View style={styles.container}>
			<View style = {styles.logoContainer}>
			  <Logo />
			  	<Text style={styles.title}>
			  </Text>
			</View>
			<View style = {styles.fieldContainer}>
			  <UserNameField username = {this.state.username} changeUsername = {this.changeUsername.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
				<ConfirmationCodeField confirmationCode = {this.state.confirmationCode} changeConfirmationCode = {this.changeConfirmationCode.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.confirmSignUp} style={styles.signInButton}>
				<Text style={styles.regularText}>Confirm Sign Up</Text>
			</TouchableOpacity>
		 </View>
	  );
	}
 }
 
 export class Background extends Component {
	render() {
	  return(
		 <View style={styles.container}>
			<Logo hanger/>
		 </View>
	  );
	}
 }
 
 //This is the class for the Logo! Replace with the actual logo
 export class Logo extends Component {
	render() {
	  let pic = {
		 uri: 'https://cdn4.vectorstock.com/i/1000x1000/21/33/hanger-icon-white-on-the-blue-background-vector-3452133.jpg'
	  };//gonna crop this soon!! or replace with our own logo (png file)
	  return (
		 <Image
		 style={styles.logo}
		 source={pic} />
	  );
	}
 }

 //USERNAME TEXT FIELD
 export class UserNameField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="Username"
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeUsername(text)}
			  value={this.props.username}
			/>
		 </View>
	  );
	}
 }

  
 // CONFIRMATION TEXT FIELD
 export class ConfirmationCodeField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="Confirmation Code"
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeConfirmationCode(text)}
			  value={this.props.confirmationCode}
			/>
		 </View>
	  );
	}
 }