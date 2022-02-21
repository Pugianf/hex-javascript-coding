#!/usr/bin/node

const process = require('process');

const args = process.argv;

if (args[2] === true) {
  console.log(args[2]);
} else {
  console.log('No argument');
}
