'use strict';

//References for week 2 lab pod
//https://glitch.com/edit/#!/roomy-sheet?path=101-exercises.js:719:2



// Exercise 94
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

