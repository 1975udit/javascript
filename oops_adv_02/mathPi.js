// console.log(Math.PI)
Math.PI = 5;  //  we can't overwrite like this 
// console.log(Math.PI)

const discripter = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(discripter)
// this function of object is used to get info about any property or variable present in the object 

const chai = {
    name : "abc",
    price : 250,
    isAvailable : true
}
// console.log(Object.getOwnPropertyDescriptor(chai , "price"))
// chai.price = 300;
// console.log(chai.price)

// we can change the properties of property
Object.defineProperty(chai , "price", {
    writable : false, 
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai , "price"))
chai.price = 300; // we false the writable hence we cant make permanent change in the value
// console.log(chai.price)



