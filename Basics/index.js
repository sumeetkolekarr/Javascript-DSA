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

// let b = true // true is rendered as 1
// console.log(++b);

// let a = 10++ // An error as unary can not be applied to any value and also ++(--a) is also an error
// console.log(a);

// Math Functions
// let fl = 85.15154

// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.9));
// console.log(Math.trunc(18.98));
// console.log(Math.pow(2,5)); // 2^5
// console.log(Math.sqrt(4)); // Root over 4
// console.log(Math.cbrt(8)); // Cube Root over 8
// console.log(Math.abs(-8));
// console.log(Math.abs(8));
// console.log(Math.max(78,65,26));
// console.log(Math.min(78,65,26));
// console.log(Math.random());
// console.log(Math.toFixed(fl)); // Converts to String

// Q1 Calculate Area and Perimeter of Rectangle
// let a = 5
// let b = 7
// console.log(5*7);
// console.log(2*(5+7));

// Q2 Generate OTP
// console.log(Math.floor(Math.random()*9000) + 1000);

// Q3 Calculate Area of Triangle by Herons Formulae
// let a = 5;
// let b = 3;
// let c = 4;
// let s = (a + b + c) / 2;

// console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));

// Q4 Circumference of a Circle
// let r = 12
// console.log(Number((2*Math.PI*r).toFixed(2)));