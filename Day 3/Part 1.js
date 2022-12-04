const fs = require('fs');
const sacks = fs.readFileSync('./Day 3/input.txt', 'utf8').split('\n')
let total = 0;

function doubles(a, b) {
    return b.filter(i => new Set(a).has(i));
}

for (let i in sacks) {
    const conA = sacks[i].slice(0, sacks[i].length / 2);
    const conB = sacks[i].slice(sacks[i].length / 2);

    let letter = doubles(conA.split(''), conB.split(''));
    let letters = [...Array(26).keys()].map(sacks => String.fromCharCode(sacks + 97));
    let Letters = letters.concat(letters.map(sacks => sacks.toUpperCase()));

    total += (letter.map(sacks => Letters.indexOf(sacks) + 1)[0])
}

console.log(total);