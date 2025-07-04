// console.log(a); // Throws an error as variable is called before initializing variable using 'let' keyword
// let a; // Using var can nullify the error by assigning undefined to the variable but for let and const, it will throw and error

// let a = 10;
// let b = 20;
// let c;

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
// [a, b] = [b, a];
// console.log(a, b);

// Some Operation
// let d = 12;
// let e = 22
// console.log(d/e);
// console.log(d%e);

// To extract the last digit from variable f
// let f = 12454
// console.log(f%10);

// Conditionals
// console.log(10<0 && 15>9);
// console.log(10<0 || 15>9);

// Unary Operators
// let i = 11;
// i = i++ + ++i;
// console.log(i);

let b = true // true is rendered as 1
console.log(++b);

// let a = 10++ // An error as unary can not be applied to any value and also ++(--a) is also an error
// console.log(a);