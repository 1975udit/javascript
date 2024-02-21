 // O B J E C T  -> 2
 // Singleton Objects
 const app1 = new Object();
 app1.id = "123abc"
 app1.name = "udit"
 app1.isLoggedIn = false
 console.log(app1); 

//  object inside object 

const app2 = {
    email : "udit@gmail.com",
    name : {
        firstName : "Udit",
        lastName : "Tyagi" // nesting
    },
    id : "234abd"
}
// console.log(app2.name.firstName);

// How to merg different objects
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

const obj3 = {obj1,obj2} // this will store these two objects in single object not merge
console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4)

// [BEST WAY] -> spread
const obj4 = {...obj1 , ...obj2};
console.log(obj4);

// How data comes from the database 
const users = [
    {
        id :1,
        name :"a"
    },
    {
        id :2,
        name :"b"
    },
    {
        id :3,
        name :"c"
    }
]
console.log(users[1].name);

// to get all the keys and values of an object in the form of of array we use 
console.log(Object.keys(app1));
console.log(Object.values(app1)); // this is vary useful

// To convert each key value pair into a seperate array 
console.log(Object.entries(app1)); // this will return array of arrays

// To ask from an obj for having that property or not 
console.log(Object.hasOwnProperty("name"))  // return bool 

// O B J E C T  -> 3 [J S O N]

// Destructuring
const course = {
    name : "js",
    price : 999,
    student : "udit"
}
// console.log(course.student); // first way

const {student : st} = course;
console.log(st); // second way this reduces the code length and increases readibility

// json -> javascript object Notation  
// {
//     "name" : "udit",
//     "id" : "23",
//     "age" : "21" 
// }  
// all keys and values are in the form of strings 

[
    {},
    {},
    {}
]
