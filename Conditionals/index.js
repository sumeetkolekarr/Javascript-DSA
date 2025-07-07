// Q1 Find if user can vote or not
// NaN === NaN is false
// let age = 22;
// if (isNaN(age)) {
//   console.log("Wrong Input");
// } else if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("You can not Vote");
// }

// Q2 Discount Calculator
// let amt = 12100;
// let dis = 0
// if (amt > 0 && amt <= 5000) {
//   dis = 0
// } else if (amt > 5000 && amt <= 7000) {
//     dis = 5
// } else if (amt > 7000 && amt <= 9000) {
//     dis = 10
// } else if (amt > 9000) {
//     dis = 20
// } else {
//     console.log('Wrong Input');
// }
// console.log(amt - Math.floor((dis * amt) / 100));

// Electricity Bill Generator
// My Solution
let unit = 123;
// if (unit > 400) {
//   console.log((unit - 400) * 13 + 100 * 4.2 + 100 * 6 + 200 * 8);
// } else if (unit > 200 && unit <= 400) {
//   console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
// } else if (unit > 100 && unit <= 200) {
//   console.log(100 * 4.2 + (unit - 100) * 6);
// } else {
//   console.log(unit * 4.2);
// }
// Alternate Solution
// let amt = 0;
// if (unit > 400) {
//   amt = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amt += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amt += (unit - 100) * 6;
//   unit = 100;
// }
// amt += unit * 4.2;
// console.log(amt);

//INR Denomination
// let inr = 4888
// if (inr>=500){
//     console.log('500 Notes: ', Math.floor(inr/500));
//     inr = inr%500
// }
// if (inr>=200){
//     console.log('200 Notes: ', Math.floor(inr/200));
//     inr = inr%200
// }
// if (inr>=100){
//     console.log('100 Notes: ', Math.floor(inr/100));
//     inr = inr%100
// }
// if (inr>=50){
//     console.log('50 Notes: ', Math.floor(inr/50));
//     inr = inr%50
// }
// if (inr>=20){
//     console.log('20 Notes: ', Math.floor(inr/20));
//     inr = inr%20
// }
// if (inr>=10){
//     console.log('10 Notes: ', Math.floor(inr/10));
//     inr = inr%10
// }
// if (inr>=5){
//     console.log('5 Notes: ', Math.floor(inr/5));
//     inr = inr%5
// }
// if (inr>=2){
//     console.log('2 Notes: ', Math.floor(inr/2));
//     inr = inr%2
// }
// if (inr>=1){
//     console.log('1 Notes: ', inr);
// }

// Ternary Operator
// let num = 0
// console.log(num>0?'Positive':num<0?'Negative':'Zero');

// Switch Case
// If break is not used, then Fall Through Condition Occurs
// let day = 5;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// }

// switch (true) {
//   case 19 > 5:
//     console.log("Hello");
//     break;

//   case 19 > 5:
//     console.log("Hey");
//     break;

//   case 19 < 5:
//     console.log("Yo");
//     break;

//   default:
//     break;
// }

// Precision Error
let num = +(0.1 + 0.2).toFixed(1); // Added + to tell its a number
console.log(num);
switch (num) {
  case 0.3:
    console.log("Hello");
    break;
  case 0.5:
    console.log("Hey");
    break;

  default:
    console.log("Namaste");
    break;
}
