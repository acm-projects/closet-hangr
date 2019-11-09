import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {CustomDrawerNavigator} from './CustomDrawerNavigator'

import AddClothingScreen from './LikedOutfitsScreen'
//import RecommendationsScreen from './RecommendationsScreen'

import { Container, Content } from 'native-base'
import Swiper from 'react-native-swiper'
import RecommendationsScreen from './RecommendationsScreen'
import LikedOutfitsScreen from './LikedOutfitsScreen';

//DIFFERENT PAGES
export class ScreenHub extends Component {
  constructor(props) {
    super(props)
  }

  static router = CustomDrawerNavigator.router

  verticalScroll = (index) => {
    if (index !== 1) {
      this.setState({
        outerScrollEnabled: false
      })
    }
    else {
      this.setState({
        outerScrollEnabled: true
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 1}}>
          <Container>
            <Content>
              <Swiper
                loop={false}
                showsPagination={false}
                horizontal={true}
                index={1}
              >
                <View style={{flex:1}}>
                  <LikedOutfitsScreen/>
                </View>
                <View style={{flex: 1}}>
                  <CustomDrawerNavigator navigation={this.props.navigation} />
                </View>
                <View>
                  <RecommendationsScreen/>
                </View>
              </Swiper>
            </Content>
          </Container>
        </View> 
      </View>
    );
  }
}