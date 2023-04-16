const fruits = ["Apple", "Mango", "Orange"];

const flowers = ["Rose", "Sunflower", "Lotus"];

// fruits.push(flowers);
// console.log(fruits); // ["Apple", "Mango", "Orange", Array(3)];

let allItems = fruits.concat(flowers);
// console.log(allItems); // ['Apple', 'Mango', 'Orange', 'Rose', 'Sunflower', 'Lotus']

allItems = [fruits, flowers];
console.log(allItems); // [Array(3), Array(3)]

let x;
x = [...fruits, flowers];
console.log(x); // ['Apple', 'Mango', 'Orange', Array(3)]

x = [...fruits, ...flowers];
console.log(x); // ['Apple', 'Mango', 'Orange', 'Rose', 'Sunflower', 'Lotus']

const arr = [1, 2, [3, 4], 5, 6, [7, 8]];
console.log(arr); // [1, 2, Array(2), 5, 6, Array(2)]

x = Array.isArray(fruits);
console.log(x); // true

x = arr.flat();
console.log(x); // [1, 2, 3, 4, 5, 6, 7, 8]

x = Array.from("123456");
console.log(x);

const a = 1;
const b = 3;
const c = 5;

x = Array.of(a, b, c);
console.log(x);
