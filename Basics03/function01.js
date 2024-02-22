// F U N C T I O N S 

function greet(){
    console.log("Hello to all");
}
// greet();

function add(num1 , num2){
  // console.log(num1 + num2); 
  return num1 + num2;
}

const result = add(2,3);                 // hence result not contain anything
// add(2,"3");                           consider both as string
// add(2,null);

// console.log(result); 

function loggedIn( username ){
  if(username === undefined){
    console.log("Please enter a username");
    return "repeat"
  }
  return `${username} just logged in`
}
const a = loggedIn("udit");
console.log(a);
// console.log(loggedIn());                   here undefined is passed

// Default value of parameters 
function f1(name = "udit"){
  console.log(`hey ${name}`);
}
// f1("Khushi");
// f1();

function cart(...num1){
  return num1                 // return an array of passed values
}
console.log(cart(200,300,400))                // here we use rest operator opposit of spread operator (...)

// but if its is given like that (val1 , val2 , ...num1)
// first two passed arguments are stored in val1 and val2 and all rest in num1 as array

// how to pass objects 
const user = {
  name : "udit",
  age : 21
}
function app1(Object){
   console.log(`I am ${Object.name} and i am ${Object.age} year old`);
}
app1(user);

// how to pass an array
const arr = [100,200,300,400]
function secondVal(array){
     console.log(`Second Value of this array is ${array[1]}`)
}
secondVal(arr);