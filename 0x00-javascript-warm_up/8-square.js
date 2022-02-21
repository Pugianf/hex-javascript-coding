#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

if (x) {
  for (let a = 0; a < x; a++) {
    for (let i = 0; i < x; i++) {
      console.log(X);
    }
  }
} else {
  console.log('Missing size');
}
