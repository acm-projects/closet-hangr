# Closet Hangr
Mobile app that keeps track of your clothing and find ideas for new outfit through artificial intelligence. The app will use artificial intelligence to help find match clothes of the user preferences or color palettes, and use a like/dislike system to improve the process in matching clothes. 

## Getting Started
Follow through the information below to get started!

### Software & Language Prerequisites
#### React Native: [Documentation](https://facebook.github.io/react-native/docs/getting-started) 
Documentation on React Native. The documentation is definitely more robust compare the Flutter documentation, and this will also help y'all. 

Installation:
```
Expo Cli
1.) Have the latest [NodeJS](https://nodejs.org/en/download/) installed.
2.) Once installed, write "npm install -g expo-cli" onto the command prompt.
3.) After installed, write "expo init AwesomeProject" then select the template and name the project.
4.) Then run "cd AwesomeProject", after that run "npm start"

```
[Why React Native](https://nevercode.io/blog/flutter-vs-react-native-a-developers-perspective/): It's a lot older and contains more documentations and usage so finding resources for this framework would be easier than Flutter.

#### Java Script: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
This is the language for Flutter. It's similiar to Java and Java-Script.

#### VS Code: [Install](https://code.visualstudio.com/)
We'll be using VS Code as it supports most tech and languages.
```
  Pending
```


#### Git [Cheat Sheet](https://www.atlassian.com/dam/jcr:8132028b-024f-4b6b-953e-e68fcce0c5fa/atlassian-git-cheatsheet.pdf)
Using github is required, learn the ropes about github by researching or asking me.
Also get git for windows or mac.

### Technology
#### Machine Learning
We'll be using machine learning to detect colors from clothes. Here's a [blog explaining.](https://towardsdatascience.com/color-identification-in-images-machine-learning-application-b26e770c4c71)

#### Postman
Used for testing API calls. Here's a [blog](https://dev.to/steelwolf180/building-restful-api-with-flask-postman--pytest---part-2-read-time-10-mins-1d6d)

#### AWS: [Link](https://aws.amazon.com/s3/)
Store user outfits, suggest outfits to other. Also to store and retrieve data.

#### OAuth: [Link](https://oauth.net/2/)
Verifying user crendentials/logins.

## MVP (Minimum Viable Product)
1. User friendly interface. An example: using a Tinder-style interface: swipe left (dislike), swipe right (like), swipe down (save for later). Users can also post images.
2. Contain a login page and menu/account settings.
3. Have a tracker leaderboard for clothing:
   * Display most/least worn clothes
4. Storage for least used and least liked.
5. Match clothes based on user preferences, color palettes, and match user.

## Stretch Goal (Only work on after MVP is achieved) (not in order)
- Implement proactive outfits based on weekly forecasts.
   * An example: if it’s Winter, suggest sweaters. If it’s Summer, suggest tank tops.
- Option to sell garments on eBay.
- Blur users faces in images that are uploaded.
