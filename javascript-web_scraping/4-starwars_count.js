#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make an HTTP request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode === 200) {
    const data = JSON.parse(body);
    const moviesWithWedgeAntilles = data.results.filter((movie) => {
      return movie.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`);
    });
    console.log(moviesWithWedgeAntilles.length);
  } else {
    console.error('Request failed with status code:', response.statusCode);
  }
});
