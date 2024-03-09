// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while Loop

// while (condition) {
    // processing
// }

// Do While Loop

// do {
//     processing
// } while (condition);

// -------------------------- High Order Array Loops ----------------------------//

// for of

const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

// map
const mp = new Map();
mp.set(1,"u");
mp.set(2,'d');
mp.set(3,"i");
// console.log(mp);
// it only stores unique values 

for (const key of mp) {
    // console.log(key);
} // this return whole map
// for destructuring it has special syntex

for (const [key , value] of mp) {
    console.log(key , value); 
}
// for of loop is not used to destructure objects

// const obj = {
//     "name" : "udit",
//     "class" : "CSE"
// }
// for (const j of obj) {
//     console.log(j);
// }                              this will give error [objects is not iterable]

