#!/usr/bin/node
/* Script that prints the title */

const request = require('request');

const getURL = process.argv[2];

request(getURL, (error, response) => { // configure the request
  if (error) {
    console.error('Error');
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
