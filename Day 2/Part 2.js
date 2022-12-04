const fs = require('fs');
const rounds = fs.readFileSync('./Day 2/input.txt', 'utf8').split('\n')
let total = 0;

for (let i in rounds) {
  if (rounds[i].includes("X")) {
    if (rounds[i].includes("A")) total += 3;
    if (rounds[i].includes("B")) total += 1;
    if (rounds[i].includes("C")) total += 2;
  }
  if (rounds[i].includes("Y")) {
    if (rounds[i].includes("A")) total += 1;
    if (rounds[i].includes("B")) total += 2;
    if (rounds[i].includes("C")) total += 3;
    total += 3;
  }
  if (rounds[i].includes("Z")) {
    if (rounds[i].includes("A")) total += 2;
    if (rounds[i].includes("B")) total += 3;
    if (rounds[i].includes("C")) total += 1;
    total += 6;
  }
}

console.log(total);