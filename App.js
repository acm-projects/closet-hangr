/*
  General
*/
import React, { Component } from 'react';
import { Image, StyleSheet, Platform, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
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
import { withAuthenticator, S3Image } from 'aws-amplify-react-native'

import * as backendFunctions from './back_end_functions'

//Font
import * as Font from 'expo-font'

/*
class App extends Component {
  state = {
		name: "",
		User: [],
		testURI: "file:///var/mobile/Containers/Data/Application/7CDB855D-C894-4A34-A2A8-FC45A0D87B9A/Library/Caches/ExponentExperienceData/%2540noahagonzo%252Fexpo-template-bare/ImagePicker/C57E4CEB-A7A7-4383-AAD7-3654F547CA69.jpg"
	}
	 
	onChangeText = (key, val) => {
		this.setState({ [key]: val })
	}

	addUser = async event => {

		const { name, User } = this.state

		event.preventDefault()

		backendFunctions.createNewUser(name)

		
		//	ASKING FOR PERMISSIONS
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status2, permissions2 } = await Permissions.askAsync(Permissions.CAMERA);
   
		//	Calling the image picker
		let result3 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3, 4],
		 });
		 let uri = result3.uri;
		 this.state.testURI = uri
		 console.log(result3)

		// 	Calling the Camera
		let result4 = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3,4],
		})
		//let uri = result4.uri;
		

		//Letting the database update
		await backendFunctions.sleep(2000);

		
		//	Listing the items in the user's folder
		//await Storage.list('', {level: 'private'})
		//.then(result => console.log(result))
		//.catch(err => console.log(err));
		

		uri = (await backendFunctions.createPNG(uri))

		//Remove background
		await backendFunctions.removeBackground(uri)
		console.log("URI: " + uri)
		this.state.testURI = uri
  }

  render() {
    return (
      <View style={styles.container}>
				<TextInput
					style={styles.inputText}
					value={this.state.name}
					onChangeText={val => this.onChangeText("name", val)}
					placeholder='Add a User'
				/>
				<TouchableOpacity onPress={this.addUser} style={styles.buttonContainer}>
					<Text style={styles.regularText}>Add +</Text>
				</TouchableOpacity>
				<Image
					style={{width: 100, height: 100}}
					source={{uri: this.state.testURI}}
				/>
				<Image
					style={{width: 100, height: 100}}
					source={{uri: this.state.testURI}}
				/>
			</View>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true })

*/

/*
____ ___ ____ _   _   _   _ ____    ____   _    ____ _____ 
 / ___|_ _/ ___| \ | | | | | |  _ \  |  _ \ / \  / ___| ____|
 \___ \| | |  _|  \| | | | | | |_) | | |_) / _ \| |  _|  _|  
  ___) | | |_| | |\  | | |_| |  __/  |  __/ ___ \ |_| | |___ 
 |____/___\____|_| \_|  \___/|_|     |_| /_/   \_\____|_____|
                                                             
*/
/*
export default class signUpPage extends Component {
	componentDidMount() {
		Font.loadAsync({
		  'Aventir': require('./assets/fonts/Avenir.ttf'),
		});
	 }

	constructor(props) {
		super(props);
		this.state = {email: '', username: '', password: ''};
	 }

	signUp = async event => {
		backendFunctions.signUp(this.state.email, this.state.username, this.state.password)
	}

	 changeEmail = (newValue) => {
		this.setState({
		  email: newValue,
		});
	 }

	 changeUsername = (newValue) => {
		this.setState({
		  username: newValue,
		});
	 }

	 changePassword = (newValue) => {
		 this.setState({
			 password: newValue,
		 })
	 }

	render() {
	  return(
		 <View style={styles.container}>
			<View style = {styles.logoContainer}>
			  <Logo />
			  	<Text style={styles.title}>
			  </Text>
			</View>
			<View style = {styles.fieldContainer}>
			  <EmailField email = {this.state.email} changeEmail={this.changeEmail.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
			  <UserNameField username = {this.state.username} changeUsername = {this.changeUsername.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
				<PasswordField password = {this.state.password} changePassword = {this.changePassword.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.signUp} style={styles.signUpButton}>
				<Text style={styles.regularText}>Sign Up</Text>
			</TouchableOpacity>
				<Text >
					Already a member?
				</Text>
			<TouchableOpacity onPress={this.signUp} style={styles.signInButton}>
				<Text style={styles.regularText}>Log in</Text>
			</TouchableOpacity>
		 </View>
	  );
	}
 }
 
 export class Background extends Component {
	render() {
	  return(
		 <View style={styles.container}>
			<Logo hanger/>
		 </View>
	  );
	}
 }
 
 //This is the class for the Logo! Replace with the actual logo
 export class Logo extends Component {
	render() {
	  let pic = {
		 uri: 'https://cdn4.vectorstock.com/i/1000x1000/21/33/hanger-icon-white-on-the-blue-background-vector-3452133.jpg'
	  };//gonna crop this soon!! or replace with our own logo (png file)
	  return (
		 <Image
		 style={styles.logo}
		 source={pic} />
	  );
	}
 }
 
 //EMAIL TEXT FIELD
 export class EmailField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
				maxLength={30}
			  placeholder="        Email        "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeEmail(text)}
			  value={this.props.email}
			/>
		 </View>
	  );
	}
 }

 //USERNAME TEXT FIELD
 export class UserNameField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="     Username    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeUsername(text)}
			  value={this.props.username}
			/>
		 </View>
	  );
	}
 }

  
 // PASSWORD TEXT FIELD
 export class PasswordField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="    Password    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changePassword(text)}
			  value={this.props.password}
			/>
		 </View>
	  );
	}
 }
 */


/*
   ____ ___  _   _ _____ ___ ____  __  __   ____ ___ ____ _   _   _   _ ____    ____   _    ____ _____                                                      
  / ___/ _ \| \ | |  ___|_ _|  _ \|  \/  | / ___|_ _/ ___| \ | | | | | |  _ \  |  _ \ / \  / ___| ____|                                                     
 | |  | | | |  \| | |_   | || |_) | |\/| | \___ \| | |  _|  \| | | | | | |_) | | |_) / _ \| |  _|  _|                                                       
 | |__| |_| | |\  |  _|  | ||  _ <| |  | |  ___) | | |_| | |\  | | |_| |  __/  |  __/ ___ \ |_| | |___                                                      
  \____\___/|_| \_|_|   |___|_| \_\_|  |_| |____/___\____|_| \_|  \___/|_|     |_| /_/   \_\____|_____|                                                                                                                                                                                                             
*/
/*
export default class confirmSignUpPage extends Component {
	componentDidMount() {
		Font.loadAsync({
		  'Aventir': require('./assets/fonts/Avenir.ttf'),
		});
	 }

	constructor(props) {
		super(props);
		this.state = {username: "", confirmationCode: ""};
	 }

	confirmSignUp = async event => {
		backendFunctions.confirmSignUp(this.state.username, this.state.confirmationCode)
	}

	changeUsername = (newValue) => {
		this.setState({
		  username: newValue,
		});
	 }

	 changeConfirmationCode = (newValue) => {
		 this.setState({
			 confirmationCode: newValue,
		 })
	 }

	render() {
	  return(
		 <View style={styles.container}>
			<View style = {styles.logoContainer}>
			  <Logo />
			  	<Text style={styles.title}>
			  </Text>
			</View>
			<View style = {styles.fieldContainer}>
			  <UserNameField username = {this.state.username} changeUsername = {this.changeUsername.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
				<ConfirmationCodeField confirmationCode = {this.state.confirmationCode} changeConfirmationCode = {this.changeConfirmationCode.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.confirmSignUp} style={styles.signInButton}>
				<Text style={styles.regularText}>Confirm Sign Up</Text>
			</TouchableOpacity>
		 </View>
	  );
	}
 }
 
 export class Background extends Component {
	render() {
	  return(
		 <View style={styles.container}>
			<Logo hanger/>
		 </View>
	  );
	}
 }
 
 //This is the class for the Logo! Replace with the actual logo
 export class Logo extends Component {
	render() {
	  let pic = {
		 uri: 'https://cdn4.vectorstock.com/i/1000x1000/21/33/hanger-icon-white-on-the-blue-background-vector-3452133.jpg'
	  };//gonna crop this soon!! or replace with our own logo (png file)
	  return (
		 <Image
		 style={styles.logo}
		 source={pic} />
	  );
	}
 }

 //USERNAME TEXT FIELD
 export class UserNameField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="     Username    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeUsername(text)}
			  value={this.props.username}
			/>
		 </View>
	  );
	}
 }

  
 // CONFIRMATION TEXT FIELD
 export class ConfirmationCodeField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="    Confirmation Code    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeConfirmationCode(text)}
			  value={this.props.confirmationCode}
			/>
		 </View>
	  );
	}
 }
*/

/*
   ____ ___ ____ _   _   ___ _   _   ____   _    ____ _____ 
  / ___|_ _/ ___| \ | | |_ _| \ | | |  _ \ / \  / ___| ____|
  \___ \| | |  _|  \| |  | ||  \| | | |_) / _ \| |  _|  _|  
   ___) | | |_| | |\  |  | || |\  | |  __/ ___ \ |_| | |___ 
  |____/___\____|_| \_| |___|_| \_| |_| /_/   \_\____|_____|
                                                            
*/

/*
export default class signInPage extends Component {
	componentDidMount() {
		Font.loadAsync({
		  'Aventir': require('./assets/fonts/Avenir.ttf'),
		});
	 }

	constructor(props) {
		super(props);
		this.state = {username: '', password: ''};
	 }

	signIn = async event => {
		backendFunctions.signIn(this.state.username, this.state.password)
	}

	 changeUsername = (newValue) => {
		this.setState({
		  username: newValue,
		});
	 }

	 changePassword = (newValue) => {
		 this.setState({
			 password: newValue,
		 })
	 }

	render() {
	  return(
		 <View style={styles.container}>
			<View style = {styles.logoContainer}>
			  <Logo />
			  	<Text style={styles.title}>
			  </Text>
			</View>
			<View style = {styles.fieldContainer}>
			  <UserNameField username = {this.state.username} changeUsername = {this.changeUsername.bind(this)}/>
			</View>
			<View style = {styles.fieldContainer}>
				<PasswordField password = {this.state.password} changePassword = {this.changePassword.bind(this)}/>
			</View>
			<TouchableOpacity onPress={this.signUp} style={styles.signUpButton}>
				<Text style={styles.regularText}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={this.signIn} style={styles.signInButton}>
				<Text style={styles.regularText}>Sign in</Text>
			</TouchableOpacity>
		 </View>
	  );
	}
 }
 
 export class Background extends Component {
	render() {
	  return(
		 <View style={styles.container}>
			<Logo hanger/>
		 </View>
	  );
	}
 }
 
 //This is the class for the Logo! Replace with the actual logo
 export class Logo extends Component {
	render() {
	  let pic = {
		 uri: 'https://cdn4.vectorstock.com/i/1000x1000/21/33/hanger-icon-white-on-the-blue-background-vector-3452133.jpg'
	  };//gonna crop this soon!! or replace with our own logo (png file)
	  return (
		 <Image
		 style={styles.logo}
		 source={pic} />
	  );
	}
 }

 //USERNAME TEXT FIELD
 export class UserNameField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View style={styles.fieldContainer}>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="     Username    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changeUsername(text)}
			  value={this.props.username}
			/>
		 </View>
	  );
	}
 }

  
 // PASSWORD TEXT FIELD
 export class PasswordField extends Component {
	constructor(props) {
	  super(props);
	}
 
	render() {
	  return (
		 <View>
			<TextInput
			  style={styles.inputText}
			  maxLength={20}
			  placeholder="    Password    "
			  placeholderTextColor={'#2a78a0'}
			  onChangeText={(text) => this.props.changePassword(text)}
			  value={this.props.password}
			/>
		 </View>
	  );
	}
 }
 */

 /*
     _    ____  ____     ____ _     ___ _____ _   _ ___ _   _  ____   ____   _    ____ _____                                                            
    / \  |  _ \|  _ \   / ___| |   / _ \_   _| | | |_ _| \ | |/ ___| |  _ \ / \  / ___| ____|                                                           
   / _ \ | | | | | | | | |   | |  | | | || | | |_| || ||  \| | |  _  | |_) / _ \| |  _|  _|                                                             
  / ___ \| |_| | |_| | | |___| |__| |_| || | |  _  || || |\  | |_| | |  __/ ___ \ |_| | |___                                                            
 /_/   \_\____/|____/   \____|_____\___/ |_| |_| |_|___|_| \_|\____| |_| /_/   \_\____|_____|                                                           
                                                                                                                                                        
 */

 export default class addClothingPage extends Component {
	componentDidMount() {
		Font.loadAsync({
		  'Aventir': require('./assets/fonts/Avenir.ttf'),
		});
	}

	addFromCamera = async event => {
		//	ASKING FOR PERMISSION
		const { status2, permissions2 } = await Permissions.askAsync(Permissions.CAMERA);

		// Calling the Camera
		let response = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3,4],
		})
		if(response.cancelled != 'false')
			backendFunctions.addImageToDatabase(response.uri)
	}

	addFromImagePicker = async event => {
		// ASKING FOR PERMISSION
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		let response = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3, 4],
		});
		if(response.cancelled != 'false')
			backendFunctions.addImageToDatabase(response.uri)
	}

	render() {
		return(
			<View>
				<TouchableOpacity onPress={this.addFromCamera} style={styles.signUpButton}>
					<Text style={styles.regularText}>
						Take Picture
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.addFromImagePicker} style={styles.signUpButton}>
					<Text style={styles.regularText} >
						Choose from Photos
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
 }
 

 const styles = StyleSheet.create({
	container: {
		 flex: 1,
		 backgroundColor: '#3199ce',
		 alignItems: 'center',
		 justifyContent: 'center',
	  },
	  logoContainer: {
		 alignItems: 'center',
		 //justifyContent: 'center',
		 height: 300,
	  },
	  logo: {
		 height: 150,
		 width: 180,
		 borderWidth: 15,
		 borderColor: '#96c3da',
	  },
	  title: {
		 color: '#FFF',
		 //fontFamily: 'Roboto',
		 fontSize: 24,
		 fontWeight: 'bold',
		 marginTop: 10,
		 width: 200,
		 justifyContent: 'center',
		 textAlign: 'center',
	  },
	  fieldContainer: { 
		 margin: 2,
		 padding: 5.5,
		 height: 60,
		 width: 1000,
		 textAlign: 'left',
		 alignItems: 'center',
		 justifyContent: 'center',
	  },
	  regularText: {
		 fontFamily: 'Avenir',
		 fontSize: 14,
		 color: '#3199ce',
	  },
	  inputText: {
		fontFamily: 'Avenir',
		 fontSize: 14,
		 color: '#3199ce',
		 padding: 10,
		 backgroundColor: '#FFF',
		 borderWidth: 4,
		 borderColor: '#96c3da',
	  },
	  signUpButton: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		width: 100,
		alignItems: "center"
	  },
	  signInButton: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		width: 75,
		alignItems: "center"
	  }
 })
 