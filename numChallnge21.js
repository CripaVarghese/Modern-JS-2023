// Number challenge
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

let sumOutput = `${x} + ${y} = ${x + y}`;
let diffOutput = `${x} - ${y} = ${x - y}`;
let productOutput = `${x} * ${y} = ${x * y}`;
let quotOutput = `${x} / ${y} = ${x / y}`;
let remOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput, diffOutput, productOutput, quotOutput, remOutput);
