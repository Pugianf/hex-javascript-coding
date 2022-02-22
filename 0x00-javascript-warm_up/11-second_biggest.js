#!/usr/bin/node

const args = process.argv.slice(2);

let argsInt = [];

if (args.length <= 1) {
  console.log(0);
} else {
  argsInt = args.sort(function(a, b){return b-a});
  console.log(argsInt[1]);
}
