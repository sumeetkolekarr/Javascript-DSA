// for(let i=1;i<22;i++){
//     console.log(i);
// }

// Reverse Loop
// for(let i=1;i<22;i++){
//     console.log(22-i);
// }

// An Edge Case for JS // Can be Resolved by using let keyword instead of var keyword
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// Break and Continue
// for (let i = 0; i < 22; i++) {
//   if (i === 11) continue; // Skips the Iteration for specific Condition
//   console.log(i);
// }
// for (let i = 0; i < 22; i++) {
//   if (i === 11) continue; // Breaks the Loop for Specific Condition
//   console.log(i);
// }

// While Loop
// let i = 0;
// while (i < 22) {
//   console.log(i);
//   i++;
// }

// Q. Sum of n natural Number
// let num = 5
// sum = 0
// for (let i = 0; i <= num; i++) {
//     sum+=i
// }
// console.log(sum);

// Q. Factorial of n natural number
// let num = 5
// fact = 1
// for (let i = 1; i <= num; i++) {
//     fact*=i
// }
// console.log(fact);

// Q. Factors of a Number
// let num = 25;
// for (let i = 0; i <= Math.floor(num / 2); i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }
// console.log(num);

// Q. Prime Numbers
// let num = 25;
// let prime = true;
// for (let i = 2; i <= Math.floor(num / 2); i++) {
//   if (num % i === 0) {
//     prime = false;
//     break;
//   }
// }
// console.log(prime);
// Alternate Solution
// function isPrime(n) {
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i = 3; i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false
//     }
//     return true
// }
// console.log(isPrime(num));

// Printing sum of number with while loop:
// num = 124;
// let sum = 0
// while (num > 0) {
//   let rem = num % 10;
//   sum += rem;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// Reversing the number with while loop:
n = 124;
rev = 0;
while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}
console.log(rev);
