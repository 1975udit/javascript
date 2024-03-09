const obj = {
    js : "Javascript",
    cn : "Computer Network",
    py : "Python",
    rb : "Ruby"
}

// for in loop
for (const key in obj) {
    console.log(key, obj[key]);
}

// in case of arrays 
const arr = ['u', 'd', 'i', 't']
for(const i in arr){
    console.log(i);
} // this prints the indexing not the values like for of loop

// note : we can't iterate map using this for in loop bcz map is initerable 

// FOR EACH LOOP
// for each is a parameter of loops only which is by default enjected in the arrays

const arr2 = ["ruby", "c++", "c", "python", "java"]
arr2.forEach( function (item){
    // console.log(item);
})

// arrow function syntex
arr2.forEach( (item) => {
    // console.log(item);
})

// we can also pass function
function printme(key){
     console.log(key)
}
// arr2.forEach(printme);