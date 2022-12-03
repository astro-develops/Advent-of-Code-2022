const fs = require('fs');
const rounds = fs.readFileSync('./Day 2/input2.txt', 'utf8').split('\n')
let total = 0;

for (let i in rounds) {
  if ( rounds[i].includes("X")) total += 1;
  if ( rounds[i].includes("Y")) total += 2;
  if ( rounds[i].includes("Z")) total += 3;
  
  if (rounds[i] === "A Y" || rounds[i] === "B Z" || rounds[i] === "C X") total += 6;
  else if (rounds[i] === "A X" || rounds[i] === "B Y" || rounds[i] === "C Z") total += 3;
}

console.log(total);