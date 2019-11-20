//General
import * as FileSystem from 'expo-file-system';
// AWS S3
import {Storage} from 'aws-amplify'
// AWS DynanamoDB
import API, { graphqlOperation } from '@aws-amplify/api'
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import * as subscriptions from '../src/graphql/subscriptions';

/*
     ____ ___  _   _  ____ _____ ____ _____ ____   
    / ___/ _ \| \ | |/ ___| ____|  _ \_   _/ ___|_ 
   | |  | | | |  \| | |   |  _| | |_) || | \___ (_)
   | |__| |_| | |\  | |___| |___|  __/ | |  ___) | 
    \____\___/|_| \_|\____|_____|_|    |_| |____(_)

   'Pant Suit',
   'Overalls',
   'Tie',
   'Bodysuit',
   'Romper',
   'Skirt Suit',
   'Boat Shoes',
   'Tracksuit',
   'Swimwear',
   'Belt',
   "Men's Sandals",
   'Gloves',
   'Earring',
   'Sarong',
   'Sleepwear',
   'Bracelet',
   'Necklace',
   'Kimonos',
   "Women's Scarf",
   'Cocktail Dress',
   'Little Black Dress',
   'Formal Dress',
   'Maxi Dress',
   'Casual Dress',
   'Tankini',
   'Jumpsuit',
   'Polos',
   "Men's Shorts",
   'Button-Down',
   'Blouse',
   'Kimono',
   'Robe',
   'T-Shirt',
   'Blazer',
   'Raincoats',
   'Dress',
   'Denim Jacket',
   'Peacoat',
   'Activewear T Shirt',
   'Hoodies',
   'Fleece Jacket',
   'Sweater',
   'Cardigan',
   'Spring Jacket',
   'Sports Bra',
   'Bomber Jacket',
   'Tube Top',
   'Tunic',
   'Halter Top',
   'Tank Top',
   'Vest',
   'Leather Jacket',
   'Capris',
   'Wide Leg Pants',
   'Relaxed Pants',
   'Boot Cut Pants',
   'Jeans',
   'Leggings',
   'Boyfriend Pants',
   "Women's Shorts",
   'Tights',
   'Skinny Pants',
   "Women's Board Shorts",
   'Cargo Shorts',
   "Men's Underwear",
   'Burmuda Shorts',
   "Women's Short Shorts",
   "Women's Jean Shorts",
   'Panties',
   'Skirt',
   'Jean Skirt',
   'Maxi Skirt',
   'Midi Skirt',
   'Sweatshirt',
   'Wallet',
   'Ring',
   'Mini Skirt',
   'Umbrella',
   "Men's Watch",
   "Men's Hat",
                                                     
*/

let colorNames = [
   [
      [
         'Black', // 0 0 0
         'Dark Blue', // 0 0 1
         'Blue', // 0 0 2
      ], 
      [
         'Green', // 0 1 0
         'Teal', // 0 1 1
         'Azure', // 0 1 2
      ],
      [
         'Chartreuse', // 0 2 0 maybe lime
         'Aquamarine', // 0 2 1
         'Cyan', // 0 2 2                
      ],
   ],
   [
      [
         'Maroon', // 1 0 0
         'Plum', // 1 0 1
         'Indigo', // 1 0 2
      ],
      [
         'Olive', // 1 1 0
         'Gray', // 1 1 1
         'Pale Blue', // 1 1 2
      ],
      [
         'Lime', // 1 2 0
         'Light Green', // 1 2 1
         'Light Blue', // 1 2 2
      ],
   ],
   [
      [
         'Red', // 2 0 0
         'Deep Pink', // 2 0 1
         'Magenta', // 2 0 2
      ],
      [
         'Orange', // 2 1 0
         'Salmon', // 2 1 1
         'Pink', // 2 1 2
      ],
      [
         'Yellow', // 2 2 0
         'Tan', // 2 2 1
         'White', // 2 2 2
      ],
   ]
]

let plurals = [
   //Types of clothing
   ['Pant Suit', 'Pant Suits'],
   ['Overalls', 'Overalls'],
   ['Tie', 'Ties'],
   ['Bodysuit', 'Bodysuits'],
   ['Romper', 'Rompers'],
   ['Skirt Suit', 'Skirt Suits'],
   ['Boat Shoes', 'Boat Shoes'],
   ['Tracksuit', 'Tracksuits'],
   ['Swimwear', 'Swimwear'],
   ['Belt', 'Belts'],
   ["Men's Sandals", "Men's Sandals"],
   ['Gloves', 'Gloves'],
   ['Earring', 'Earrings'],
   ['Sarong', 'Sarongs'],
   ['Sleepwear', 'Sleepwear'],
   ['Bracelet', 'Bracelets'],
   ['Necklace', 'Necklaces'],
   ['Kimonos', 'Kimonos'],
   ["Women's Scarf", "Women's Scarves"],
   ['Cocktail Dress', 'Cocktail Dresses'],
   ['Little Black Dress', 'Little Black Dresses'],
   ['Formal Dress', 'Formal Dresses'],
   ['Maxi Dress', 'Maxi Dresses'],
   ['Casual Dress', 'Casual Dresses'],
   ['Tankini', 'Tankinis'],
   ['Jumpsuit', 'Jumpsuits'],
   ['Polos', 'Polos'],
   ["Men's Shorts", "Men's Shorts"],
   ['Button-Down', 'Button-Downs'],
   ['Blouse', 'Blouses'],
   ['Kimono', 'Kimonos'],
   ['Robe', 'Robes'],
   ['T-Shirt', 'T-Shirts'],
   ['Blazer', 'Blazers'],
   ['Raincoats', 'Raincoats'],
   ['Dress', 'Dresses'],
   ['Denim Jacket', 'Denim Jackets'],
   ['Peacoat', 'Peacoats'],
   ['Activewear T Shirt', 'Activewear T Shirts'],
   ['Hoodies', 'Hoodies'],
   ['Fleece Jacket', 'Fleece Jackets'],
   ['Sweater', 'Sweaters'],
   ['Cardigan', 'Cardigans'],
   ['Spring Jacket', 'Spring Jackets'],
   ['Sports Bra', 'Sports Bras'],
   ['Bomber Jacket', 'Bomber Jackets'],
   ['Tube Top', 'Tube Tops'],
   ['Tunic', 'Tunics'],
   ['Halter Top', 'Halter Tops'],
   ['Tank Top', 'Tank Tops'],
   ['Vest', 'Vests'],
   ['Leather Jacket', 'Leather Jackets'],
   ['Capris', 'Capris'],
   ['Wide Leg Pants', 'Wide Leg Pants'],
   ['Relaxed Pants', 'Relaxed Pants'],
   ['Boot Cut Pants', 'Boot Cut Pants'],
   ['Jeans','Jeans'],
   ['Leggings', 'Leggings'],
   ['Boyfriend Pants', 'Boyfriend Pants'],
   ["Women's Shorts", "Women's Shorts"],
   ['Tights', 'Tights'],
   ['Skinny Pants', 'Skinny Pants'],
   ["Women's Board Shorts", "Women's Board Shorts"],
   ['Cargo Shorts', 'Cargo Shorts'],
   ["Men's Underwear", "Men's Underwears"],
   ['Burmuda Shorts', 'Burmuda Shorts'],
   ["Women's Short Shorts", "Women's Short Shorts"],
   ["Women's Jean Shorts", "Women's Jean Shorts"],
   ['Panties', 'Panties'],
   ['Skirt', 'Skirts'],
   ['Jean Skirt', 'Jean Skirts'],
   ['Maxi Skirt', 'Maxi Skirts'],
   ['Midi Skirt', 'Midi Skirts'],
   ['Sweatshirt', 'Sweatshirts'],
   ['Wallet', 'Wallets'],
   ['Ring', 'Rings'],
   ['Mini Skirt', 'Mini Skirts',],
   ['Umbrella', 'Umbrellas'],
   ["Men's Watch", "Men's Watches"],
   ["Men's Hat", "Men's Hats"],


   //Colors
   ['Black', 'Blacks'],
   ['Dark Blue', 'Dark Blues'],
   ['Green','Greens'],
   ['Teal','Teal'],
   ['Azure','Azure'],
   ['Chartreuse','Chartreuse'],
   ['Aquamarine','Aquamarine'],
   ['Cyan','Cyan'],
   ['Maroon','Maroon'],
   ['Plum','Plum'],
   ['Indigo','Indigo'],
   ['Olive','Olive'],
   ['Gray','Grays'],
   ['Pale Blue','Pale Blues'],
   ['Lime','Lime'],
   ['Light Green','Light Greens'],
   ['Light Blue','Light Blues'],
   ['Red','Reds'],
   ['Deep Pink','Deep Pink'],
   ['Magenta','Magenta'],
   ['Orange','Oranges'],
   ['Salmon','Salmon'],
   ['Pink','Pinks'],
   ['Yellow','Yellows'],
   ['Tan','Tans'],
   ['White','White'],
]

/*
     _______   ______  _____ 
    |_   _\ \ / /  _ \| ____|
      | |  \ V /| |_) |  _|  
      | |   | | |  __/| |___ 
      |_|   |_| |_|   |_____|
              
      Pick one
*/

let tops = [
   'Polos',
   "Men's Shorts",
   'Button-Down',
   'Blouse',
   'Kimono',
   'Robe',
   'T-Shirt',
   'Blazer',
   'Raincoats',
   'Dress',
   'Denim Jacket',
   'Peacoat',
   'Activewear T Shirt',
   'Hoodies',
   'Fleece Jacket',
   'Turtleneck',
   'Sweatshirt',
   'Sweater',
   'Cardigan',
   'Spring Jacket',
   'Sports Bra',
   'Bomber Jacket',
   'Tube Top',
   'Tunic',
   'Halter Top',
   'Tank Top',
   'Vest',
   'Leather Jacket',
]

let bottoms = [
   'Capris',
   'Wide Leg Pants',
   'Relaxed Pants',
   'Boot Cut Pants',
   'Jeans',
   'Leggings',
   'Boyfriend Pants',
   "Women's Shorts",
   'Tights',
   'Skinny Pants',
   "Women's Board Shorts",
   'Cargo Shorts',
   "Men's Underwear",
   'Burmuda Shorts',
   "Women's Short Shorts",
   "Women's Jean Shorts",
   'Panties',
   'Skirt',
   'Jean Skirt',
   'Maxi Skirt',
   'Midi Skirt',
   'Mini Skirt',

]

let neither = [
   'Pant Suit',
   'Overalls',
   'Tie',
   'Bodysuit',
   'Romper',
   'Skirt Suit',
   'Boat Shoes',
   'Tracksuit',
   'Swimwear',
   'Belt',
   "Men's Sandals",
   'Gloves',
   'Earring',
   'Sarong',
   'Sleepwear',
   'Bracelet',
   'Necklace',
   'Kimonos',
   "Women's Scarf",   
   'Cocktail Dress',
   'Little Black Dress',
   'Formal Dress',
   'Maxi Dress',
   'Casual Dress',
   'Tankini',
   'Jumpsuit',
   'Wallet',
   'Ring',
   'Umbrella',
   "Men's Watch",
   "Men's Hat",
]

/*
    __        _______    _  _____ _   _ _____ ____  
    \ \      / / ____|  / \|_   _| | | | ____|  _ \ 
     \ \ /\ / /|  _|   / _ \ | | | |_| |  _| | |_) |
      \ V  V / | |___ / ___ \| | |  _  | |___|  _ < 
       \_/\_/  |_____/_/   \_\_| |_| |_|_____|_| \_\

   A type can be in as many of the 3                                        
*/

let cold = [
   'Pant Suit',
   'Overalls',
   'Tie',
   'Bodysuit',
   'Tracksuit',
   'Belt',
   'Gloves',
   'Earring',
   'Sleepwear',
   'Bracelet',
   'Necklace',
   "Women's Scarf",
   'Jumpsuit',
   'Polos',
   'Button-Down',
   'Robe',
   'Blazer', 
   'Raincoats',
   'Denim Jacket',
   'Peacoat',
   'Activewear T Shirt',
   'Hoodies',
   'Fleece Jacket',
   'Sweater',
   'Cardigan',
   'Spring Jacket',
   'Bomber Jacket',
   'Tunic',
   'Vest',
   'Leather Jacket',
   'Wide Leg Pants',
   'Relaxed Pants',
   'Boot Cut Pants',
   'Jeans',
   'Leggings',
   'Boyfriend Pants',
   'Tights',
   'Skinny Pants',
   'Wallet',
   'Ring',
   'Umbrella',
   "Men's Watch",
   "Men's Hat",
]

let moderate = [
   'Pant Suit',
   'Overalls',
   'Tie',
   'Bodysuit',
   'Romper',
   'Skirt Suit',
   'Boat Shoes',
   'Tracksuit',
   'Swimwear',
   'Belt',
   "Men's Sandals",
   'Gloves',
   'Earring',
   'Sarong',
   'Sleepwear',
   'Bracelet',
   'Necklace',
   'Kimonos',
   'Cocktail Dress',
   'Little Black Dress',
   'Formal Dress',
   'Maxi Dress',
   'Casual Dress',
   'Jumpsuit',
   'Polos',
   "Men's Shorts",
   'Button-Down',
   'Blouse',
   'Kimono',
   'Robe',
   'T-Shirt',
   'Blazer',
   'Raincoats',
   'Dress',
   'Denim Jacket',
   'Peacoat',
   'Activewear T Shirt',
   'Hoodies',
   'Sweater',
   'Cardigan',
   'Spring Jacket',
   'Sports Bra',
   'Bomber Jacket',
   'Tube Top',
   'Tunic',
   'Halter Top',
   'Tank Top',
   'Vest',
   'Leather Jacket',
   'Capris',
   'Wide Leg Pants',
   'Relaxed Pants',
   'Boot Cut Pants',
   'Jeans',
   'Leggings',
   'Boyfriend Pants',
   "Women's Shorts",
   'Tights',
   'Skinny Pants',
   "Women's Board Shorts",
   'Cargo Shorts',
   "Men's Underwear",
   'Burmuda Shorts',
   "Women's Short Shorts",
   "Women's Jean Shorts",
   'Skirt',
   'Jean Skirt',
   'Maxi Skirt',
   'Midi Skirt',
   'Wallet',
   'Ring',
   'Mini Skirt',
   'Umbrella',
   "Men's Watch",
   "Men's Hat",
]

let hot = [
   'Bodysuit',
   'Romper',
   'Skirt Suit',
   'Boat Shoes',
   'Tracksuit',
   'Swimwear',
   'Belt',
   "Men's Sandals",
   'Earring',
   'Sarong',
   'Bracelet',
   'Necklace',
   'Kimonos',
   'Cocktail Dress',
   'Little Black Dress',
   'Formal Dress',
   'Maxi Dress',
   'Casual Dress',
   'Tankini',
   'Polos',
   "Men's Shorts",
   'Kimono',
   'T-Shirt',
   'Dress',
   'Activewear T Shirt',
   'Spring Jacket',
   'Sports Bra',
   'Tube Top',
   'Halter Top',
   'Tank Top',
   'Capris',
   "Women's Shorts",
   "Women's Board Shorts",
   'Cargo Shorts',
   "Men's Underwear",
   'Burmuda Shorts',
   "Women's Short Shorts",
   "Women's Jean Shorts",
   'Panties',
   'Skirt',
   'Jean Skirt',
   'Maxi Skirt',
   'Midi Skirt',
   'Wallet',
   'Ring',
   'Mini Skirt',
   "Men's Watch",
   "Men's Hat",
]

//Returns the plural of a concept
export function pluralize (concept) {
   // Parse through the list of plurals
   for(let i = 0; i < plurals.length; i++) {
      //Find the concept that matches
      if(plurals[i][0] == concept) {
         return plurals[i][1]
      }
   }
   return 'Clothing'
}

//Returns whether a concept is a top or bottom
export function topOrBottonm(concept) {
   if(tops.includes(concept))
      return 'top'
   if(bottoms.includes(concept))
      return 'bottom'
}

//Returns if a concept is for cold weather
export function isForCold(concept) {
   return cold.includes(concept)
}

//Returns if a concept is for moderate weather
export function isForModerate(concept) {
   return moderate.includes(concept)
}

//Return if a concept is for hot weather
export function isForHot(concept) {
   return hot.includes(concept)
}

//Returns the boolean value of if a concept label is present in the collection of know labels
export function isThere (concept) {
   if(neither.includes(concept))
      return -1
   return (tops.includes(concept) || bottoms.includes(concept))
}


//Returns the name of the common color that corresponds to the given hex values of r, g, and b
export function getColorName(r, g, b) {
   r_approx = (Math.round(r/0x80)) 
   g_approx = (Math.round(g/0x80))
   b_approx = (Math.round(b/0x80))
   console.log(r_approx, g_approx, b_approx)
   return colorNames[r_approx][g_approx][b_approx]
}

//Returns an array of length n of the most popular type of clothing worn
export const trendingAmongUsers = async (n) => {
   let popularity = new Map ([])

   //Getting all of the clothing in the database
   let allClothing = await API.graphql(graphqlOperation(queries.listClothings, {input: {}}))
   let clothing = allClothing.data.listClothings.items
   //Randomizing the order of the clothing
   clothing = randomizeList(clothing)

   for(let i = 0; i < clothing.length; i++) {
      // Set a higher value for the amount of times a type is in the list or create a new set of key and value and set the popularity to 1
      popularity.set(clothing[i].type, (popularity.has(clothing[i].type) ? (popularity.get(clothing[i].type)+1) : (1)))
   }
   
   let popularityEntries = popularity.entries()
   let typesToFind = []
   let iterations = (popularity.size < n) ? (popularity.size) : (n)
   
   //find the most popular item, store it, and remove it, a max of n times (or less if there is not that many types)
   for(let i = 0; i < iterations; i++) {
      let maxKey = 'Not a valid key!'
      let max = 0
      
      for(var entry of popularityEntries) {
         if(entry[1] > max) {
            maxKey = entry[0]
            max = entry[1]
         }
      }
      
      typesToFind.push(maxKey)
      popularity.delete(maxKey)
      popularityEntries = popularity.entries()
   }

   recommendations = []

   //Searching through all clothing and picking those that are being searched for
   for(let i = 0, numAdded = 0; i < clothing.length && numAdded < n; i++) {
      if(typesToFind.includes(clothing[i].type)) {
         let newItem = {
            id: clothing[i].publicKey + '.png',
            uri:  await Storage.get(clothing[i].publicKey, {level: 'public', download: false}),
            type: clothing[i].type
         }
         recommendations.push(newItem)
         numAdded++
      }
   }

   return recommendations
}

//Returns an array of length n of the most popular color
export const trendingColorsAmongUsers = async (n) => {
   let popularity = new Map ([])

   //Getting all of the clothing in the database
   let allClothing = await API.graphql(graphqlOperation(queries.listClothings, {input: {}}))
   let clothing = allClothing.data.listClothings.items
   //Randomizing the order of the clothing
   clothing = randomizeList(clothing)

   for(let i = 0; i < clothing.length; i++) {
      // Set a higher value for the amount of times a color is in the list or create a new set of key and value and set the popularity to 1
      popularity.set(clothing[i].colorName, (popularity.has(clothing[i].colorName) ? (popularity.get(clothing[i].colorName)+1) : (1)))
   }
   
   let popularityEntries = popularity.entries()
   let typesToFind = []
   let iterations = (popularity.size < n) ? (popularity.size) : (n)
   
   //find the most popular item, store it, and remove it, a max of n times (or less if there is not that many colors)
   for(let i = 0; i < iterations; i++) {
      let maxKey = 'Not a valid key!'
      let max = 0
      
      for(var entry of popularityEntries) {
         if(entry[1] > max) {
            maxKey = entry[0]
            max = entry[1]
         }
      }
      
      typesToFind.push(maxKey)
      popularity.delete(maxKey)
      popularityEntries = popularity.entries()
   }

   recommendations = []

   //Searching through all clothing and picking those that are being searched for
   for(let i = 0, numAdded = 0; i < clothing.length && numAdded < n; i++) {
      if(typesToFind.includes(clothing[i].colorName)) {
         let newItem = {
            id: clothing[i].publicKey + '.png',
            uri:  await Storage.get(clothing[i].publicKey, {level: 'public', download: false}),
            type: clothing[i].type,
            color: clothing[i].colorName
         }
         recommendations.push(newItem)
         numAdded++
      }
   }

   return recommendations
}

//Returns an array of length n of the clothing that is meant for the current weather
export const weatherForUser = async (n, temp) => {

   //Getting all of the clothing in the database
   let allClothing = await API.graphql(graphqlOperation(queries.listClothings, {input: {}}))
   let clothing = allClothing.data.listClothings.items
   //Randomizing the order of the clothing
   clothing = randomizeList(clothing)
   
   let temperatureDesc = ''
   if(temp < 40) {
      temperatureDesc = 'cold'
   }
   else if (temp < 90) {
      temperatureDesc = 'moderate'
   }
   else {
      temperatureDesc = 'hot'
   }

   recommendations = []

   //Searching through all clothing and picking those that are being searched for
   for(let i = 0, numAdded = 0; i < clothing.length && numAdded < n; i++) {
      if((temperatureDesc == 'cold' && clothing[i].isForCold) || (temperatureDesc == 'moderate' && clothing[i].isForModerate) || (temperatureDesc == 'hot' && clothing[i].isForHot)) {
         let newItem = {
            id: clothing[i].publicKey + '.png',
            uri:  await Storage.get(clothing[i].publicKey, {level: 'public', download: false}),
            type: clothing[i].type,
            color: clothing[i].colorName
         }
         recommendations.push(newItem)
         numAdded++
      }
   }

   return recommendations
}

//Given an array, randomizes the order of the elements in the array
function randomizeList(list) {
   for(let i = 0; i < list.length; i++)
   {
      let temp = list[i]
      let randPos = Math.round(Math.random() * (list.length-1))
      list[i] = list[randPos]
      list[randPos] = temp
   }

   return list
}