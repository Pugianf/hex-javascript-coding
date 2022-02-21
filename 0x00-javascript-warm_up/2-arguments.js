#!/usr/bin/node

const process = require('process');

const args = process.argv;

const len = args.length;

if (len > 1) {
  console.log('Arguments found');
} else if (len === 1) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
