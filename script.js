// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log

// initializze gameboard as array - IIFE wrapped Factory Function
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

log(gameBoardX)

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