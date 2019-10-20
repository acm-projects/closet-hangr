/*
  ____ ___ ____ _   _   ___ _   _   ____   ____ ____  _____ _____ _   _ 
 / ___|_ _/ ___| \ | | |_ _| \ | | / ___| / ___|  _ \| ____| ____| \ | |
 \___ \| | |  _|  \| |  | ||  \| | \___ \| |   | |_) |  _| |  _| |  \| |
  ___) | | |_| | |\  |  | || |\  |  ___) | |___|  _ <| |___| |___| |\  |
 |____/___\____|_| \_| |___|_| \_| |____/ \____|_| \_\_____|_____|_| \_|
*/

//General
import React, { Component } from 'react';
import { Image, StyleSheet, Platform, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
//Amplify
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});
//Backend
import * as backendFunctions from './back_end_functions'
//Font
import * as Font from 'expo-font'
//Stylesheet
import styles from './styles'



export class signInScreen extends Component {
	componentDidMount() {
		Font.loadAsync({
		  'Aventir': require('./assets/fonts/Avenir.ttf'),
		});
	 }

	constructor(props) {
		super(props);
		this.state = {username: '', password: ''};
	 }

	signIn = async event => {
		backendFunctions.signIn(this.state.username, this.state.password)
	}

	 changeUsername = (newValue) => {
		this.setState({
		  username: newValue,
		});
	 }

	 changePassword = (newValue) => {
		 this.setState({
			 password: newValue,
		 })
	 }

	 navigateToSignUpPage = async event => {
		 this.props.navigation.navigate('SignUp')
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
				<PasswordField password = {this.state.password} changePassword = {this.changePassword.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.signIn} style={styles.signInButton}>
				<Text style={styles.regularText}>Sign in</Text>
			</TouchableOpacity>
			<Text style = {styles.regularText}>
				Not Signed Up?
			</Text>
			<TouchableOpacity onPress={this.navigateToSignUpPage} style={styles.signUpButton}>
				<Text style={styles.regularText}>Go To Sign Up</Text>
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
			  placeholder="     Username    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeUsername(text)}
			  value={this.props.username}
			/>
		 </View>
	  );
	}
 }

  
 // PASSWORD TEXT FIELD
 export class PasswordField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="    Password    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changePassword(text)}
			  value={this.props.password}
			/>
		 </View>
	  );
	}
 }
 
 /*
 const styles = StyleSheet.create({
	container: {
		 flex: 1,
		 backgroundColor: '#3199ce',
		 alignItems: 'center',
		 justifyContent: 'center',
	  },
	  logoContainer: {
		 alignItems: 'center',
		 //justifyContent: 'center',
		 height: 300,
	  },
	  logo: {
		 height: 150,
		 width: 180,
		 borderWidth: 15,
		 borderColor: '#96c3da',
	  },
	  title: {
		 color: '#FFF',
		 //fontFamily: 'Roboto',
		 fontSize: 24,
		 fontWeight: 'bold',
		 marginTop: 10,
		 width: 200,
		 justifyContent: 'center',
		 textAlign: 'center',
	  },
	  fieldContainer: { 
		 margin: 2,
		 padding: 5.5,
		 height: 60,
		 width: 1000,
		 textAlign: 'left',
		 alignItems: 'center',
		 justifyContent: 'center',
	  },
	  regularText: {
		 fontFamily: 'Avenir',
		 fontSize: 14,
		 color: '#3199ce',
	  },
	  inputText: {
		fontFamily: 'Avenir',
		 fontSize: 14,
		 color: '#3199ce',
		 padding: 10,
		 backgroundColor: '#FFF',
		 borderWidth: 4,
		 borderColor: '#96c3da',
	  },
	  signUpButton: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		width: 100,
		alignItems: "center"
	  },
	  signInButton: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		width: 75,
		alignItems: "center"
	  }
 })
 */