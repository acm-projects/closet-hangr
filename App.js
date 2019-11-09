
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
   return (
     <View style={styles.container}>
       <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.SettingsButton}
         onPress={this.onPress}
       >
         <Text style = {[styles.title]}>>Settings: </Text>
       </TouchableOpacity>
       </View>
       
       
              <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.MyAccountbutton}
         onPress={this.onPress}
       >
         <Text style = {[styles.titleAcount]} > MY ACCOUNT                                                                 > </Text>
       </TouchableOpacity>
       
       </View>
       <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Name     </Text>
       </TouchableOpacity>
      </View>
      <View style ={[styles.boarder]}>
<TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Username    </Text>
       </TouchableOpacity>       
      </View>


      <View style ={[styles.boarder]}>
<TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Birthday   </Text>
       </TouchableOpacity>       
       </View>
      

       <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Mobile Number   </Text>
       </TouchableOpacity>       
      
       </View>
       
       <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Email   </Text>
       </TouchableOpacity>  

       </View>

       <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Password  </Text>
       </TouchableOpacity>  

          </View>

          <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >WeatherApp  </Text>
       </TouchableOpacity>  

          </View>



          <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Location </Text>
       </TouchableOpacity>  

          </View>
          <View style ={[styles.boarder]}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style = {[styles.regularTitle]} > >Notifications  </Text>
       </TouchableOpacity>  

          </View>

       </View>

    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10
  
  },
  boarder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#f5f5f5',
  },
  button: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 20
  },

  MyAccountbutton: {
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
    padding: 10
  },

  SettingsButton: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 30
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'mediumseagreen',
   
  },
  regularTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#696969'
  },

  titleAcount: {

    fontSize: 15,
    fontWeight: 'bold',
    color: 'mediumseagreen',
    

  },

  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})


