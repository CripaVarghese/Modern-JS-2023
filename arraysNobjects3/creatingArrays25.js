// Array literals
const array = [0, 1, 2, 3, 4]; // (5) [0, 1, 2, 3, 4]

// Array constructor
const fruits = new Array("Apple", "Mango", "Banana"); // (3) ['Apple', 'Mango', 'Banana']

let x;
x = `I like ${fruits[0]}`;
console.log(x);

fruits[2] = "Orange"; // (3) ['Apple', 'Mango', 'Orange']

fruits[fruits.length] = "Grapes"; // (4) ['Apple', 'Mango', 'Orange', 'Grapes']

fruits.length = 2; // (2) ['Apple', 'Mango']

console.log(fruits);
