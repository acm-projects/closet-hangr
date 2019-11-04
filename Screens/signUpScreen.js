//General
import React, { Component } from 'react';
import { Image, StyleSheet, Platform, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
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


export class signUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '', username: '', password: ''};
	 }

	signUp = async event => {
		if(this.state.email != '' && this.state.username!='' && this.state.password!='') {
			backendFunctions.signUp(this.state.email, this.state.username, this.state.password)
			this.props.navigation.navigate('ConfirmSignUp')
		}
	}

	 changeEmail = (newValue) => {
		this.setState({
		  email: newValue,
		});
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
    
    navigateToSignInPage = async event => {
       this.props.navigation.navigate('SignIn')
    }

	render() {
	  return(
		 <View style={styles.container}>
			<View style = {styles.logoContainer}>
			  <Logo/>
			  	<Text style={styles.title}>
					  Closet-Hangr
			  </Text>
			</View>
			<View style = {styles.fieldContainer}>
			  <EmailField email = {this.state.email} changeEmail={this.changeEmail.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
			  <UserNameField username = {this.state.username} changeUsername = {this.changeUsername.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
				<PasswordField password = {this.state.password} changePassword = {this.changePassword.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.signUp} style={styles.signUpButton}>
				<Text style={styles.regularText}>Sign Up</Text>
			</TouchableOpacity>
				<Text >
					Already a member?
				</Text>
			<TouchableOpacity onPress={this.navigateToSignInPage} style={styles.signInButton}>
				<Text style={styles.regularText}>Go To Sign in</Text>
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
	  return (
		 <Image
		 style={styles.logo}
		 source={require( '../assets/images/hanger.png')} />
	  );
	}
 }
 
 //EMAIL TEXT FIELD
 export class EmailField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
				maxLength={30}
			  placeholder="Email"
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeEmail(text)}
			  value={this.props.email}
			/>
		 </View>
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

  
 // PASSWORD TEXT FIELD
 export class PasswordField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="Password"
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changePassword(text)}
			  value={this.props.password}
			/>
		 </View>
	  );
	}
 }