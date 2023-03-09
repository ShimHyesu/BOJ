const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n');
// console.log(input);

var a = +input[0];
var b = input[1].split('');
// console.log(b);

var a1 = a * +b[2];
var a2 = a * +b[1];
var a3 = a * +b[0];

var sum = a1 + a2*10 + a3*100;

console.log( a1 );
console.log( a2 );
console.log( a3 );
console.log( sum );


