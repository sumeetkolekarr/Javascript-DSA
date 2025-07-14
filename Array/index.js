// Array is a linear data structure which stores multiple value in a continuous manner
let prompt = require("prompt-sync")();
// let arr = [];
// arr.push(100);
// arr.push("sk");
// arr.push(100);
// arr.push(false);

// console.log(arr[0]); // prints 100
// console.log(arr[1]); // prints sk
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr[6] = 20
// console.log(arr);

// let arr = new Array(3); // Is not a fixed array
// arr[0] = 12
// arr[1] = 13
// arr[2] = 14
// arr[3] = 15
// arr[8] = 18

// arr.push(12);
// console.log(arr);

// Entering an element in array with prompt
// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter a number to add: "));
// }
// console.log(arr);

// Traversing
let arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Printing largest max number
// let max =arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max);

// Printing shortest min number
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max > arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// Printing shortest Second max number
// let max = Math.max(arr[0], arr[1])
// let sMax = Math.min(arr[0], arr[1])
// for (let i = 2; i < arr.length; i++) {
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i]
//     } else if (arr[i]>sMax && max != arr[i]){
//         sMax = arr[i]
//     }
// }
// console.log(sMax);

// Printing shortest Second min number
// let min = Math.min(arr[0], arr[1])
// let sMin = Math.max(arr[0], arr[1])
// for (let i = 2; i < arr.length; i++) {
//     if(arr[i]<min){
//         sMin = min;
//         min = arr[i]
//     } else if (arr[i]<sMin && min != arr[i]){
//         sMin = arr[i]
//     }
// }
// console.log(sMin);

// Reversing an Array
// let temp = new Array(arr.length)
// let j = 0
// for (let i = arr.length-1; i >=0; i--) {
//     temp[j] = arr[i]
//     j++
// }
// console.log(temp);

// Alternate Way to reverse an array
// let a = 0;
// let b = arr.length - 1;
// for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
//   a++;
//   b--;
// }
// console.log(arr);

// Moving the 0s to the left and 1s to the right
// let numArr = [0, 1, 0, 0, 1, 0];
// let c = 0;
// for (let i = 0; i < numArr.length; i++) {
//     if(numArr[i] == 0){
//         let temp = numArr[i]
//         numArr[i] = numArr[c]
//         numArr[c] = temp
//         c++
//     }
// }
// console.log(numArr);

// Moving the negatives to the left and positives to the right
// let intArr = [-2, 3, 5, -10, 7, -9];
// let c = 0;
// for (let i = 0; i < intArr.length; i++) {
//   if (intArr[i] < 0) {
//     temp = intArr[i];
//     intArr[i] = intArr[c];
//     intArr[c] = temp;
//     c++;
//   }
// }
// console.log(intArr);
