// EOF(End Of File) : 데이터 소스로부터 더 이상 읽을 수 있는 데이터가 없음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputLine = [];

rl.on("line", (line)=>{
    /*입력 받는 값을 처리하는 코드*/

    inputLine.push(line)
    let input = line.split(' ').map(a => parseInt(a));
    
    if(line) {
        console.log(input[0] + input[1]);
    }else {
        rl.close();
    }
});

rl.on("close", ()=>{
	/*입력이 끝나고 실행할 코드*/
	process.exit();
});