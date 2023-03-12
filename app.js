const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// console.log(input);

let a = +input[0];
let b = +input[1];

let min = b - 45;

if( min < 0 ) {
    min += 60;
    a -= 1;
};

if( a < 0 ) {
    a = 23;
}

console.log(a, min);
