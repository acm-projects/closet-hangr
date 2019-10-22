//Amplify
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: { //Needed to disable possible promise reject error from analytics
      disabled: true
  }
});
//Authentification
import { withAuthenticator, S3Image } from 'aws-amplify-react-native'
// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Pages
import {signUpScreen} from './signUpScreen'
import {confirmSignUpScreen} from './confirmSignUpScreen'
import {signInScreen} from './signInScreen'
import {MainScreen} from './MainScreen'

const AppNavigator = createStackNavigator({
		SignUp: {
			screen: signUpScreen,
		},
		ConfirmSignUp: {
			screen: confirmSignUpScreen,
		},
		SignIn: {
			screen: signInScreen,
		},
		Home: {
			screen: MainScreen,
		}
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		},
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
);
 
export default createAppContainer(AppNavigator);

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
     _    ____  ____     ____ _     ___ _____ _   _ ___ _   _  ____   ____   _    ____ _____                                                            
    / \  |  _ \|  _ \   / ___| |   / _ \_   _| | | |_ _| \ | |/ ___| |  _ \ / \  / ___| ____|                                                           
   / _ \ | | | | | | | | |   | |  | | | || | | |_| || ||  \| | |  _  | |_) / _ \| |  _|  _|                                                             
  / ___ \| |_| | |_| | | |___| |__| |_| || | |  _  || || |\  | |_| | |  __/ ___ \ |_| | |___                                                            
 /_/   \_\____/|____/   \____|_____\___/ |_| |_| |_|___|_| \_|\____| |_| /_/   \_\____|_____|                                                           
                                                                                                                                                        
 */
/*
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
 */
 
/*
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
 */