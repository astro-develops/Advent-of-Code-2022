const fs = require('fs');
const input = fs.readFileSync('./Day 1/input.txt', 'utf8').split('\n\n').map(i => i.split('\n'));
let arr = [];

input.forEach(i => {
  let elf = eval(i.join('+'));
  arr.push(elf);
});


arr.sort((a, b) => a - b);
arr = arr.slice(arr.length - 3, arr.length);
console.log(eval(arr.join('+')));