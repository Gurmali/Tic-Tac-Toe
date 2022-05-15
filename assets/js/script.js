let boxes = Array.from(document.getElementsByClassName('box'))


const player1 = "X"
const player2 = "O"

let currentPlayer = player1
let notCurrentPlayer = player2


let position = Array(9).fill(null)

const winnerCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const runGame = () => {
    boxes.forEach(box => box.addEventListener('click', placeMarker))
}

function placeMarker(e) {
    let id = e.target.id
    
    if (!position[id]) {
        position[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(whoWon() !==false) {
            headingText = document.getElementById('heading').innerText = `Winner is ${currentPlayer}`
           
            stop()
        } else {
            noOne()
        }


        currentPlayer = currentPlayer == player1 ? player2 : player1
    }
    
}

function noOne() {
    if (Array.isArray(boxes) == !boxes.length) {
        headingText = document.getElementById('heading').innerText = "draw"
    }
}


function whoWon() {
    for (const condition of winnerCombinations) {
        let [a, b, c] = condition

        if (position[a] && (position[a] == position[b] && position[a] == position[c])) {
            return [a,b,c]
        }
    }
    return false
}

function stop() {
    position.fill(null)

    boxes.forEach(box => {

        box.innerText = 'X';

    })

    endGame()


}

function endGame() {
    boxes.forEach(box => box.addEventListener('click', restartGame))
    

}

const restartGame = () => {
    alert("Restarting game!")

    boxes.forEach(box => box.removeEventListener('click', restartGame))

    position.fill(null)

    boxes.forEach(box => {

        box.innerText = ' ';

    })

    /*headingText = document.getElementById('heading').innerText = "Tic Tac Toe"*/

    currentPlayer = player1

    

}

function giveScore() {

}

runGame()