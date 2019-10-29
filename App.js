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
import {LandingScreen} from './Screens/LandingScreen'
import {signUpScreen} from './Screens/signUpScreen'
import {confirmSignUpScreen} from './Screens/confirmSignUpScreen'
import {signInScreen} from './Screens/signInScreen'
import {ScreenHub} from './Screens/ScreenHub'
import HomeScreen from './Screens/HomeScreen';
//Uncomment to enable debug warnings
//console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
		Landing: {
			screen: LandingScreen
		},
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
			screen: ScreenHub,
		},
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

  