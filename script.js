// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log

// initializze gameboard array as IIFE wrapped Factory Function
const createBoard = (function() {

    const array = [];

    for (let i = 0; i < 9; i++) {
        let number = 1;
        let locationArray = [];
        while(number < 10) {
            const locationNumber = `square${number}`;
            locationArray.push(locationNumber);
            number++;
        }
        const location = locationArray[i];
        const marker = null;
        const obj = {location, marker};
        array.push(obj);
    }
 
    return function() {
        return array;
    }

})();

const gameBoard = createBoard()
console.log(gameBoard)


// define marker position for each play
const placeMarker = function (player, position) {

    const playerWhoIs = player;
        // prompt("Enter 'playerA' or 'playerB'.");
    const playerInput = position;
        // prompt("Please select your marker position. Enter number from 1-9.", "1");

    const index = playerInput - 1;
    const location = `square${playerInput}`;
    const marker = (playerWhoIs === "playerA") ? "x" : "o";

    return gameBoard[index] = {location, marker};

};
// create function to check win condition
function checkWin() {

    if (
        ((gameBoard[0].marker !== null && gameBoard[0].marker === gameBoard[1].marker) && (gameBoard[1].marker !== null && gameBoard[1].marker === gameBoard[2].marker)) ||
        ((gameBoard[3].marker !== null && gameBoard[3].marker === gameBoard[4].marker) && (gameBoard[4].marker !== null && gameBoard[4].marker === gameBoard[5].marker)) ||
        ((gameBoard[6].marker !== null && gameBoard[6].marker === gameBoard[7].marker) && (gameBoard[7].marker !== null && gameBoard[7].marker === gameBoard[8].marker)) ||
        ((gameBoard[0].marker !== null && gameBoard[0].marker === gameBoard[3].marker) && (gameBoard[3].marker !== null && gameBoard[3].marker === gameBoard[6].marker)) ||
        ((gameBoard[1].marker !== null && gameBoard[1].marker === gameBoard[4].marker) && (gameBoard[4].marker !== null && gameBoard[4].marker === gameBoard[7].marker)) ||
        ((gameBoard[2].marker !== null && gameBoard[2].marker === gameBoard[5].marker) && (gameBoard[5].marker !== null && gameBoard[5].marker === gameBoard[8].marker)) ||
        ((gameBoard[0].marker !== null && gameBoard[0].marker === gameBoard[4].marker) && (gameBoard[4].marker !== null && gameBoard[4].marker === gameBoard[8].marker)) ||
        ((gameBoard[2].marker !== null && gameBoard[2].marker === gameBoard[4].marker) && (gameBoard[4].marker !== null && gameBoard[4].marker === gameBoard[6].marker))
    ) { 
        return "You Have Won The GAME!";
    } else return "No Winner";

}

    placeMarker("playerA", 5)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerB", 2))
    placeMarker("playerB", 2)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerA", 7))
    placeMarker("playerA", 7)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerB", 1))
    placeMarker("playerB", 1)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerA", 4))
    placeMarker("playerA", 4)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerB", 3))
    placeMarker("playerB", 3)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerA", 8))
    placeMarker("playerA", 8)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerB", 9))
    placeMarker("playerB", 9)
    console.log(gameBoard);
    console.log(checkWin())

    // console.log(placeMarker("playerA", 6))
    placeMarker("playerA", 6)
    console.log(gameBoard);
    console.log(checkWin())



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
