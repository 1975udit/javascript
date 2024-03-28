class user{
    constructor(email,password){
        this.email = email
        this.password = password   // here the values set in constructor are of no use 
    }
    // the values passed to the constructor are passed to getter nad setter

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
    // to get or set the variable same in constructor you have to make some changes
    // all properties in object has default getter and setter similar to the case of constructor

    get email(){
        return `${this._email}Encrypt`
    }
    set email(value){
        this._email = value;
        // console.log(this._email)    
        // so here in this case database store correct value and user ca access encrypted value
    }

}
const obj1 = new user("abc@gmail.com" , "123abc")
console.log(obj1.password)
console.log(obj1.email);


// ------------------ FUNCTION BASED SYNTEX ---------------------------------//

function user2(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this , "email", {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function (value) {
            this._email = value
        }
    })
}
const obj2 = new user2("xyz@gmail.com" , "xyz987")
console.log(obj2.email)

// -------------------------- OBJECT BASED SYNTEX -------------------------------//

const obj3 = {
    _email : "kbc@gmail.com",
    _password : "kbc123",

    get email(){
         return this._email.toUpperCase()
    },

    set email(value){
         this._email = value
    }
}
console.log(obj3.email)