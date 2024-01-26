let score = "33";
console.log(typeof(score));
// how to type cast in js
let score2 = Number(score);  // here we change the type of score and store it in a new variable
// if the typeof function return number but it hold Nan it mean it cant be converted into a number "Not A Number"
console.log(typeof score2);

// "33" -> 33
// "33abs" -> Nan
// null -> 0 , true -> 1, false -> 0;

let str = String(score);
let bo = Boolean(score);

// "" -> false;
// "xyz" -> true;