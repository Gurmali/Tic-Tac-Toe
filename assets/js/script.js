let boxes = Array.from(document.getElementsByClassName('box'))

console.log(boxes)
const player1 = "X"
const player2 = "O"
let currentPlayer = player1

boxes.forEach(box => {
    box.addEventListener('click', doTheClick, { once: true })
})

function doTheClick(e) {
    let id = e.target.id
    e.target.innerText = currentPlayer
    if ([id]) {
    switchPlayer()
    }
}


function runGame () {

}

function placeMarker() {
    
}

function switchPlayer() {
        [id] = currentPlayer
        currentPlayer = currentPlayer == player1 ? player2 : player1
}

function whoWon() {

}

function giveScore() {

}