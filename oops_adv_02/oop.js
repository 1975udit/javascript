// object Literal
const user = {
    username : "Udit",
    login_Count : 8,
    signed_In : true,
    // how to declare functions inside the object
    greet : function(){
          console.log(`Hello , ${this.username}`)
    }
}
// console.log(user.username)
user.greet();  // this is similar to .length() function in array they are inbuilt
// console.log(this)

// construntor function

function details(name,id,address){
    this.name = name
    this.id = id
    this.address = address
    return this
}
const userOne = new details("udit", 59,"abc");
// console.log(userOne)
const userTwo = new details("Khushi",21,"xyz")
console.log(userOne) // so here the values of userTwo will overWrite the values of userOne
// to solve this overwrite problem use "new keyword"
console.log(userTwo );
