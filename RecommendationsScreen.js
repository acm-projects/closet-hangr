import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import Category from '../components/RecommendationCell'

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
       <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                              Recommendations
                            </Text>

                            <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 20 }}>
                              Based on the weather...
                            </Text>

                            <View style={{ height: 160, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/images/redShirt.png')}
                                        name="Red Shirt"
                                    />
                                    <Category imageUri={require('../assets/images/whiteCami.jpg')}
                                        name="White Camisole"
                                    />
                                    <Category imageUri={require('../assets/images/blackShort.png')}
                                        name="Black Shorts"
                                    />
                                </ScrollView>
                            </View>
                            
                             <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 40 }}>
                              Based on likes and dislikes...
                            </Text>

                            <View style={{ height: 160, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/images/blackPants.png')}
                                        name="Black Jeans"
                                    />
                                    <Category imageUri={require('../assets/images/bluePolo.png')}
                                        name="Blue Polo"
                                    />
                                    <Category imageUri={require('../assets/images/greenSkirt.png')}
                                        name="Green Skirt"
                                    />
                                </ScrollView>
                            </View>


                             <Text style={{ fontSize: 17, fontWeight: '700', paddingHorizontal: 20, marginTop: 40 }}>
                              Brands you might like...
                            </Text>

                            <View style={{ height: 160, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/images/robot-dev.png')}
                                        name="H&M"
                                    />
                                    <Category imageUri={require('../assets/images/robot-dev.png')}
                                        name="Forever 21"
                                    />
                                    <Category imageUri={require('../assets/images/robot-dev.png')}
                                        name="Pacsun"
                                    />
                                </ScrollView>
                            </View>
                        </View>

     
    </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
