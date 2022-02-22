#!/usr/bin/node

const args = process.argv.slice(2);

let argsInt = [];

function sortN (a, b) {
  return a - b;
}

if (args.length <= 1) {
  console.log(0);
} else {
  argsInt = args.sort(sortN);
  argsInt.pop();
  console.log(parseInt(argsInt[argsInt.length - 1]));
}
