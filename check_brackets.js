
const fs = require('fs');
const content = fs.readFileSync('src/components/sections/header.tsx', 'utf8');

let curly = 0;
let square = 0;
let paren = 0;

for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '{') curly++;
    if (char === '}') curly--;
    if (char === '[') square++;
    if (char === ']') square--;
    if (char === '(') paren++;
    if (char === ')') paren--;
}

console.log('Curly:', curly);
console.log('Square:', square);
console.log('Paren:', paren);
