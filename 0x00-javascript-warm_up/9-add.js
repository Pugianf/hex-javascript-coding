#!/usr/bin/node

const process = require('process');

const args = process.argv;

const x = parseInt(args[2]);

const y = parseInt(args[3]);

function add (a, b) {
  return (a + b);
}

console.log(add(x, y));

