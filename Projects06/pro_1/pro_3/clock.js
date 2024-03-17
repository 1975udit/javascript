const clock = document.querySelector("#clock")
const date = new Date()
clock.innerHTML = date.toLocaleTimeString();

// To update the clock on runtime we have a function 
// setInterval( function(){} , time(in miliseconds)) 

setInterval(function() {
    const date2  = new Date();
    clock.innerHTML = date2.toLocaleTimeString();
} , 1000)