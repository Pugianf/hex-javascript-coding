#!/usr/bin/node

const args = process.argv.slice(2);

let argsInt = [];

function sortNum (a, b) {
  return a - b;
}

if (args.length <= 1) {
  console.log(0);
} else {
  argsInt = args.sort(sortNum);
  console.log(argsInt[1]);
}
