import React, { Component } from 'react';import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";

class RecommendationCell extends Component {
    render() {
        return (
            <View style={{ height: 150, width: 150, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd', borderRadius: 25}}>
                <View style={{ flex: 2 }}>
                    
                <ImageBackground source={this.props.imageUri} style={{resizeMode: 'cover', width: '100%', height: '100%'}}>
  </ImageBackground>
                   {/*<ImageBackground
  source={{ uri: this.props.imageUri }}
  style={{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    position: 'relative', // because it's parent
    top: 2,
    left: 2
  }}
>
  <Text style={{ fontSize: 15, color: '#000000' }}>{this.props.name}</Text>
</ImageBackground>
                    
                    
  <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                        <Text style={{ fontSize: 15, color: '#000000' }}>{this.props.name}</Text>
                    
*/}

                </View>
                
            </View>
        );
    }
}
export default RecommendationCell;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});