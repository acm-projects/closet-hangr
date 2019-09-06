# Closet-Hangr
Mobile app that keeps track of your clothing and find ideas for new outfit through artificial intelligence. The app will use artificial intelligence to help find match clothes of the user preferences or color palettes, and use a like/dislike system to improve the process in matching clothes. 

## Getting Started
Follow through the information below to get started!

### Software & Language Prerequisites
#### Flutter: [Documentation](https://flutter.dev/docs) 
Important to use the documentation after installing so you can understand how to write your app!
Installation:
```
1) Head to the documentation link then click on "Get Started."
2) Select your operating system and view the system requirement.
3) Get the Flutter SDK: Follow the steps on Documentation
4) Run flutter doctor to check on needed dependencies
5) Optional: If you want to run Flutter commands in regular console then add Flutter to PATH environment.
6) Install android studio, required for development for Android.
7) You're set.

```
[Why Flutter](https://nevercode.io/blog/flutter-vs-react-native-a-developers-perspective/): Aside from the blog, I personally would be delighted to have knowledge on new technologies over existing ones. 

#### VS Code: [Install](https://code.visualstudio.com/)
We'll be using VS Code as it supports most tech and languages.
```
1.) Install VS Code
2.) Click on View > Command Palette. Then type install and seelct Extensions: Install Extensions.
3.) Type flutter in search field, select Flutter and install. Dart will be installed as well.
```

#### Dart: [Documentation](https://dart.dev/guides)
This is the language for Flutter. It's similiar to Java and Java-Script. It's also brand new!

#### Git [Cheat Sheet](https://www.atlassian.com/dam/jcr:8132028b-024f-4b6b-953e-e68fcce0c5fa/atlassian-git-cheatsheet.pdf)
Required.

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
a.) User friendly interface. An example: using a Tinder-style interface: swipe left (dislike), swipe right (like), swipe down (save for later). Users can also post images.
b.) Contain a login page and menu/account settings.
c.) Have a tracker leaderboard for clothing:
  i. Display most/least worn clothes
d.) Storage for least used and least liked.
e.) Match clothes based on user preferences, color palettes, and match user.

## Stretch Goal (Only work on after MVP is achieved) (not in order)
a.) Implement proactive outfits based on weekly forecasts.
  i. An example: if it’s Winter, suggest sweaters. If it’s Summer, suggest tank tops.
b.) Option to sell garments on eBay.
c.) Blur users faces in images that are uploaded.
