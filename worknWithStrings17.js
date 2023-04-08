const s = new String("Hello World");

x = s.toUpperCase();
x = s.charAt(6);
x = s.indexOf("w"); //-1
x = s.indexOf("W"); //6
x = s.substring(0, 4); // Hell
x = s.substring(1, 5); // ello
x = s.substring(2, 5); // llo
x = s.substring(7); // orld
console.log(x);

y = s.substring(0, 5); // Hello
y = s.slice(0, 5); // Hello
y = s.slice(-11); // Hello World
y = s.slice(-11, -6); // Hello
console.log(y);

z = "     Hello World";
console.log(z);
z = z.trim();
console.log(z);
z = s.replace("Hello", "OH"); // OH World
z = s.includes("Hell"); // true
z = s.valueOf(); // Hello World
console.log(s); // String {'Hello World'}
console.log(z);

a = s.split(" "); // (2) ['Hello', 'World']
a = s.split(""); // (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(a);
