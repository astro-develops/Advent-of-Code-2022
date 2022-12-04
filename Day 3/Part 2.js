const fs = require('fs');
const sacks = fs.readFileSync('./Day 3/input.txt', 'utf8').split('\n')
let total = 0;

function triples(a, b, c) {
    return b.filter(x => new Set(a).has(x) && new Set(c).has(x));
}

for (let i = 0; i < sacks.length; i += 3) {

    let letter = triples(sacks[i].split(''), sacks[i + 1].split(''), sacks[i + 2].split(''));
    let letters = [...Array(26).keys()].map(sacks => String.fromCharCode(sacks + 97));
    let Letters = letters.concat(letters.map(sacks => sacks.toUpperCase()));

    total += (letter.map(sacks => Letters.indexOf(sacks) + 1)[0]);
}

console.log(total);