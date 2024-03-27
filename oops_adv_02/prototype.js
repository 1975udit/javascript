let name = "udit     "
// console.log(name.length)
// Let say we went a inbuilt function to ger the true length of the name which is 4 of above example
// we have to add this method to the prototype

const heros = ["Thor" , "Spiderman"]
const heroPowers = {
    Thor : "hammer",
    Spiderman : "Spikes",
    getSpiderPower : function () {
        console.log(`The power of Spiderman is ${this.Spiderman}`)
    }
}
Object.prototype.udit = function(){
    console.log("Udit is present here")
}
heroPowers.udit();
// heros.udit();
// name.udit();  object is the parent of every entity in javaScript

// Inheritance in JS

const user = {
    name  : "Udit",
    email : "abc@gmail.com"
}

const teacher = {
    makeVideos : true
}

const teachingSupport = {
    isAvailable  : true , 
    __proto__ : teacher // inheritence
}
// console.log(teachingSupport.makeVideos)
teacher.__proto__ = user  // inheritance
// console.log(teacher.name)
// console.log(teachingSupport.name)  multilevel inheritance 
 
// modern Syntex [I M P]
// Object.setPrototypeOf(teacher,user)  // first wala object second wale ki property access kar leta hai 

// PROBLEM
 
let anotherName = "Khushi    "
String.prototype.trueLength = function(){
    // console.log(this)
    console.log(`The true length of the String is ${this.trim().length}`)
}
anotherName.trueLength()



