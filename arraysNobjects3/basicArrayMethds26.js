let array = [1, 2, 3, 4, 5];

let x;

array.push(10); // [1, 2, 3, 4, 5,10]
array.pop(); // [1, 2, 3, 4, 5]

array.unshift(20); // [20, 1, 2, 3, 4, 5]
array.shift(); // [1, 2, 3, 4, 5]
array.shift(); // [2, 3, 4, 5]

array.reverse(); // [5, 4, 3, 2]
array.reverse(); // [2, 3, 4, 5]
array.unshift(1); // [1, 2, 3, 4, 5]
console.log(array);

x = array.includes(50); // false

x = array.indexOf(50); // -1

x = array.slice(1); // [2, 3, 4, 5]

x = x = array.slice(1, 4);
// console.log(x, array);
// [2, 3, 4]
// [1, 2, 3, 4, 5]

// x = array.splice(1);
// console.log(x, array);
// [2, 3, 4, 5]
// [1]

// commenting the previous statements as splice method mutates the original array
// so from [1, 2, 3, 4, 5]
// x = array.splice(1, 4);
// console.log(x, array);
// [2,3,4,5]
// [1]

// commenting the previous statements as splice method mutates the original array
// so from [1, 2, 3, 4, 5]
// x = array.splice(2, 1);
// console.log(x, array);
// [3]
// [1,2,4,5]

// from [1, 2, 3, 4, 5]
x = array.splice(1, 2).reverse().toString();
console.log(x, array);
