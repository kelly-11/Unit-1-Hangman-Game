let movies = ['The Avengers', 'Titanic', 'Halloween']
let series = ['Last of Us', 'Squid Games', 'Friends']
let actors = ['Pedro Pascal', 'Chris Evans', 'Kate Winslet']
let word = ""
let guess = 0
let opacityCount = 0
let incorrectGuesses = 4
let imgName = ""

const moviesBtn = document.getElementById("1").addEventListener("click", selection)

const seriesBtn = document.getElementById("2").addEventListener("click", selection)

const actorsBtn = document.getElementById("3").addEventListener("click", selection)

const blankEl = document.querySelector(".blank")

const keyboard = document.querySelector('.letters').addEventListener('click', letters)

const screenImg = document.querySelector('.middle')

const update = document.querySelector('.message')

function selection(opt){
let event = opt.target
if(event.id === "1") {
    update.innerHTML = ' '
    event = movies[Math.floor(Math.random()*3)]
    event = event.toUpperCase()
    word = event
   createDashes()
   document.getElementById("1").disabled = true
   document.getElementById("2").disabled = true
   document.getElementById("3").disabled = true
}else if (event.id === "2") {
    update.innerHTML = ' '
    event = series[Math.floor(Math.random()*3)]
    event = event.toUpperCase()
    word = event
    createDashes()
    document.getElementById("1").disabled = true
    document.getElementById("2").disabled = true
    document.getElementById("3").disabled = true
}else if (event.id === "3") {
    update.innerHTML = ' '
    event = actors[Math.floor(Math.random()*3)]
    event = event.toUpperCase()
    word = event
    createDashes()
    document.getElementById("1").disabled = true
    document.getElementById("2").disabled = true
    document.getElementById("3").disabled = true
}
}

function createDashes(){
    let secretWord = word
    for(let i = 0; i < secretWord.length; i++){
        let newBlank =  document.createElement('div')
        newBlank.innerHTML = '&nbsp;'
        if(secretWord[i] !== " "){
            newBlank.classList.add(`${secretWord[i]}`)
            newBlank.innerHTML = '_'
            newBlank.style.color = "white"
        }
        blankEl.append(newBlank)
      }
}

function getImg (){
   if(word === 'THE AVENGERS') {
    imgName = 'avengers.jpeg'
   }else if (word === 'TITANIC') {
    imgName = 'Titanic.png'
   }else if (word === 'HALLOWEEN') {
    imgName = 'Halloween.jpg'
   } else if (word === 'LAST OF US') {
    imgName = 'LastOfUs.jpg'
   } else if (word === 'SQUID GAMES') {
    imgName = 'SquidGames.png'
   } else if (word === 'FRIENDS') {
    imgName = 'Friends.jpg'
   } else if (word === 'PEDRO PASCAL') {
    imgName = 'PedroPascal.jpg'
   } else if (word === 'CHRIS EVANS') {
    imgName = 'ChrisEvans.jpeg'
   } else if (word === 'KATE WINSLET') {
    imgName = 'kateWinslet.jpeg'
   }  
}

function letters (evt){
    let letter = evt.target.id
    let secretWord = word
    getImg()
        if(secretWord.includes(letter)) {
            guess++
            if(guess === 1){
                let dash = document.querySelectorAll(`.${letter}`)
                dash.forEach((dash)=> {
                    dash.innerText = letter
                })
                let img = document.createElement('img')
                img.setAttribute('src', `${imgName}`)
                screenImg.append(img)
            }else if(guess > 1 && guess <= (secretWord.length + 3)){
                let dash = document.querySelectorAll(`.${letter}`)
                dash.forEach((dash)=> {
                    dash.innerText = letter
                })
                let img = document.querySelector('img')
                opacityCount+= .07
                img.style.opacity = `${opacityCount}`
            }
        }else {
            incorrectGuesses--
            update.innerHTML = `You have ${incorrectGuesses} guesses left!`
            if (incorrectGuesses === 0){
                let img = document.querySelector('img')
                opacityCount = 0
                img.style.opacity = `${opacityCount}`
                update.innerHTML = "Why so series? ;-) Let's put a smile on that face and try again!"
            }
        }    
}





























