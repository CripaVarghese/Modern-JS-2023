//make d in capital

const a = "developer";

let x;

// returns Developer
x = a.substring(0, 1).toUpperCase() + a.substring(1, 9);
x = a.substring(0, 1).toUpperCase() + a.substring(1);
x = a.slice(0, 1).toUpperCase() + a.slice(1);
x = a.charAt(0).toUpperCase() + a.slice(1, 9);
x = `${a[0].toUpperCase()}${a.slice(1)}`;
