// this and arrow function 

//this keyword is used to refer current context in  objects
const user = {
    username : "udit",
    branch : "CSE",
    message : function(){
        console.log(`${this.username} , welcome to this website`);
    }
}

user.message();
