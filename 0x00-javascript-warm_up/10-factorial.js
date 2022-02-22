#!/usr/bin/node

const process = require('process');

const args = process.argv;

let x = parseInt(args[2]);

let y = 1;

const k = x;

function factorial (z) {
  for (let p = 0; p < (k - 1); p++) {
    y = y * z;
    z = z - 1;
  }
  return y;
}

if (x) {
  console.log(factorial(x));
} else {
  console.log(y);
}
