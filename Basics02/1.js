// ARRAY
const arr = [1,2,3,4,5,6];
const arr2 = new Array(4,5,6,7,8);
console.log(arr2);

// In JS Array can be : 
// 1 -> resizable
// 2 -> mixvalued
// 3 -> creates Shallow copy (in copy operation) -- share reference

// Methods

arr.push(9);
// console.log(arr);
arr.pop();
// console.log(arr);
arr.unshift(10); // to store value at first index and shiftion all values
// console.log(arr);
// to remove first element 
arr.shift();
// console.log(arr);

console.log(arr.includes(6)) // to check availability
console.log(arr.indexOf(6))  // to check the index

// to bind and convert an array into string 
let newArr  = arr.join();
console.log(newArr);

