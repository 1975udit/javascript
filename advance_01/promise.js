//  Promise has three states :
// 1 -> pending
// 2 -> fulfilled
// 3 -> rejected  

const promiseOne = new Promise(function(resolve,reject){
    // do async tasks
    setTimeout(function(){
        console.log("task is completed")
        // resolve()
    },1000)
    resolve()
})

// now we have to consume this promise
promiseOne.then(function(){
    console.log("I am inside then")
})  // then is directly connected to the resolve of the promise defination
// when we call resolve then only then()  function ivokes 

// other way 
new Promise(function (resolve,reject){
    setTimeout(function(){
     console.log("second task is completed")
     resolve()
    },1000)
}).then(function(){
    console.log("I am in then again")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"udit" , branch:"CSE(DS)"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user.username)
}) // this is how we can access the data passed to then through resolve callback

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(error === false){
            resolve({user: "xyz", id : 24})
        }else{
            reject('ERROR : Somthing went wrong')
        }
    },1000)
})

// chaining to get the data from data we went
promiseFour.then(function(user){
    console.log("I am in then of fourth promise")
       return user.user
}).then(function(user_name){
    console.log(user_name)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("This whole this is slightly similar to the try-catch bolck for exception handling")
})
// you have to create catch for reject it is similar connection like resolve-then


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error === false){
            resolve({user: "xyz", id : 24})
        }else{
            reject('ERROR : Somthing went wrong')
        }
    },1000)
})

// i went to consume this promise in a different way
async function consume(){
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log("We got some error in the execution")
    }
}
consume()  // let's assume we get error in that function piece of code so we use erroe handling 

// just for example 
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

