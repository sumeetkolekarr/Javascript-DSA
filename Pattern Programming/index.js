// Works in both console and Node.js
// console.log("Hello");
// console.log("World");

// Works in Node.js Environment
// process.stdout.write("Hello ");
// process.stdout.write("World");

// Taking Input from the user
let prompt = require("prompt-sync")();
// let a = prompt("Enter a Number: ");
// process.stdout.write(a);

// Printing Stars in equal rows and columns
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Printing Stars in a triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Printing Numbers in a triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// Printing Alphabets in a triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// Printing Stars in an inverted triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = n; i > 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Printing Stars in a mirror triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Printing Stars in a centered triangular shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Printing Stars in a X shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// Printing Stars in a V shape
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2*n-1; j++) {
//     if (i == j || i + j == 2*n) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }
