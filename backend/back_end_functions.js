//General
import * as FileSystem from 'expo-file-system';
// AWS S3
import {Storage} from 'aws-amplify'
// AWS DynanamoDB
import API, { graphqlOperation } from '@aws-amplify/api'
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import * as subscriptions from '../src/graphql/subscriptions';
//Cognito
import Auth from '@aws-amplify/auth'
//Image classification
import Clarifai from 'clarifai'
import * as RecommendationEngine from './recommendation_engine'

//Clarifai api key: 7002f76de9544611a98bbd808fc4078a
//Removebg api key: dvnQFJDWLPH1V1uianGTkpY3
//Imagga key: acc_f321262d2df8ba7
//Imagga secret key: 05a6515cda2c989c606a821f9caa4454
//Weather API Key: 'f324d051137ba2c350b49e9be854ecf9'
export const API_KEY = 'f324d051137ba2c350b49e9be854ecf9'

//Toggle whether the background should be removed
let removeBG = true


/*
  _   _ _____ _     ____  _____ ____    _____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
 | | | | ____| |   |  _ \| ____|  _ \  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
 | |_| |  _| | |   | |_) |  _| | |_) | | |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
 |  _  | |___| |___|  __/| |___|  _ <  |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
 |_| |_|_____|_____|_|   |_____|_| \_\ |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
                                                                                           
*/

 /**
  * Creates and returns a promise that resolves to the URI of the new PNG image made if the URI of the iamge given is not of a PNG
  */ 
 export const createPNG = async(
	/** The URI of an image that is either already or copied as a PNG */
	uri,
) => {
  let splitURI = uri.split(".")
  let fileFormat = splitURI[splitURI.length-1]
  let pngURI = uri
  if(fileFormat!="png")
  {
	  pngURI = uri.substring(0,uri.lastIndexOf(".")) + ".png"
	  await FileSystem.copyAsync({from: uri, to: pngURI})
  }
  return pngURI
}

/**
 * Changes the image at the image URI such that the background is removed
 */
export const removeBackground = async (
  /** The URI of the image to remove the background of */
  uri
) => {
  //Reading the file in base64 into a string for input to the api
  let fileB64 = await FileSystem.readAsStringAsync(uri,{encoding: FileSystem.EncodingType.Base64})
  
  //Background removal API
  let response = await fetch('https://api.remove.bg/v1.0/removebg', {  
	  method: 'POST',
	  headers: {
		  'X-Api-Key': 'dvnQFJDWLPH1V1uianGTkpY3',
		  Accept: 'application/json',
		  'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		  image_file_b64: fileB64,
		  size: 'preview',
		  add_shadow: true,
	  })
  })
  let responseJson = await response.json()
  let newImageB64 = responseJson.data.result_b64
  await FileSystem.writeAsStringAsync(uri, newImageB64,{encoding: FileSystem.EncodingType.Base64})
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Converts the given celcius temperature to fahrenheit
export function convertCelciusToFahrenheit(value) {
	return (1.8 * value) + 32;
 }

/*
  ______   ___   _    _    __  __  ___    ____  ____    _____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
 |  _ \ \ / / \ | |  / \  |  \/  |/ _ \  |  _ \| __ )  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
 | | | \ V /|  \| | / _ \ | |\/| | | | | | | | |  _ \  | |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
 | |_| || | | |\  |/ ___ \| |  | | |_| | | |_| | |_) | |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
 |____/ |_| |_| \_/_/   \_\_|  |_|\___/  |____/|____/  |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
                                                                                                           
*/

/**
 * Creates a new user in the database
 */
export const createNewUser = async (
   u_name = ""
) => {
	console.log(u_name)
   //Create the object with the parameters for mutation
   const information = {
		id: u_name,
      username: u_name
   }

   //Mutate the database
   try {
		const response = await API.graphql(graphqlOperation(mutations.createUser, {input: information}))
		console.log('New user created')
   } catch (err) {console.log('ERROR: Error creating a new user in Dynamo DB', err)}
}

/*
* Creates a new piece of clothing
* Returns the id of the new clothing
*/
export const createNewClothing = async (
	u_name,
	imageKey,
	publicImageKey,
	type,
	top_or_bottom,
	is_for_cold,
	is_for_moderate,
	is_for_hot,
	colorN,
	primaryColorHex,
	secondaryColorHex,

) => {
	const information = {
		key: imageKey,
		publicKey: publicImageKey,
		clothingUserId: u_name,
		type: type,
		topOrBottom: top_or_bottom,
		isForCold: is_for_cold,
		isForModerate: is_for_moderate,
		isForHot: is_for_hot,
		colorName: colorN,
		primaryColor: primaryColorHex,
	}

	try {
		const response = await API.graphql(graphqlOperation(mutations.createClothing, {input: information}))
		console.log('New clothing created')
	} catch (err) {console.log('ERROR: Error creating a new clothing in Dynamo DB', err)}
}

/*
	Take a URI and puts that image in the database
*/
export const addImageToDatabase = async (
	uri
) => {
	let key = ''
	let publicKey = ''
	//Convert the image to a png
	try {
		uri = await createPNG(uri)
		console.log('While adding image to database, successfully created a png')
	} catch (err) {console.log('ERROR: While adding image to database, error creating png', err)}

	//Remove the background from the image
	if(removeBG) {
		try {
			await removeBackground(uri)
			console.log('While adding image to database, successfully removed background')
		} catch (err) {console.log('ERROR: While adding image to databaes, error removing background', err)}
	}

	//Add to S3
	try { //private
		let response = await storeFileInS3(uri)
		console.log('While adding image to database, successfully stored image in S3 private folder')
		key = response.key
	} catch (err) {console.log('ERROR: While adding image to database, error storing in S3'), err}

	try { //public
		let response = await storeFileInS3(uri, 'public')
		console.log('While adding image to database, successfully stored image in S3 public folder')
		publicKey = response.key
	} catch (err) {console.log('ERROR: While adding image to database, error storing in S3'), err}

	//Instantiating the client for classifying the image
	const app = new Clarifai.App({
		apiKey: '7002f76de9544611a98bbd808fc4078a'
	})

	
	//Read the image in as base64
	let image_file_b64 = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.Base64} )

	// Create a new model for classification by type
	await app.models.initModel({id: Clarifai.APPAREL_MODEL, version: 'e0be3b9d6a454f0493ac3a30784001ff'})
	// Predict the image types
	let prediction = await app.models.predict("e0be3b9d6a454f0493ac3a30784001ff", {base64: image_file_b64})
	//Parse for predictions
	let concepts = prediction.outputs[0].data.concepts

	//Notify developer of new concepts
	console.log('NEW CONCEPTS DETECTED:')
	for(let i = 0; i < concepts.length; i++) {
		if(RecommendationEngine.isThere(concepts[i].name) == false)
			console.log(concepts[i].name)
	}
	
	//Make call for the classification for colors
	let myHeaders = new Headers()
	myHeaders.append("Content-Type", "multipart/form-data")
	myHeaders.append("Authorization", "Basic YWNjX2YzMjEyNjJkMmRmOGJhNzowNWE2NTE1Y2RhMmM5ODljNjA2YTgyMWY5Y2FhNDQ1NA==")
	let params = {
		image_base64: image_file_b64,
		extract_overall_colors: 0,
	}
	let formData = new FormData();
	for(var k in params) {
		formData.append(k, params[k])
	}
	let request = {
			method: 'POST',
			headers: myHeaders,
			body: formData
	}
	let response = await fetch('https://api.imagga.com/v2/colors', request)
	let responseJson = await response.json()
	let colors = responseJson.result.colors.foreground_colors

	// Insert the clothing in the database and connect to the current user
	let user = await Auth.currentUserInfo()
	try {
		await createNewClothing(user.username, key, publicKey, concepts[0].name, RecommendationEngine.topOrBottonm(concepts[0].name), RecommendationEngine.isForCold(concepts[0].name), RecommendationEngine.isForModerate(concepts[0].name),  RecommendationEngine.isForHot(concepts[0].name), RecommendationEngine.getColorName(colors[0].r, colors[0].g, colors[0].b), colors[0].closest_palette_color_html_code)
		console.log('While adding image to database, successfully created clothing')
	} catch (err) {console.log('ERROR: While adding image to database, error creating image in database',err)}
}

/*
	Retrieves all of the clothing for a given user. Returns an array of objects
*/
export const retrieveAllUserClothing = async (
	u_name
) => {
	const information = {
		id: u_name
	}

	try {
		const response = await API.graphql(graphqlOperation(queries.getUser, {id: u_name}))
		console.log("User's clothing successfully received")

		if(response.data.getUser.clothing.items.length > 0) {	
			let clothing = []
			//Create datastructure for preloading
			for(let i = 0; i < response.data.getUser.clothing.items.length; i++) {
				let item = {
					id: response.data.getUser.clothing.items[i].id,
					uri: await Storage.get(response.data.getUser.clothing.items[i].key,{level: 'private',}),
					type: response.data.getUser.clothing.items[i].type,
					topOrBottom: response.data.getUser.clothing.items[i].topOrBottom,
					isForCold: response.data.getUser.clothing.items[i].isForCold,
					isForModerate: response.data.getUser.clothing.items[i].isForModerate,
					isForHot: response.data.getUser.clothing.items[i].isForHot,
				}
				clothing.push(item)
			}
			return clothing
		}
	} catch (err) {console.log("ERROR: Error when retrieving clothing", err)}
	return []
}


/*
	Retrieves all of the tops of a given user. Returns an array of objects
*/
export const retrieveAllTops = async (
	u_name 
) => {
	let allClothing = await retrieveAllUserClothing(u_name)
	let tops = []
	for(let i = 0; i < allClothing.length; i++) {
		if(allClothing[i].topOrBottom == 'top')
			tops.push(allClothing[i])
	}
	return tops
}

/*
	Retrieves all of the bottoms of a given user. Returns an array of objects
*/
export const retrieveAllBottoms = async (
	u_name 
) => {
	let allClothing = await retrieveAllUserClothing(u_name)
	let bottoms = []
	for(let i = 0; i < allClothing.length; i++) {
		if(allClothing[i].topOrBottom == 'bottom')
			bottoms.push(allClothing[i])
	}
	return bottoms
}

/*
	Creates a new liked outfit from the 2 given clothing objects
*/
export const createNewOutfit = async (
	top,
	bottom,
) => {
	// Getting the username of the current user
	let username = (await getCurrentUserInfo()).username

	try {
		//Creating the outfit
		let newOutfit = await API.graphql(graphqlOperation(mutations.createOutfit, {input: 
			{
				outfitUserId: username
			}
		}))

		//Connecting the top of the outfit
		let test = await API.graphql(graphqlOperation(mutations.createOutfitClothing, {
			input: {
				outfitClothingOutfitId: newOutfit.data.createOutfit.id,
				outfitClothingClothingId: top.id,
			}
		}))

		//Connecting the bottom of the outfit
		await API.graphql(graphqlOperation(mutations.createOutfitClothing, {
			input: {
				outfitClothingOutfitId: newOutfit.data.createOutfit.id,
				outfitClothingClothingId: bottom.id,
			}
		}))
		console.log("Successfully created outfit")
	} catch (err) {console.log("ERROR: Error adding new clothing to database", err)}
}

/*
	Gets all of the given user's liked outfits. Returns a list of objects that contain the top and bottom clothing objects under the top and bottom keys respectively
*/
export const retrieveAllOutfits = async (
	u_name
)=> {
	let outfits = []
	let userOutfits = (await API.graphql(graphqlOperation(queries.getUser, {id: u_name}))).data.getUser.outfits.items

	//Generating the list of outfits
	for(let i = 0; i < userOutfits.length; i++) {
		let outfit = await API.graphql(graphqlOperation(queries.getOutfit, {id: userOutfits[i].id}))

		let outfitClothingId0 = outfit.data.getOutfit.clothing.items[0].id
		let outfitClothingId1 = outfit.data.getOutfit.clothing.items[1].id

		//Finding out what id corresponds to the top and what id corresponds to the bottom
		let outfitClothing0 = await API.graphql(graphqlOperation(queries.getOutfitClothing, {id: outfitClothingId0}))
		let outfitClothing1 = await API.graphql(graphqlOperation(queries.getOutfitClothing, {id: outfitClothingId1}))

		let clothing0 = outfitClothing0.data.getOutfitClothing.clothing
		let clothing1 = outfitClothing1.data.getOutfitClothing.clothing

		let top = {
			id: clothing0.id,
			uri: await Storage.get(clothing0.key, {level: 'private', download: false})
		}
		let bottom = {
			id: clothing1.id,
			uri: await Storage.get(clothing1.key, {level: 'private', download: false})
		}

		//Switching the top and bottom objects if they are not assigned to the correct key
		if(clothing0.topOrBottom == 'bottom') {
			let temp = top
			top = bottom
			bottom = temp
		}

		let outfitToPush = {
			id: outfit.data.getOutfit.id,
			top: top,
			bottom: bottom,
		}

		outfits.push(outfitToPush)
	}

	return outfits
}

 /*
   ____ _____   _____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
  / ___|___ /  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
  \___ \ |_ \  | |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
   ___) |__) | |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
  |____/____/  |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
                                                                   
 */

/**
 * Stores the file in the given URI in S3 with the specified level of permission
 */
export const storeFileInS3 = async (
	fileUri,
	access = "private",
	awsKey = null,
 ) => {
	const blob = await new Promise((resolve, reject) => {
	  const xhr = new XMLHttpRequest();
	  xhr.onload = function() {
		 resolve(xhr.response);
	  };
	  xhr.onerror = function() {
		reject(new TypeError("Network request failed"));
	  };
	  xhr.responseType = "blob";
	  xhr.open("GET", fileUri, true);
	  xhr.send(null);
	});
	const { name, type } = blob._data;
	const options = {
	  level: access,
	  contentType: type,
	};
	const key = awsKey || name;
	try {
	  const result = await Storage.put(key, blob, options);
	  return {
		 access,
		 key: result.key
	  };
	} catch (err) {
	  throw err;
	}
 }

/*
   ____ ___   ____ _   _ ___ _____ ___    _____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
  / ___/ _ \ / ___| \ | |_ _|_   _/ _ \  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
 | |  | | | | |  _|  \| || |  | || | | | | |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
 | |__| |_| | |_| | |\  || |  | || |_| | |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
  \____\___/ \____|_| \_|___| |_| \___/  |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
                                                                                             
*/


/**
 * Signs up the user through AWS cognito 
 */
export const signUp = async (
	email,
	username,
	password,
) => {
	console.log("attempting to sign up")

	try {
		// Sign up
		await Auth.signUp({username, password, attributes: {email}})
		console.log('Successfully signed up')
	} catch (err) {console.log('ERROR: Error signing up: ', err)}

	try {
		await Auth.signIn({username, password})
		console.log('Successfully signed in')
	} catch (err) {console.log('ERROR: Error Signing in: ', err)}
	//Adding the user to the database
	createNewUser(username)
}

/**
 * Confirms the sign up of the user through AWS cognito
 */
export const confirmSignUp = async (
	username, 
	authentificationCode,
) => {
	try {
		await Auth.confirmSignUp (username, authentificationCode)
		console.log('User sign up successfully confirmed')
	} catch (err) {console.log('ERROR: Error confirming sign up: ', err)}
}

/**
 * Signs the user in through AWS Cognito
 */
export const signIn = async (
	username,
	password
) => {
	try {
		await Auth.signIn(username, password)
		console.log('User sign in successful')
	} catch (err) {console.log('ERROR: Error signing in: ', err)}
}

/**
 * Gets the info of the current user
 * Returns an user object
 */
export const getCurrentUserInfo = async () => {
	try {
		let user = await Auth.currentUserInfo()
		return user
	} catch (err) {console.log('Current user info error: ', err)}
}

/*
 * Signs the current user out
*/
export const signOut = async() => {
	try {
		await Auth.signOut()
		console.log('Use successfully signed out')
	} catch (err) { console.log('ERROR: error signing the current user out', err)}
}

