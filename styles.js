import {StyleSheet, Dimensions} from 'react-native';

export const COLOR_PRIMARY = '#00bf7f';
export const COLOR_SECONDARY = '#1da4c2';
export const COLOR_TEXT = "#080808"
export const FONT_NORMAL = 'Avenir';
export const FONT_BOLD = '';
export const BORDER_RADIUS = 25;

export const windowWidthHundredth = Dimensions.get('window').width/100.0
 
 export default styles = StyleSheet.create({
	container: {
		 flex: 1,
		 backgroundColor: '#FFFFFF',
		 alignItems: 'center',
		 justifyContent: 'center',
	  },
	  logoContainer: {
		 alignItems: 'center',
		 marginBottom: 40,
	  },
	  logo: {
		 height: 100,
		 width: 140,
	  },
	  menuIcon: {
			height: windowWidthHundredth*7, 
			width: windowWidthHundredth*7,
			marginLeft: windowWidthHundredth*2,
	  },
	  heartIcon: {
			height: windowWidthHundredth*7, 
			width: windowWidthHundredth*7,
			marginRight: windowWidthHundredth*2, 
	  },
	  addImageIcon: {
			width: windowWidthHundredth * 10,
			height: windowWidthHundredth * 10,
			marginLeft: windowWidthHundredth*2, 
			backgroundColor: COLOR_SECONDARY,
			borderRadius: 250,
			shadowColor: '#222222',
			shadowOffset: {width: 0, height: 2},
			shadowOpacity: 1,
			shadowRadius: 2,
		},
		addCameraIcon: {
			width: windowWidthHundredth * 10,
			height: windowWidthHundredth * 10, 
			marginRight: windowWidthHundredth*2, 
			backgroundColor: COLOR_SECONDARY,
			borderRadius: 250,
			shadowColor: '#222222',
			shadowOffset: {width: 0, height: 2},
			shadowOpacity: 1,
			shadowRadius: 2,
  		},
	  title: {
			color: COLOR_TEXT,
			fontFamily: FONT_NORMAL,
			fontSize: 36,
			fontWeight: 'bold',
			marginTop: 20,
			width: 300,
			justifyContent: 'center',
			textAlign: 'center',
	  },
	  homeTitle: {
			fontSize: 24, 
			fontWeight: '700', 
			paddingHorizontal: 20, 
			fontFamily: 'Avenir',
			textDecorationLine: 'underline'
	  },
	  heading1: {
			fontSize: 24, 
			fontWeight: '700', 
			paddingHorizontal: 20, 
			marginBottom: 10 ,
			fontFamily: 'Avenir'
	  },
	  heading2: {
			fontSize: 17, 
			fontWeight: '700', 
			paddingHorizontal: 20, 
			paddingTop: 10 ,
			fontFamily: 'Avenir',
			marginBottom: 10 ,
	  },
	  fieldContainer: { 
		 margin: 2,
		 padding: 12,
		 margin: 10,
		 height: 50,
		 width: 250,
		 textAlign: 'left',
		 alignItems: 'center',
		 justifyContent: 'center',
		 backgroundColor: COLOR_SECONDARY,
		 borderRadius: BORDER_RADIUS
	  },
	  regularText: {
		 fontFamily: FONT_NORMAL,
		 fontSize: 14,
		 color: COLOR_TEXT,
	  },
	  promptText: {
		fontFamily: FONT_NORMAL,
		fontSize: 25,
		color: COLOR_TEXT,
	 },
	  inputText: {
		fontFamily: FONT_NORMAL,
		 fontSize: 18,
		 color: COLOR_TEXT,
		 padding: 1,
		 backgroundColor: COLOR_SECONDARY,
	  },
	  signUpButton: {
		backgroundColor: COLOR_PRIMARY,
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: BORDER_RADIUS,
		width: 125,
		alignItems: "center"
	  },
	  signInButton: {
		backgroundColor: COLOR_PRIMARY,
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: BORDER_RADIUS,
		width: 125,
		alignItems: "center"
	  },
	  temperatureContainer: {
		backgroundColor: COLOR_SECONDARY,
		borderRadius: BORDER_RADIUS,
		width: 110,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#222222',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 1,
		shadowRadius: 2,
	  },

 })
 
