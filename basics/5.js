// DATA TYPES -> 2 types

// Premitive (7 types) -> String , Number, Boolean, Null, Undefined, Symbol, BigInt.

const id1 = Symbol("123");
const id2 = Symbol("123");
// here both id has same value but bcz it is a Symbol it is always unique 
console.log(id1 == id2); // it return False

// Referenced (Non-Primitive) -> Array, Object, Function.
//  const Heros = [Shaktimaan, Krish, Naagraj];                     //ARRAY

 let obj = { name:"Udit", age:21}                                //OBJECT

 const fun =  function() {                                                    //FUNCTION
    console.log("Hello");
 }


//  Types of memory in js 
// 1 -> heap (non-premitive data types uses it) --                       copy is provided
// 2 -> stack (premitive data type uses it) --                        reference is provided (address)
let a =12;
let b =a;
a =15;
console.table([a,b]);
// no change in value of a bcz copy is provided to b

let user1 ={
   name : "xyz",
   age : 24
}

let user2 = user1;
user2.age = 50;
console.log(user1.age);
console.log(user2.age);
// both values will be changed bcz addres is pronided to user2 