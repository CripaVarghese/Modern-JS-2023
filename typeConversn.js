// convert to number
let a = "5";
let b = parseInt(a);
let c = Number(a);
a = +a;
console.log(b, c, a);

// convert to string
let d = 10;
let e = String(d);
let f = d.toString();
console.log(e, f);

// to boolean
let boolean = 1;
boolean = Boolean(boolean);
console.log(boolean);

// to float
let g = 40.5;
let h = parseFloat(g);
console.log(h);

// returns NAN
let car = "Honda";
car = parseInt(car);
console.log(car);
console.log(undefined + undefined);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log("hi" / 10);
