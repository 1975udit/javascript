 // O B J E C T  -> 1

//  Two types of objects

// 1 -> singleton (created through constructer)
// Object.create() method 

// 2 -> Object literals
const user = { 
     name : "udit",
     "Full Name" : "Udit Tyagi",
     age : 21,
     isLoggedIn : false,
     lastLoggedIn : ["mon","wed"]
} 
// It has key value pairs 

// there are two ways to access 
// first 
console.log(user.age);

// Second
// console.log(user[age]); "this will give error bcz in object all the content inside is a string"
console.log(user["age"])

// NOTE : We required this paranthesis method bcz if we declare any string var in obj sapretly we cant access it from dot method

console.log(user["Full Name"]);
// console.log(user."Full Name") this will give error .


// How to add an symbol to the object 
const mySym1 = Symbol("key1");
const mySym2 = Symbol("key2");
const user2 = {
    name : "udit",
    age : 21,
    mySym1 : "key2", // this is not the correct way to add symbol bcz this just adding like a string or new var
    [mySym2] : "key3" // proper syntex
}
console.log(typeof user2.mySym1);  // this return string
console.log(typeof user2[mySym2]); // value will overwrite in object
// You can't access throught the dot operator

user2.age = 25;
console.log(user2);
// if you dont went any change in the data of the object 
// Object.freeze(user2);

// user2.name = "Khushi"
// console.log(user2);  no chnage occure

// how to add functions to the Objecs
user2.greet = function(){
    console.log("Hello user");
}
console.log(user2.greet());

user2.greet2 = function(){
    console.log(`Hello dear ${this.name}`); // string interpolation
}
console.log(user2.greet2());
// in output you get and undefind it can be bcz of double console or referencing {not clear}
