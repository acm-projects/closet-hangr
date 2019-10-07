/*
  General
*/
import React from 'react';
import { Platform, Component, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'
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
import API, { graphqlOperation } from '@aws-amplify/api'
import {Storage} from 'aws-amplify'
import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';
import * as subscriptions from './src/graphql/subscriptions';
import {v4 as uuid} from 'uuid';

class App extends React.Component {
	state = {
		name: "",
		User: [],
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

		/*
			Creating the user
		*/
		const result = await API.graphql(graphqlOperation(mutations.createUser, {input: information}))
		const newUser = result.data.createUser
		const updatedUser = [newUser, ...User]
		this.setState({ User: updatedUser, name: "" })

		/*
			ASKING FOR PERMISSIONS
		*/
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		const { status2, permissions2 } = await Permissions.askAsync(Permissions.CAMERA);

		/*
			Calling the image picker
		*/
		let result3 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3, 4],
		 });
		 let uri = result3.uri;
		 console.log(result3)

		 /*
		 	Calling the Camera
		 */
		let result4 = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3,4],
		})
		//let uri = result4.uri;
		console.log(result4)

		/*
			Adding Files to S3 Test
		*/
		let splitKey = uri.split("/")
		let key = String(splitKey[splitKey.length-1])
		console.log(key)
		result2 = storeFileInS3(uri)

		//Letting the database update
		await sleep(2000);

		/*
			Listing the items in the user's folder
		*/
		await Storage.list('', {level: 'private'})
		.then(result => console.log(result))
		.catch(err => console.log(err));

		//Getting the picture back
		const result5 = await Storage.get(key, {level: 'private', download:false})
		Storage.get()
		console.log(result5)
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

const storeFileInS3 = async (
	fileUri,
	awsKey = null,
	access = "private"
 ) => {
	const blob = await new Promise((resolve, reject) => {
	  const xhr = new XMLHttpRequest();
	  xhr.onload = function() {
		 resolve(xhr.response);
	  };
	  xhr.onerror = function() {
		reject(new TypeError("Network request failed"));
	  };
	  xhr.responseType = "blob";
	  xhr.open("GET", fileUri, true);
	  xhr.send(null);
	});
	const { name, type } = blob._data;
	const options = {
	  level: access,
	  contentType: type,
	};
	const key = awsKey || name;
	try {
	  const result = await Storage.put(key, blob, options);
	  return {
		 access,
		 key: result.key
	  };
	} catch (err) {
	  throw err;
	}
 };

 function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
 }