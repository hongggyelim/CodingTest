const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let str = ''
    n % 2 === 0 ? str = `${n} is even` : str = `${n} is odd`
    console.log(str)
});