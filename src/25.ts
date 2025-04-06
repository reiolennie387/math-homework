const fs = require('fs');
const readline = require('readline');
let input;

input = readFileSync('/dev/stdin', 'utf8').toString().split('\n');

console.log(JSON.stringify(input));
