// Operations 
let str1 = "Udit"
let str2 = " Tyagi"
// console.log(str1+str2);
console.log(1 + "2"); // conersion into string

// So here we have two different cases 
console.log("1" + 2 + 2);
// output -> 122
console.log(1 + 2 + "2" );
// output -> 32

// tricky conversion
console.log("Tricky Conversion"); 
console.log(+true); // it is valid and output -> 1
console.log(+""); // output -> 0 but in both cases (true+) or (""+) in invalid

// Comparisons
console.log("2" > 1); // it return true bcz js automatically conver the string into the number
console.log("2" == 1); 

// but there is some special working of comparison operators in the cass of null 
console.log("Special case of Null");
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
// in this case == can't convert the null into 0 
// in case of "undefined" all cases will return false 

// difference b/w  ==  and ===(strict check)
console.log("2" == 2); //return true bcz it only check values
console.log("2" === 2); // return false bcz it chack both values ans datatype of both the values

