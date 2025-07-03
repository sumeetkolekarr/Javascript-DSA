// console.log(a); // Throws an error as variable is called before initializing variable using 'let' keyword
// let a; // Using var can nullify the error by assigning undefined to the variable but for let and const, it will throw and error

let a = 10;
let b = 20;
let c;

// Type Coercion
// console.log('Sum of 10 and 20 is ' + a + b);
// console.log(a + b + ' is Sum of 10 and 20');
// console.log('Sum of 10 and 20 is ' + (a + b));

// console.log(1 - '1')
// console.log(1 + 1)
// console.log(1 + '1')

// Swapping

// Method 1
// c = a;
// a = b;
// b = c;

// Method 2
// a = a + b;
// b = a - b;
// a = a - b;

// Method 3
[a, b] = [b, a];

console.log(a, b);
