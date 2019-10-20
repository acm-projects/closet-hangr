import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';



const styles= StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#3199ce',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fieldContainer: {

flexDirection :'column',
     
      padding:30,
      height: 100,
      width: 400,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      

    },
    logoContainer:
    {
      alignItems: 'center',
      //justifyContent: 'center',
      height: 300,

    },

    logo:
    {
      height: 100,
      width: 180,
      borderWidth: 15,
      borderColor: '#96c3da',
    },
    regularText: {
      fontFamily: 'Roboto',
      fontSize: 11,
      color: '#3199ce',
      marginTop: 1,
      padding: 10,
      backgroundColor: '#FFF',
      borderWidth: 4,
      borderColor: '#96c3da',
      
    },

    title: {
      color: '#FFF',
      fontFamily: 'Roboto',
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 1,
      width: 200,
      justifyContent: 'center',
      textAlign: 'center',
    },
    
  }
)



export default class App extends React.Component {
 

  
  render (){
   
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Please Enter Confirmation Code
         </Text>
       
  
<View style = {styles.fieldContainer}>

<ConfirmationCodeField />

</View>

<Button
          title="Continue"
          color="#0693e3"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
 </View>

  );
  }
}

export class ConfirmationCodeField extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.regularText}
          placeholder="Confirmation code"
          placeholderTextColor={'#2a78a0'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );

    
  }
}


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
    
          placeholder="Email        "
          placeholderTextColor={'#2a78a0'}
          
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );
  }
}




