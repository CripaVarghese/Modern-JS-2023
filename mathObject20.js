let x;

x = Math.sqrt(49); // 7
x = Math.abs(-10); // 10

x = Math.round(5.4); // 5
x = Math.round(5.5); // 6

x = Math.ceil(4.3); // 5
x = Math.floor(4.6); // 4
x = Math.pow(2, 3); // 8

x = Math.max(3, 4, 5, 6);
x = Math.min(3, 4, 5, 6);

// (0,1) ie 0 to 1 as decimal
x = Math.random();

// 0 to 9 as decimal
x = Math.random() * 10;

// between 1 and 10 as decimal
x = Math.random() * 10 + 1;

// [1,10]
x = Math.floor(Math.random() * 10 + 1);

console.log(x);
