#!/usr/bin/node
/* script that print the number of movies */

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => { // configure the request
  if (!error && response.statusCode === 200) { // check status code
    const data = JSON.parse(body); // parse the response body as JSON
    const movieName = data.results.filter((film) => // filter the movie
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)
    );

    console.log(movieName.length);
  } else {
    console.error('Error:', error);
  }
});
