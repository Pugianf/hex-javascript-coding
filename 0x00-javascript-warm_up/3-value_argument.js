#!/usr/bin/node

const process = require('process');

const args = process.argv;

if (args === 2) {
  console.log('No argument');
} else {
  do {
    let i = 0;
    console.log(args[i]);
    i++;
  }
  while (args[i]);
