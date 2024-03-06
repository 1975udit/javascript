// some of important points 

if(2 == "2"){
    console.log("Executed");
}
// this checking only the values

if(2 === "2"){
    console.log("case 2nd"); // it wil not be executed bcz different datatypes
}

// syntex 
if(  false /*condition*/ ){
    // processing
} else {
    // processing if condition in not true
}

// switch 
// switch (key){
//     case val1 :
//         // Processing
//         break;
//     case val2 :
//         .
//         .
//     default :
//     // if no value matched .
// }

// note : if we not use break then whole code will be executed from where condition match EXCEPT "DEFAULT"

// truthy and falsy values (if cond)
// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN 
// truthy values : "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??) -> for(Null and undefined) 
let val1,val2;
val1 = 5 ?? 10
// console.log(val1)
val2 = null ?? 10; // it is like a check operator for values 
console.log(val2);


