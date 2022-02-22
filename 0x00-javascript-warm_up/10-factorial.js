#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

let y = 1;

function factorial (z) {
  for (let p = 0; p < x; p++) {
    y = z * (z - 1);
    x = z - 1;
  }
  return y;
}

if (x) {
  console.log(factorial(x));
} else {
  console.log(y);
}
