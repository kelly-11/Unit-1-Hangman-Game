//Variables for Categories, letters, guesses, screen

// let selections = ['Movies', 'Series', 'Actors']
// let letters = []
let guesses = []
let screen = []
let movies =['AVENGERS', 'TITANIC'] //['The Avengers', 'Titanic', 'Halloween']
let series = ['LOST', 'FRIENDS']//['Last of Us', 'Squid Games', 'Friends']
let actors = ['PEDRO', 'EVANS']//['Pedro Pascal', 'Chris Evans', 'Kate Winslet']
let word =""
const moviesBtn = document.getElementById("1").addEventListener("click", selection)
// console.log(moviesBtn)
const seriesBtn = document.getElementById("2").addEventListener("click", selection)
// console.log(seriesBtn)
const actorsBtn = document.getElementById("3").addEventListener("click", selection)
// console.log(actorsBtn)

const blankEl = document.querySelector(".blank")

const userInput = document.querySelector('.letters').addEventListener('click', letters)




// function init() {
//     screen = 
//     guesses = [null, null, null, null, null, null, null, null, null, null, null, null]
//     letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
//     //render()
// }
// // Once a category is selected, randomly select a word within that category.
// //Message will be update to 'Good luck!' once a category is selected
// // Message will be updated to 'Why so series?' when two wrong selections have been made.
// // Message will be updated to 'Wow! You're on a roll!' when two correct selections have been made in a row.
// //Every correct letter will make a pieces of an image appear on the screen.


// function render (){
//     selection()
//     updateDashes()
//     updateMessage()
//     updateScreen()
// }

function selection(opt, list){
//   selections.forEach()
let event = opt.target
if(event.id === "1") {
    event = movies[Math.floor(Math.random()*3)]
    word = event
   createDashes()
   document.getElementsByClassName("btn").disabled = true
}else if (event.id === "2") {
    event = series[Math.floor(Math.random()*3)]
    word = event
    createDashes()
    document.getElementsByClassName("btn").disabled = true
}else if (event.id === "3") {
    event = actors[Math.floor(Math.random()*3)]
    word = event
    createDashes()
    document.getElementsByClassName("btn").disabled = true
}

}

function createDashes(){
    let secretWord = word
    for(let i = 0; i < secretWord.length; i++){
        let newBlank =  document.createElement('div')
        newBlank.classList.add(`${secretWord[i]}`)
        newBlank.innerHTML = '_'
        newBlank.style.color = "white"
        blankEl.append(newBlank)
        // console.dir(newBlank)
      }
}

function letters (evt){
    let letter = evt.target.id
    let secretWord = word
    
        if(secretWord.includes(letter)) {
            let dash = document.querySelector(`.${letter}`)
            dash.innerText = letter
        }else {
            console.log('Pick another letter')
        }
    
}

//spaces, repeating letters, deactivating options button



























