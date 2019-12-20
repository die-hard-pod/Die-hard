'use strict';

//References for week 2 lab pod
//https://glitch.com/edit/#!/roomy-sheet?path=101-exercises.js:719:2
//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript


// Exercise 1
// Exercise 94 from 101 java exercises
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.

const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]

function highestPriceBook(books) {

    var highestBook = {
        "title": "",
        "price": 0,
        "author": "",

    }
    for (var i=0; i < books.length;  i++) {
        if (highestBook.price < books[i].price) {
            highestBook.title = books[i].title;
            highestBook.price = books[i].price;
            highestBook.author = books[i].author;
        }
    }
    /*Return highest price of books*/
    return highestBook;
}

console.log(highestPriceBook(books));


//Exercise 2, from codewars
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
//     If anything in the text isn't a letter, ignore it and don't return it.
//
//
// A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// 1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24	25	26

function alphabetPosition(text) {

    //Empty string to store the alphabet numerical values
    var result = "";
    //For loop that will change each alphabet character to its numerical value 1-26 of the alphabet.
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i);
        if (code > 64 && code < 91) {
            result += (code - 64) + " ";
        }
    }
    return result.slice(0, result.length - 1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//expected output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"



// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// ##Examples :


function iqTest(numbers){

    var numberArray = numbers.split(' ');
    var odds = [];
    var evens = [];

    for(var i = 0; i<numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            evens.push(numberArray[i])
        } else {
            odds.push(numberArray[i])
        }
    }

    if (odds.length === 1) {
        return numberArray.indexOf(odds[0]) + 1;
    }else if(evens.length === 1){
        return numberArray.indexOf(odds[0]) + 1;
    }
}

console.log(iqTest('2 4 7 8 10'));
console.log(iqTest("1 2 1 1"));

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
