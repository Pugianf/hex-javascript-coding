#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

function factorial (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

if (x) {
  console.log(factorial(x));
} else {
  console.log(y);
}
