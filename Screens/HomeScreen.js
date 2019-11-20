import React, { Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions, SafeAreaView } from 'react-native';
import styles from '../styles'
import * as styleValues from '../styles'
import * as backEndFunctions from '../backend/back_end_functions'
import Paginator from '../Paginator'
import * as PaginatorValues from '../Paginator'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'




export default class HomeScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {tops: [], bottoms: [], loaded: false}
    this.index = 0
    this.topsList = React.createRef()
    this.bottomsList = React.createRef()
  }

  likeOutfit = async () => {
    if(this.state.loaded) {
      let topIndex = this.getCurrentListIndex(this.topsList.current.offset)
      let bottomIndex = this.getCurrentListIndex(this.bottomsList.current.offset)
      let top = this.state.tops[topIndex]
      let bottom = this.state.bottoms[bottomIndex]

      await backEndFunctions.createNewOutfit(top, bottom)
    }
  }

  getCurrentListIndex(offset) {
    let index = Math.round(offset/PaginatorValues.ITEM_TOTAL_SIZE)
    return index
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
			await backEndFunctions.addImageToDatabase(response.uri)
		}
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
			await backEndFunctions.addImageToDatabase(response.uri)
		}
  }
  
  fetchWeather(lat = 0, lon = 0) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${backEndFunctions.API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          tops:this.state.tops,
          bottoms: this.state.bottoms,
          loaded: this.state.loaded,
          temperature: Math.round(backEndFunctions.convertCelciusToFahrenheit(json.main.temp))
        })
      })
  }

   
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );


    // let temperature = await backEndFunctions.fetchWeather(position.coords.latitude, position.coords.longitude)
    let user = await backEndFunctions.getCurrentUserInfo()
    this.setState({
      tops: await backEndFunctions.retrieveAllTops(user.username),
      bottoms: await backEndFunctions.retrieveAllBottoms(user.username),
      loaded: true,
      temperature: (this.state.temperature != undefined) ? (this.state.temperature) : (0),
    })

  }


  

  render() {
    return (
      <SafeAreaView style = {{flex: 1}}>
        <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}>
                  <Image 
                    style = {styles.menuIcon}
                    source = {require('../assets/images/menu.png')}
                  />
              </TouchableOpacity>
              <View style = {{marginTop: -5, }}>
                <Text style = {styles.homeTitle}>
                  Closet-hangr
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.likeOutfit()}>
                  <Image 
                    style = {styles.heartIcon}
                    source = {require('../assets/images/heart.png')}
                  />
              </TouchableOpacity>
            </View>
          <View>
            <Paginator
              data = {this.state.tops} 
              ref = {this.topsList}
              type = {"Tops"}
            />
            <Paginator
              data = {this.state.bottoms} 
              ref = {this.bottomsList}
              type = {"Bottoms"}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: styleValues.windowWidthHundredth*3}}>
            <TouchableOpacity onPress={this.addFromImagePicker} style = {styles.addImageIcon}>
              <Image source = {require('../assets/images/addFromPhotos.png')} style = {{width: styleValues.windowWidthHundredth * 7, height: styleValues.windowWidthHundredth * 7, marginLeft: styleValues.windowWidthHundredth * 1.5, marginTop: styleValues.windowWidthHundredth * 1.5}}/>
            </TouchableOpacity>
            <View style = {styles.temperatureContainer}>
              <Text style = {{fontSize: 30, fontFamily: 'Avenir'}}>
                {this.state.temperature}°F
              </Text>
            </View>
            <TouchableOpacity onPress={this.addFromCamera} style={styles.addCameraIcon}>
              <Image source = {require('../assets/images/addFromCamera.png')} style = {{width: styleValues.windowWidthHundredth * 6, height: styleValues.windowWidthHundredth * 6, marginLeft: styleValues.windowWidthHundredth * 2, marginTop: styleValues.windowWidthHundredth * 2}}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

