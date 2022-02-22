#!/usr/bin/node

const process = require('process');

const args = process.argv;

function add (a, b) {
  return (a + b);
}

console.log(add(ParseInt(args[2]), ParseInt(args[3])));
