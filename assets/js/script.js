/**
 * Array of boxes
 */
let boxes = Array.from(document.getElementsByClassName('box'));

/**
 * Player X
 */
const player1 = "X";

/**
 * Player O
 */
const player2 = "O";

/**
 * Player 1
 */
let currentPlayer = player1;

//Make boxes empty and playable
let position = Array(9).fill(null);

/**
 * Starts the game
 */
function runGame() {
    boxes.forEach(box => box.addEventListener('click', placeMarker));
    document.getElementById('start-game').innerText = "Click Board To Start Game!";
}

/**
 * 
 * @param {Determines wich box is beaing clicked} e 
 */
function placeMarker(e) {
    document.getElementById('start-game').innerText = " ";

    let id = e.target.id;
    
    //switches between players and checks if there is a winner or not
    if (!position[id]) {
        position[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(whoWon() !==false) {
            document.getElementById('heading').innerText = `Winner is ${currentPlayer}`;

            stop();
        } else {
            draw();
        }

        currentPlayer = currentPlayer == player1 ? player2 : player1;
    }
    
}

/**
 * @returns Who won the game
 */
function whoWon() {

    let winnerCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (const condition of winnerCombinations) {
        let [a, b, c] = condition;

        if (position[a] && (position[a] == position[b] && position[a] == position[c])) {
            return [a,b,c];
        }
    }
    return false;
}

/**
 * Checks for Draw
 */
function draw() {
    let noWinner = 0;
    position.forEach((pos,i) => {
        if(position[i] !== null) noWinner++;
    });
    if(noWinner === 9) {
        document.getElementById('heading').innerText = 'Its a Draw!';

        stop();
    }
}

/**
 * Function for determining what happens when the game is over
 */
function stop() {
    boxes.forEach(box => {

        box.innerText = '-';

    });

    restartText();

    endGame();


}

/**
 * Eventlistener for Restarting game
 */
function endGame() {
    boxes.forEach(box => box.addEventListener('click', restartGame));

    gamesPlayed();
    

}

/**
 * Determines what happens when the game is restarted
 */
function restartGame() {
    alert("Restarting game!");

    boxes.forEach(box => box.removeEventListener('click', restartGame));

    position.fill(null);

    boxes.forEach(box => {

        box.innerText = ' ';

    });

    document.getElementById('heading').innerText = "Tic Tac Toe";

    document.getElementById('start-game').innerText = "Click Board to Start Game!";

    document.getElementById('restart-text').innerText = " ";

    currentPlayer = player1;

}

/**
 * Function for displaying how many games have been played
 */
function gamesPlayed() {
    let played = parseInt(document.getElementById('played').innerText);
    document.getElementById('played').innerText = ++played;
}

/**
 * Function for encouraging players to restart the game
 */
function restartText() {
    document.getElementById('restart-text').innerText = "click Board To Restart Game!";
}

runGame();