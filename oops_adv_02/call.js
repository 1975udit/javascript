function setUsername(username){
    // complex calls
    this.username = username
    console.log("i am called")
}

function createUser(username,email,password){
    // setUsername(username)  // here the function is not technicly called it is juct referencing
    // for technical calling in which properties can't be accessed after its complition
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("udit" , "abc@gmail.com" , "abc123")
console.log(chai)