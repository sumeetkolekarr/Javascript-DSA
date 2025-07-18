let prompt = require("prompt-sync")();
// Left Rotation by 1 Element
// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i+1]
// }
// arr[arr.length - 1] = copy
// console.log(arr);

// Right Rotation by 1 Element
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);

// Left Rotation by k Element
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);

// Alternate Solution
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// Alternate solution which is the most efficient way 
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// reverse(0, k-1)
// reverse(k, arr.length-1)
// reverse(0, arr.length-1)
// console.log(arr);
// function reverse(i,j){
//   while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
//   }
// }

// Right Rotation by k Element
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let copy = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i-1];
//   }
//   arr[0] = copy;
// }
// console.log(arr);

// Alternate Solution
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// for (let i = arr.length-1; i >= 0; i--) {
//   temp[(i + k) % arr.length] = arr[i];
// }
// console.log(temp);

// Alternate solution which is the most efficient way 
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k Value: "));
// k = k % arr.length;
// reverse(0, arr.length-1)
// reverse(k, arr.length-1)
// reverse(0, k-1)
// console.log(arr);
// function reverse(i,j){
//   while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
//   }
// }
