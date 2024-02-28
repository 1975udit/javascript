// this and arrow function 

//this keyword is used to refer current context in  objects
const user = {
    username : "udit",
    branch : "CSE",
    message : function(){
        console.log(`${this.username} , welcome to this website`);
        // console.log(this);
    }
}

user.message();
user.username = "Sam";
user.message();
// console.log(this);
// this return empty bcz there is no global object of this node engine
// [imp] but if you do this in browser it has a global object "window"

// But if you do this inside a function 

function chai(){
    const username = "udit";
    console.log(this.username); //this not works same in function and objects
    // console.log(this);  you get many values
}
chai();

// A R R O W  Function
const coffie = () => {
    console.log("This is a decleration of a arrow function");
     console.log(this)   //this also return empty
}
coffie();

const addNo = (a,b) => {
    return a+b;
}
console.log(addNo(3,4));

// implicit arrow function (mostly used in react)
const sub = (a,b) => (a-b);
console.log(sub(10,3));

// to return an object from implicit arrow function 
const obj = () => ({username : "udit"});
console.log(obj());

// Immediately Invoked Function Expression (IIFE)
// syntex -> ()(); first for defination second for return 
// and ";" is important to tell the machine where to stop

(function one(){
    console.log("I am a IIFE decleration");
})();

// if you use this no reguirement of calling that function
// this is used to remove the global decleration pollution

// similarly for arrow function 
( () =>  (console.log("I am a arrow IIFE"))
 ) ();

( (name) => (console.log(`I am ${name}`))
) ("Udit");
