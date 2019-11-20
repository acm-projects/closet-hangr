import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});

import styles from '../styles'
import * as backendFunctions from '../backend/back_end_functions'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import DoublePaginator from '../DoublePaginator'
import { SafeAreaView } from 'react-navigation';

 export default class LikedOutfitsScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			likedOutfits: []
		}
	}

	async componentDidMount() {
		let user = await backendFunctions.getCurrentUserInfo()
		let username = user.username
		let outfits = await backendFunctions.retrieveAllOutfits(username)

		this.setState( {
			likedOutfits: outfits
		})
	}

	render() {
		return(
			<SafeAreaView style={{flex: 1}}>
				<View style = {{marginTop: 5}}>
					<Text style={styles.heading1}>
						Liked Outfits
					</Text>
					<View style={{flexDirection: 'column'}}>
						<DoublePaginator 
							data = {this.state.likedOutfits}
						/>
					</View>
				</View>
			</SafeAreaView>
		)
	}
 }
 