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
