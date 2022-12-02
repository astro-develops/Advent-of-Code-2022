const fs = require('fs');
let arr = [];

const input = fs.readFileSync('./input.txt', 'utf8').split('\n\n').map(i => i.split('\n'));

for (let i in input) {
  let elf = eval(input[i].join('+'));

  arr.push(elf);
}

arr.sort((a, b) => a - b);
arr = arr.slice(arr.length - 3, arr.length);

console.log(eval(arr.join('+')));
