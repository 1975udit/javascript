const buttons = document.querySelectorAll(".button")
const body =  document.querySelector("body")

buttons.forEach( function (button) {
    button.addEventListener("click" , function (e){
    //    console.log(e)           to see the event(e)
    //    console.log(e.target)     to get the element on which the event is taking place
    const key = e.target.id
    switch (key) {
        case 'cyan':
            body.style.backgroundColor = "cyan"
            break;
        case 'yellow':
            body.style.backgroundColor = "yellow"
            break;
        case 'blue':
            body.style.backgroundColor = "blue"
            break; 
        case 'white':
            body.style.backgroundColor = "white"
            break; 
        default:
            break;
    }
    })
})