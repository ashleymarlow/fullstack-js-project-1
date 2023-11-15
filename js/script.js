/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'A day without sunshine is like, you know, night.',
    source: 'Steve Martin',
    year: '2013'
  },
  {
    quote: 'I am not superstitious, but I am a little stitious.',
    source: 'Michael Scott (Steve Carrell)',
    citation: 'The Office'
  },
  {
    quote: 'My Mama says that alligators are ornery because they got all them teeth and no toothbrush.',
    source: 'Bobby Boucher (Adam Sandler)',
    citation: 'The Waterboy',
  },
  {
    quote: 'I walk around like everything is fine, but deep down, inside my shoe, my sock is sliding off',
    source: 'Anonymous',
  },
  {
    quote: 'Common sense is like deodorant. The people who need it most never use it.',
    source: 'Anonymous',
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = 
  '<p class="quote"> ' +  randomQuote.quote  + ' </p><p class="source"> ' +  randomQuote.source;

  if (randomQuote.hasOwnProperty('citation')) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  
  if (randomQuote.hasOwnProperty('year')) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  + ' </p>';

  document.getElementById('quote-box').innerHTML = htmlString; 
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);