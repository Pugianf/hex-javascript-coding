#!/usr/bin/node

const process = require('process');

const args = process.argv;

let i = 2;

if (args === 2) {
  console.log('No argument');
} else {
  do {
    console.log(args[i]);
    i = i + 1;
  }
  while (args[i]);
}
