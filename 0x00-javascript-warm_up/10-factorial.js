#!/usr/bin/node

const process = require('process');

const args = process.argv;

let x = parseInt(args[2]);

let y = 1;

function factorial (x) {
  for (let p = 0; p < x; p++) {
    y = x * (x - 1);
    x = x - 1;
  }
  return y;
}

if (x) {
  console.log(factorial(x));
} else {
  console.log(y);
}
