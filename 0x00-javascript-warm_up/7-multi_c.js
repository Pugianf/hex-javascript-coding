#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

if (x) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
