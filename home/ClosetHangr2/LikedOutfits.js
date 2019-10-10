import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, Image } from 'react-native';

import App from './App'

export default class LikedOutfitsScreen extends React.Component {
  render() {
    return (
      <View style={{  }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Image 
              style = {{height: 55, width: 55, marginTop: 40, marginLeft: 10}}
              source = {require('./Fw96Z.png')}
            />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25, textAlign: 'center', textAlignVertical: 'center' }}>Liked Outfits Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})