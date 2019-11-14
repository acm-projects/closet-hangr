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
