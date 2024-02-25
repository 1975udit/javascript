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

console.log("hello")