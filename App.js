/*
  General
*/
import React from 'react';
import { Platform, Component, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
/*
  Amplify
*/
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});
/*
  Authentification
*/
import Auth from '@aws-amplify/auth'
import { withAuthenticator } from 'aws-amplify-react-native'
/*
  Database
*/
import API, { graphqlOperation, Storage } from '@aws-amplify/api'
import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';
import * as subscriptions from './src/graphql/subscriptions';
import {v4 as uuid} from 'uuid';


class App extends React.Component {
  state = {
    name: "",
    User: []
  }

  onChangeText = (key, val) => {
		this.setState({ [key]: val })
	}

  addUser = async event => {
    
    const { name, User } = this.state

    event.preventDefault()

    const information = {
		username: name,
		
	 }
    
    const result = await API.graphql(graphqlOperation(mutations.createUser, {input: information}))
    const newUser = result.data.createUser
	 const updatedUser = [newUser, ...User]
    this.setState({ User: updatedUser, name: "" })
  }
  
  render() {
    return (
      <View style={styles.container}>
				<TextInput
					style={styles.input}
					value={this.state.name}
					onChangeText={val => this.onChangeText("name", val)}
					placeholder='Add a User'
				/>
				<TouchableOpacity onPress={this.addUser} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Add +</Text>
				</TouchableOpacity>
			</View>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true })

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		paddingTop: 50
	},
	input: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "blue",
		marginVertical: 10
	},
	buttonContainer: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		alignItems: "center"
	},
	buttonText: {
		color: "#fff",
		fontSize: 24
	}
})
