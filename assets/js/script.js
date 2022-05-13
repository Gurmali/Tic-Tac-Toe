const player1 = 'circle'
const player2 = 'x'
const boxes = document.querySelectorAll('[data-box]')

boxes.forEach(box => {
    box.addEventListener('click', doTheClick, { once: true })
})

function doTheClick(e) {
    console.log('clicked')
}


function runGame () {

}

function placeMarker() {

}

function switchPlayer() {

}

function whoWon() {

}

function giveScore() {

}