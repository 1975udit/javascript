// S C O P E     with    F U N C T I O N S

function one(){
    const user = "udit";
    console.log(user);

    function two(){
        const web = "YT"
        console.log(user);
    }
    // console.log(web); This is out of scope 
    two();
}
one();
// same concept for the if else statement

console.log("hello")

// variable form of writing a function
const addOne = function(value){
    return value+1;
}
console.log(addOne(3));
// But in this form of function decleration we can't call the function before its defination but in other type we can do that the reason behind this is we are holding this function in a variable

