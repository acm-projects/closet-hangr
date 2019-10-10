import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


import App from './App'

export default class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style = {styles.logoContainer}>
          <Logo />
          <Text style={styles.title}>CLOSET HANGR
          </Text>
        </View>
        <View style = {styles.fieldContainer}>
          <EmailField />
          <PasswordField />
        </View>
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

//Need a text field
export class EmailField extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.regularText}
    
          placeholder="Email"
          placeholderTextColor={'#2a78a0'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );
  }
}

export class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.regularText}
          placeholder="Password"
          placeholderTextColor={'#2a78a0'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );
  }
}

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
      fontFamily: 'Helvetica',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      width: 200,
      justifyContent: 'center',
      textAlign: 'center',
    },
    fieldContainer: {
      
      padding: 30,
      height: 10,
      width: 400,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      

    },
    regularText: {
      fontFamily: 'Helvetica',
      fontSize: 14,
      color: '#3199ce',
      padding: 10,
      backgroundColor: '#FFF',
      borderWidth: 4,
      borderColor: '#96c3da',
      
    },
})