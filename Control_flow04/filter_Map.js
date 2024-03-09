// In the case of for each loop there is a problem that it not return anything means we cant store any result
// now the concept of filter comes into the picture [this will return values]

const num = [1,2,3,4,5,6,7,8,9,10]

// filter is same as for each in terms of decleration
const newNum =num.filter( (n) => n>4 )
console.log(newNum);

// MAP
// it return automatically same as filters
// const num2 =  num.map((n1) => n1 + 10);
// console.log(num2);

// chaining (it can be of any function(ex - map,filter,foreach) upto any level)

const num2  = num.map( (item) => item * 10).map( (i) => i+5 ).filter( (j) => j > 50);
console.log(num2);

// second map function take the processed values from the first map function 

// R E D U C E

const initial = 0;
const sum  = num.reduce( function (acc , curr) {
   return acc + curr
},initial);
console.log(sum);

const sum2 = num.reduce ( (acc, curr) => (acc + curr),initial);
console.log(sum2);