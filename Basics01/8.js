// Dates  -- OBJECT
let myDate = new Date();
// console.log(myDate);

// functions
console.log(myDate.toString());
console.log(myDate.toDateString()); // just for date (type 1)
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());  // (type 2)
console.log(myDate.toJSON()); // same as toIOSString()
console.log(myDate.getDay());   // for monday = 1, tuesday = 2 , etc means day no. in a week
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());

// How to declare a date from your side
let created = new Date(2024,1,2);
console.log(created.toDateString()); // In js month starts from zero
let other = new Date("2024-01-02");  // here moth start from 1 bcz it ia a string not a array
console.log(other.toDateString());

// TIMESTAMPS
let time = Date.now();
console.log(time);

// To get time stamp of any variable 
console.log(other.getTime());

// To convert mill into second
console.log(Math.round(other.getTime()/1000));

// Important Function 
other.toLocaleString('default',{
    weekday :'long'
    // you can read this date object from mdn
})