#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

if (x) {
  console.log('My number: ' + x);
} else {
  console.log('Not a number');
}
