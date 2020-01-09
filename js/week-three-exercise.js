'use strict';


// Resources
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// https://glitch.com/edit/#!/roomy-sheet?path=101-exercises.js:1594:0





// Exercise 1
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
//
//     Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
//
//     For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
//
//     Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
//
//     Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
//
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
//
//     Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
    var noDubstep = song.split("WUB").filter(function(e)
    {
        return e;
    });
    return noDubstep.join(' ');
};


console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));



//Exercise 2
// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"

const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
};

function mostSpentOnItem(input){

    var highestCostItem = input.items[0];
    var highestCostQuantity = highestCostItem.quantity;

    for (var item of input.items){
        var total = item.price * item.quantity;
        if(total > (highestCostItem.price * highestCostQuantity)){
            highestCostItem = item;
        }
    }
    return highestCostItem;
}

console.log(mostSpentOnItem(shoppingCart));



//Exercise 3
// Description:
//     Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//     Rules for a smiling face:
//     -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     -Every smiling face must have a smiling mouth that should be marked with either ) or D.
//     No additional characters are allowed except for those mentioned.
//     Valid smiley face examples:
//     :) :D ;-D :~)
// Invalid smiley faces:
//     ;( :> :} :]
//
// Example cases:
//
//     countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<smileys.length; j++){
            if (arr[i]===smileys[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
