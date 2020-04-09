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
  {
    quote: `The most regretful people on earth are those who felt the call to creative work, who felt their own creative power restive and uprising, and gave to it neither power nor time.`,
    source: `Mary Oliver`,
    citation: `Oliver, Mary. Upstream: Select Essays. , 2016. Print.`,
    year: `2016`
  },
  {
    quote: `Humor, more than anything else in the human make-up, can afford an aloofness and an ability to rise above any situation, even if only for a few seconds.`,
    source: `Viktor Frankl`,
    citation: `Frankl, Viktor E. Man's Search for Meaning: An Introduction to Logotherapy. , 1992. Print.`,
    year: `1992`
  },
  {
    quote: `That which one has set oneself to do, one should not relinquish on the grounds of absence of mind or distraction.`,
    source: `Leo Tolstoy`,
    citation: `Tolstoy, Leo, V G. Chertkov, C J. Hogarth, and Alexander Sirnis. The Diaries of Leo Tolstoy. New York: Dutton, 1917. Print.`,
    year: `1917`
  },
  {
    quote: `“Life’s essence should always be clearly noticeable behind the love, or the music, or the work.”`,
    source: `Werner Heisenberg`,
    citation: `Heisenberg, Werner, Anna M. Hirsch-Heisenberg, Irene Heisenberg, Werner Heisenberg, and Elisabeth Heisenberg. My Dear Li: Correspondence 1937-1946. , 2016. Print.`,
    year: `2016`
  },
  {
    quote: `One of the functions of art is to give people the words to know their own experience. There are always areas of vast silence in any culture, and part of an artist’s job is to go into those areas and come back from the silence with something to say.`,
    source: `Ursula K. Le Guin `,
    citation: `White, Jonathan. Talking on the Water: Conversations About Nature and Creativity. , 2016. Print.`,
    year: `2016`
  }
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