//Variables for Categories, letters, guesses, screen

// let selections = ['Movies', 'Series', 'Actors']
let letters = []
let guesses = []
let screen = []
let movies = ['The Avengers', 'Titanic', 'Halloween']
let series = ['Last of Us', 'Squid Games', 'Friends']
let actors = ['Pedro Pascal', 'Chris Evans', 'Kate Winslet']

const selections = document.getElementsByClassName('categories').querySelectorAll
console.log(selections)
const btns = document.querySelectorAll('click', init)


function init() {
    screen = 
    guesses = [null, null, null, null, null, null, null, null, null, null, null, null]
    letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    //render()
}
// Once a category is selected, randomly select a word within that category.
//Message will be update to 'Good luck!' once a category is selected
// Message will be updated to 'Why so series?' when two wrong selections have been made.
// Message will be updated to 'Wow! You're on a roll!' when two correct selections have been made in a row.
//Every correct letter will make a pieces of an image appear on the screen.


function render (){
    selection()
    updateDashes()
    updateMessage()
    updateScreen()
}

function selection(opt, list){
  selections.forEach()
}



























