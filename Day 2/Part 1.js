const fs = require('fs');
const rounds = fs.readFileSync('./Day 2/input.txt', 'utf8').split('\n')
let total = 0;

rounds.forEach(i => {
  if (i.includes("X")) total += 1;
  if (i.includes("Y")) total += 2;
  if (i.includes("Z")) total += 3;

  if (i === "A Y" || i === "B Z" || i === "C X") total += 6;
  else if (i === "A X" || i === "B Y" || i === "C Z") total += 3;
});


console.log(total);