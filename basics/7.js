// Numbers 
let a = 400;
let b = new Number(700);
// console.log(a);
// console.log(b);

// to convet Node. into a string 
console.log(a.toString().length);
// In above Statment first we convert the N0. into a string and then find its length

console.log(a.toFixed(2));  // this function is used to increase level of precision

// now function for precision or round off 
let num = 23.789;
// console.log(num.toPrecision(2));

// to improve the representations of numbers 
let c = 10000000;
// console.log(c.toLocaleString());

//--------------------Maths-----------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.67));

// but if you went to rounf off in a perticular direction 
console.log(Math.ceil(5.2));  
console.log(Math.floor(5.2));

console.log(Math.pow(5,2));
console.log(Math.sqrt(36));

// Mostly used method 
console.log(Math.random());

// generic formula for setting any range of random function 
let min =10;
let max =50;
console.log(Math.floor(Math.random() * (max-min+1)) + min);

