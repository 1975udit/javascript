class user {
    constructor(username){
        this.username = username
    }

    logedIn(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return "123"
    }
}

// static keyword is used to prevent the access of that method to every instance or object

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const user1 = new user("udit")
user1.logedIn()
// console.log(user1.createId());

const user2 = new teacher("udit" , "ud@gmail.com")
user2.logedIn()
// console.log(user2.createId());
