#!/usr/bin/node
/* Script that writes a string to a file */

const fs = require('fs');
const firstArg = process.argv[2];
const content = process.argv[3];

fs.writeFile(firstArg, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
