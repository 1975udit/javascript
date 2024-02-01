// older way of concatination is 
let name  = "udit ";
let age = 21;
console.log(name + "is " + age + " year old");

// new way of conacatination 
console.log(`I am ${name} and my age is ${age}`);

// how the string initlize at the back
let name2 = new String("Khushi");
 
// In built functions in string 
console.log(name2.length);
console.log(name2.toUpperCase()); //original string not change bcz premitive provides copy 
console.log(name2.charAt(3));
console.log(name2.indexOf('h')); // if char is not present it return -1

let newString = name2.substring(0,4);
console.log(newString);

let new2 = name2.slice(-5,5);
console.log(new2);

// to remove unwanted whitespaces 
let str1 = "  udit   ";
console.log(str1.trim());

let url = "http://www.udit20%Tyagi.com";
console.log(url.replace('20%',' '));

// to check 
console.log(url.includes("20%"));

// to concet a string into a array 
console.log(url.split("."));

// here [Homework] try to explore all th string function here 


