#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Define the Star Wars API endpoint
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

// Make an HTTP request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode === 200) {
    const movie = JSON.parse(body);
    console.log(movie.title);
  } else {
    console.error('Request failed with status code:', response.statusCode);
  }
});
