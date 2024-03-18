const randomNo = parseInt(Math.random() * 100 + 1)
const submit  = document.querySelector("#subt")
const userInput  = document.querySelector("#guessField")
const guessSlots = document.querySelector(".guesses")
const remining = document.querySelector(".lastResult")
const deviation = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const para = document.createElement("p")

let prev_Guess = []
let num_guess = 1;
let play_game = true;

if(play_game){
    submit.addEventListener("click",function(e){
        e.defaultPrevented()
        const guess = parseInt(userInput.value)
        validGuess(guess);
    })
}

// validation of the imput by the user
function validGuess(guess){
        if(isNaN(guess)){
            alert("Please enter a valid Number")
        }else if(guess < 1 && guess > 100){
            alert("Please enter Number in the given range")
        }else{
            prev_Guess.push(guess);
            if(num_guess === 11){
                displayGuess(guess);
                display(`Game Over , Random Number was ${randomNo}`)
                endGame()
            }else{
                cleanUp(guess);
                checkGuess(guess);
            }
        }
}

// about the user input low or high things 
function checkGuess(guess){
        if(guess === randomNo){
            display("You get this right")
            endGame()
        }else if(guess < randomNo){
            display("Number is tooo low")
        }else if(guess > randomNo){
            display("Number is tooo high")
        }
}

// function to interect with the DOM 
function display(message){
    deviation.innerHTML = `<h2>${message}</h2>`
}

function cleanUp(guess){
      userInput.value = ""
      guessSlots.innerHTML += `${guess }`
      num_guess++;
      remining.innerHTML =`${11 - num_guess}`
}

function newGame(){

}

function endGame(){

}