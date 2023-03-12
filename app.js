// 시간초과가 뜨지 않으려면 하나씩 결과값을 도출해주기 보다는 한번에 모아놨다가 주는 편이 훨씬 빠름

let input = require('fs').readFileSync('input.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = +input[0];
let answer = '';

for (let i = 1; i <= max; i++) {
    let num = input[i].split(' ');
    answer += +num[0] + +num[1] + "\n";
}

console.log(answer);
