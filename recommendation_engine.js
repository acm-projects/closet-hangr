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
                                                     
*/

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
   'Cardigan',
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
]

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



