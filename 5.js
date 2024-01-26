// DATA TYPES -> 2 types

// Premitive (7 types) -> String , Number, Boolean, Null, Undefined, Symbol, BigInt.

const id1 = Symbol("123");
const id2 = Symbol("123");
// here both id has same value but bcz it is a Symbol it is always unique 
console.log(id1 == id2); // it return False

// Referenced (Non-Primitive) -> Array, Object, Function.
 const Heros = [Shaktimaan, Krish, Naagraj];                     //ARRAY

 let obj = { name:"Udit", age:21}                                //OBJECT

 function(){                                                    //FUNCTION
    console.log("Hello");
 }