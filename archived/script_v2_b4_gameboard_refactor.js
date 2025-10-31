// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log

// initializze gameboard as array - IIFE wrapped Factory Function
const gameBoard = (function() {

    const boardArray = [];

    for (let i = 0; i < 9; i++) {
        let number = 1;
        let positionArray = [];
        while(number < 10) {
            const squareNumber = `square${number}`;
            positionArray.push(squareNumber);
            number++;
        }
        const square = positionArray[i];
        const gameBoardPosition = boardArray[i];
        const obj = {[square]: gameBoardPosition};
        boardArray.push(obj);
    }

    return function() {
        return boardArray;
    }

})();

log(gameBoard)


// FACTORY FUNCTION to convert player choices to markers in board array
const placeMarker = function (player, position) {

    const playerWhoIs = player; // prompt("Enter 'playerA' or 'playerB'.");
    const playerInput = position; // prompt("Please select your marker position. Enter number from 1-9.", "1");

    const index = playerInput - 1;
    const squareNumber = `square${playerInput}`;
    const playerMarker = (playerWhoIs === "playerA") ? "x" : "o";

    return gameBoard[index] = {[squareNumber]: playerMarker};

};


// Function to get "player" and "position" inputs from players (prompt?)

console.log(placeMarker("playerA", 5))
console.log(gameBoard);

console.log(placeMarker("playerB", 2))
console.log(gameBoard);

console.log(placeMarker("playerA", 7))
console.log(gameBoard);

console.log(placeMarker("playerB", 1))
console.log(gameBoard);



// displayController factory function 

    // TBD TBD TBD



// factory function to create new players
function Player(name, marker) {
    return {name, marker};
}
    // example
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





// set game board
const gameBoardFunction = (function() {

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

const gameBoard = gameBoardFunction()
// console.log(gameBoard)

// define marker position for each play
const placeMarker = function (player, position) {

    const playerWhoIs = player;
        // prompt("Enter 'playerA' or 'playerB'.");
    const playerInput = position;
        // prompt("Please select your marker position. Enter number from 1-9.", "1");

    const index = playerInput - 1;
    const squareNumber = `square${playerInput}`;
    const playerMarker = (playerWhoIs === "playerA") ? "x" : "o";

    return gameBoard[index] = {squareNumber, playerMarker};

};


        // // record player and choice
        // const whichPlayer = prompt('Enter "Player1" or "Player2".', "Who are you?")
        // const markerPosition = prompt('Enter number from 1-9 for corresponding game grid.', "5")

        // // call function to place marker on grid
        // placeMarker(whichPlayer, markerPosition)
        // console.log(gameBoard)


// test round in console using dummy inputs 
    // // console.log(placeMarker("playerA", 5))
    // placeMarker("playerA", 5)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerB", 2))
    // placeMarker("playerB", 2)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerA", 7))
    // placeMarker("playerA", 7)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerB", 1))
    // placeMarker("playerB", 1)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerA", 4))
    // placeMarker("playerA", 4)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerB", 3))
    // placeMarker("playerB", 3)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerA", 8))
    // placeMarker("playerA", 8)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerB", 9))
    // placeMarker("playerB", 9)
    // console.log(gameBoard);

    // // console.log(placeMarker("playerA", 6))
    // placeMarker("playerA", 6)
    // console.log(gameBoard);


// win condition - 3 across, 3 down, 3 diagonal 

    // if (
    //     (gameBoard[0].playerMarker === gameBoard[1].playerMarker === gameBoard[2].playerMarker) ||
    //     (gameBoard[3].playerMarker === gameBoard[4].playerMarker === gameBoard[5].playerMarker) ||
    //     (gameBoard[6].playerMarker === gameBoard[7].playerMarker === gameBoard[8].playerMarker) ||
    //     (gameBoard[0].playerMarker === gameBoard[3].playerMarker === gameBoard[6].playerMarker) ||
    //     (gameBoard[1].playerMarker === gameBoard[4].playerMarker === gameBoard[7].playerMarker) ||
    //     (gameBoard[2].playerMarker === gameBoard[5].playerMarker === gameBoard[8].playerMarker) ||
    //     (gameBoard[1].playerMarker === gameBoard[5].playerMarker === gameBoard[9].playerMarker) ||
    //     (gameBoard[3].playerMarker === gameBoard[5].playerMarker === gameBoard[7].playerMarker) 
    // ) {}

    // console.log(gameBoard[0].squareNumber)
    // console.log(gameBoard[0].playerMarker)
    // console.log(gameBoard[0])



        // // function to check if win condition has been met


        // function checkWin(gameBoard) {

        //     if (
        //         (gameBoard[0].playerMarker === gameBoard[1].playerMarker === gameBoard[2].playerMarker) ||
        //         (gameBoard[3].playerMarker === gameBoard[4].playerMarker === gameBoard[5].playerMarker) ||
        //         (gameBoard[6].playerMarker === gameBoard[7].playerMarker === gameBoard[8].playerMarker) ||
        //         (gameBoard[0].playerMarker === gameBoard[3].playerMarker === gameBoard[6].playerMarker) ||
        //         (gameBoard[1].playerMarker === gameBoard[4].playerMarker === gameBoard[7].playerMarker) ||
        //         (gameBoard[2].playerMarker === gameBoard[5].playerMarker === gameBoard[8].playerMarker) ||
        //         (gameBoard[0].playerMarker === gameBoard[4].playerMarker === gameBoard[8].playerMarker) ||
        //         (gameBoard[2].playerMarker === gameBoard[4].playerMarker === gameBoard[6].playerMarker) 
        //     ) { 
        //         return "You Have Won The GAME!";
        //     } else return "No Winner";

        // }

// function to check if win condition has been met


function checkWin(gameBoard) {

    if (
        (gameBoard[0].playerMarker === gameBoard[1].playerMarker === gameBoard[2].playerMarker) ||
        (gameBoard[3].playerMarker === gameBoard[4].playerMarker === gameBoard[5].playerMarker) ||
        (gameBoard[6].playerMarker === gameBoard[7].playerMarker === gameBoard[8].playerMarker) ||
        (gameBoard[0].playerMarker === gameBoard[3].playerMarker === gameBoard[6].playerMarker) ||
        (gameBoard[1].playerMarker === gameBoard[4].playerMarker === gameBoard[7].playerMarker) ||
        (gameBoard[2].playerMarker === gameBoard[5].playerMarker === gameBoard[8].playerMarker) ||
        (gameBoard[0].playerMarker === gameBoard[4].playerMarker === gameBoard[8].playerMarker) ||
        (gameBoard[2].playerMarker === gameBoard[4].playerMarker === gameBoard[6].playerMarker) 
    ) { 
        return "You Have Won The GAME!";
    } else return "No Winner";

}


    placeMarker("playerA", 5)
    console.log(gameBoard);
    console.log(gameBoard[0].playerMarker)
    console.log(gameBoard[1].playerMarker)
    console.log(gameBoard[2].playerMarker)
    console.log(checkWin(gameBoard))

    // console.log(placeMarker("playerB", 2))
    placeMarker("playerB", 2)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerA", 7))
    placeMarker("playerA", 7)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerB", 1))
    placeMarker("playerB", 1)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerA", 4))
    // placeMarker("playerA", 4)
    console.log(gameBoard);
    console.log(gameBoard[0].playerMarker)
    console.log(gameBoard[1].playerMarker)
    console.log(gameBoard[2].playerMarker)
    checkWin(gameBoard)

    // console.log(placeMarker("playerB", 3))
    placeMarker("playerB", 3)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerA", 8))
    placeMarker("playerA", 8)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerB", 9))
    placeMarker("playerB", 9)
    console.log(gameBoard);
    checkWin(gameBoard)

    // console.log(placeMarker("playerA", 6))
    placeMarker("playerA", 6)
    console.log(gameBoard);
    checkWin(gameBoard)
