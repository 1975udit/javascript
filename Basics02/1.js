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

// Slice and Splice
const na1 = arr.slice(2,5);
// console.log(na1);
// it make no changes in the original array
 
// const na2 = arr.splice(2,5);
// console.log(na2);
// It make changes in original val it del them from original
// it also includes the outer range index mean it also includes the element at index 5.

const marval = ["thor", "Ironman", "Loki"]
const dc = ["batman", "superman", "flash"]
// marval.push(dc);
console.log(marval) // whole dc array becomes the 4th memeber of the marval array

// for adding elements of one array to other 
const all = marval.concat(dc)
console.log(all);
// this concat function do not modify the existing arrays it return new array as a result

// SPREAD Function (Example of glass)
const all_new = [...marval, ...dc];
// console.log(all_new);
// Advantage of spread over concat os that it can take as many arrays as you went to join

// Now we come to case where we went to siplify the array
const d = [1,2,3,[3,4,[5,6]],9 ,8]; // array like this
const simple = d.flat(Infinity)
// console.log(simple)

// to check coming data is an array or not
console.log(Array.isArray("udit"));

// to convert any coming data into an array
console.log(Array.from("udit"));
// console.log(Array.from({name : "udit"}))   IMP     "this will return empty array"

// to make an array from variables
let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1,s2,s3));

