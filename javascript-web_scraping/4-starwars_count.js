#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const wedgeAntillesId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;

    const wedgeAntillesFilms = films.filter((film) => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${wedgeAntillesId}/`));

    console.log(wedgeAntillesFilms.length);
  }
});
