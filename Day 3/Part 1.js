const fs = require('fs');
const sacks = fs.readFileSync('./Day 3/input.txt', 'utf8').split('\n')
let total = 0;

function doubles(a, b) {
    return b.filter(i => new Set(a).has(i));
}

sacks.forEach(i => {

    const conA = i.slice(0, i.length / 2);
    const conB = i.slice(i.length / 2);

    let letter = doubles(conA.split(''), conB.split(''));
    let letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
    let Letters = letters.concat(letters.map(i => i.toUpperCase()));

    total += (letter.map(sacks => Letters.indexOf(sacks) + 1)[0])
});


console.log(total);