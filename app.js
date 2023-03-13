const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// console.log(input);

let count  = Number(input[0]);
let arr = input[1].split(' ').map( a => parseInt(a));

// 큰 배열에 대해서, Math.min Math.max를 호출하면 메모리가 초과될 수 있음
// console.log(Math.min(...arr) + ' ' + Math.max(...arr));

let min = arr[0];
let max = arr[0];

for(let i=1 ; i< count ; i++) {
    if(min > arr [i]) {
        min = arr[i];
    }

    if(max < arr [i]) {
        max = arr[i];
    }
}

console.log(min + ' ' + max);

