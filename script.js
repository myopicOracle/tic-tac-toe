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