#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

let array;

if (x) {
  for (let a = 0; a < x; a++) {
    array = [];
    for (let i = 0; i < x; i++) {
      array.push('X');
    }
    console.log(array.join(''));
  }
} else {
  console.log('Missing size');
}
