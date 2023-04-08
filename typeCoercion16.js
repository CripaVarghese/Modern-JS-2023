let x = 5;
x = 5 + "5";
console.log(x, typeof x);

x = 5 + Number("5");
console.log(x, typeof x);

let y = 5 * "5";
console.log(y, typeof y);

let z = 5 + null;
console.log(z, typeof z);
z = Number(null);
console.log(z, typeof z);

let a = 5 + true;
console.log(a, typeof a);
a = 5 + false;
