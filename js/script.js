/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
// ------------------------------------------------------------

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `The most regretful people on earth are those who felt the call to creative work, who felt their own creative power restive and uprising, and gave to it neither power nor time.`,
    source: `Mary Oliver`,
    citation: `Oliver, Mary. Upstream: Select Essays`,
    year: `2016`
  },
  {
    quote: `Humor, more than anything else in the human make-up, can afford an aloofness and an ability to rise above any situation, even if only for a few seconds.`,
    source: `Viktor Frankl`,
    citation: `Frankl, Viktor E. Man's Search for Meaning: An Introduction to Logotherapy`,
    year: `1992`
  },
  {
    quote: `That which one has set oneself to do, one should not relinquish on the grounds of absence of mind or distraction.`,
    source: `Leo Tolstoy`,
    citation: `Tolstoy, Leo, V G. Chertkov, C J. Hogarth, and Alexander Sirnis. The Diaries of Leo Tolstoy. New York: Dutton`,
    year: `1917`,
    tag: `adhd`
  },
  {
    quote: `Life’s essence should always be clearly noticeable behind the love, or the music, or the work.`,
    source: `Werner Heisenberg`,
    citation: `Heisenberg, Werner, Anna M. Hirsch-Heisenberg, Irene Heisenberg, Werner Heisenberg, and Elisabeth Heisenberg. My Dear Li: Correspondence 1937-1946`,
    year: `2016`
  },
  {
    quote: `One of the functions of art is to give people the words to know their own experience. There are always areas of vast silence in any culture, and part of an artist’s job is to go into those areas and come back from the silence with something to say.`,
    source: `Ursula K. Le Guin`,
    citation: `White, Jonathan. Talking on the Water: Conversations About Nature and Creativity`,
    year: `2016`
  }
];



/***
 * `getRandomNumber` function
 * Generates a random number for selecting an array item
 * @param {array} quotesList - An array of quote objects
 * @return {number} - A random number
***/

const getRandomNumber = arr => {
  let num = Math.floor(Math.random() * Math.floor(arr.length));
  return num;
}

/***
 * `getRandomQuote` function
 * Gets a quote object from the quotes array
 * @param {array} quotesList - An array of quote objects
 * @return {object} - A quote object
***/

const getRandomQuoteObj = quotesList => {
  let quoteObject = quotesList[getRandomNumber(quotesList)];
  return quoteObject;
};

/***
 * `generateHtmlString` function
 * Generates a quote string
 * @param {object} quoteObject - A quote object
 * @return {string} - A quote string
***/

const generateHtmlString = quoteObject => {
  let htmlString = `<p class="quote">${quoteObject['quote']}</p>`;
  htmlString += `<p class="source">${quoteObject['source']}`;

  for (let prop in quoteObject) {
    if (prop === 'citation') {
      htmlString += `<span class="citation">${quoteObject["citation"]}</span>`;
    } 
    if (prop === 'year'){
      htmlString += `<span class="year">${quoteObject["year"]}</span>`;
    }
    if (prop === 'tag'){
      htmlString += `<div class="tag">${quoteObject["tag"]}</div>`;
    }

    
  }
  htmlString += `</p>`;
  return htmlString;
}

const changeBGColor = () => {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = `rgb(${red}, ${green}, ${blue}`;

  document.querySelector('body').style.backgroundColor = `${rgbColor}`;
}

/***
 * `printQuote` function
 * Selects a place in the DOM to render an html string
 * @param {string} quoteString - A quote string
 * @return {void} Nothing
***/




let stopInterval;

const printQuote = () => {
  stopInterval = false;
  let id = setInterval(function() {
    if (stopInterval) {
      clearInterval(id);
    } else {
      changeBGColor();
      document.querySelector(`#quote-box`).innerHTML = generateHtmlString(getRandomQuoteObj(quotes));
    }
  }, 10000);
}

const stopQuote = () => stopInterval = true;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// Selects the `Show another quote` button in the DOM that when clicked, invokes the printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Selects the `Stop slideshow` button in the DOM that when clicked, invokes the stopQuote function
document.getElementById('stop-quote').addEventListener("click", stopQuote, false);





