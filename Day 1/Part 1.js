const fs = require('fs');
const input = fs.readFileSync('./Day 1/input.txt', 'utf8').split('\n\n').map(i => i.split('\n'));
let main = 0;

input.forEach(i => {
  let elf = eval(i.join('+'));
  if (elf > main) main = elf;
});


console.log(main);
