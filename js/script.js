/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// ------------------------------------------------------------

// Create an Array of objects to store the data for your quotes

// A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.
  
// In your js/script.js file:
  
  // - Create a variable named quotes and set it equal to an empty array.
  
  // - Add a minimum of five empty objects to your quotes array.

// ------------------------------------------------------------

// Add data to your quote objects

// The objects in the quotes array store the individual properties of the quotes.

// Add the following properties to each quote object:
  // quote - string - the actual quote
  // source - string - the person or character who said it
  // Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.
  // Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.
  
// -------------------------------------------------------------

/*** 
 * `quotes` array 
***/

const quotes = [
  {},
  {},
  {},
  {},
  {}
];



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);