#!/usr/bin/node

const filePath = require('fs');
const url = process.arg[2];
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
