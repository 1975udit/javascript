console.log("Udit Tyagi")

// PART - 1

// data types or containers
const accId = 12345
let accEmail = 'Udit@google.com'
var accPassword = '54321'
accCity = 'Ghaziabad'

// accId = 14 (It is not allowed to change a const value)
console.log(accId)

accEmail = 'example@gmail.com'
accPassword = '345'
accCity = 'jaipur'
let accState;
// To display multiple things in a form of table 
console.table([accId , accEmail , accPassword , accCity, accState])

// never use var bcz it has a major scope problem


