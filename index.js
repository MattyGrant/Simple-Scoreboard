let scoreLeft = 0
let scoreRight = 0 
let scoreCountLeft = document.getElementById('score-left')
let scoreCountRight = document.getElementById('score-right')

// Left side score
const scoreDisplayLeft = () => {
    scoreCountLeft.textContent = scoreLeft
    error.textContent = ''
}

const plus1Left = () => {
    scoreLeft += 1
    scoreDisplayLeft()
}

const plus2Left = () => {
    scoreLeft += 2
    scoreDisplayLeft()
}
const plus3Left = () => {
    scoreLeft += 3
    scoreDisplayLeft()
}

// Right side Score 
const scoreDisplayRight = () => {
    scoreCountRight.textContent = scoreRight
    error.textContent = ''
}

const plus1Right = () => {
    scoreRight += 1
    scoreDisplayRight()
}

const plus2Right = () => {
    scoreRight += 2
    scoreDisplayRight()
}
const plus3Right = () => {
    scoreRight += 3
    scoreDisplayRight()
}


// Score Reset Button
let error = document.getElementById('error')
const reset = () => {
    scoreRight = 0
    scoreLeft = 0
    scoreCountLeft.textContent = 0
    scoreCountRight.textContent = 0
    error.textContent = ' Game over!'
}