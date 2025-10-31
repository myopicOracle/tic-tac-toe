// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log

// initializze gameboard as array 
const Gameboard = (function () {
    const initializeGameboard = [];
    return function () {
        return initializeGameboard;
    }
})();

// factory function to create new players
function Player(name, marker) {
    return {name, marker};
}
    // example store players in objects
    const player1 = Player("Jim", "Circle")
    log(player1)

    const player2 = Player("Willis", "Cross")
    log(player2)

// object to control flow of game
function gameFlow(playFirst, playSecond) {
    return {playFirst, playSecond}
}
    //example
    let player1Marker = "Circle"
    let player2Marker = "Cross"

    const roundOne = gameFlow(player1Marker, player2Marker)
    log(roundOne)

// test logic in console

// final result / output

Gameboard
1 2 3 
4 5 6
7 8 9

WIN Condition
if 
    Across
        1 = 2 = 3 
        4 = 5 = 6
        7 = 8 = 9
    Down
        1 = 4 = 7
        2 = 5 = 8
        3 = 6 = 9
    Diagonal
        1 = 5 = 9
        3 = 5 = 7

Player Inputs (2 Players)

P = Player; C = Marker Choice

Array(PlayerChoices) {

    P1 C1,
    P2 C1,
    P1 C2,
    P2 C2,
    P1 C3,
    P2 C3,
    ...until win condition met

}

Need to Create Vars for grid positions


const gameBoard = (function () {
    
    const Gameboard = [];

    const square1 = Gameboard[0];
    const square2 = Gameboard[1];
    const square3 = Gameboard[2];
    const square4 = Gameboard[3];
    const square5 = Gameboard[4];
    const square6 = Gameboard[5];
    const square7 = Gameboard[6];
    const square8 = Gameboard[7];
    const square9 = Gameboard[8];

    return function () {
        return {square1, square2, square3, square4, square5, square6, square7, square8, square9}
    }

})();




=========== COMPLETED FULL(MODULAR?) FACTORY FUNCTIONS ===============

const gameBoardX = (function() {

    const boardArrayX = [];

    for (let i = 0; i < 9; i++) {
        let number = 1;
        let positionArray = [];
        while(number < 10) {
            const squareNumber = `square${number}`;
            positionArray.push(squareNumber);
            number++;
        }
        const square = positionArray[i];
        const gameBoardPosition = boardArrayX[i];
        const obj = {[square]: gameBoardPosition};
        boardArrayX.push(obj);
    }

    return function() {
        return boardArrayX;
    }

})();
