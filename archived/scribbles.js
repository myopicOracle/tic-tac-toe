// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log
// store gameboard as array - create object array, use factory function

    // initialize object array
    // const Gameboard = {};
    //     log(Gameboard)
    //     log(typeof Gameboard)

    // const Players = {};

    const Gameboard = Object.create(Object.prototype);
    // console.dir(Gameboard)
    const testObject1 = {name: "Mark", key: "value"}
    // Gameboard.push("testObject1")
    log(Gameboard)
    log(typeof Gameboard)

    const Players = {};
    // console.dir(Players)
    const testObject2 = {name: "Mark", key: "value"}
    // Players.push("testObject2")
    log(Players)
    log(typeof Players)

    function Constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
    const meal = new Constructor("Pizza", "Coke")
    log(meal)
    log(meal.food)
    log(meal.drink)

// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public

    // creating objects using factory functions
    function factoryFunction(name, age, level) {
        return {name, age, level}
    }
    const player1 = factoryFunction("Tom", 21, 5)
    log(player1)

    // Creating/initializing object using Object.create()
    const Gameboard = Object.create(Object.prototype);
    const testObject1 = {name: "Mark", key: "value"}
    log(Gameboard)
    log(typeof Gameboard)

    // initializing arrays, creating objects, appending objects to array
    const Players = [];
    const player2 = factoryFunction("Lily", 26, 7)
    const testObject2 = {name: "Mark", key: "value"}
    Players.push(testObject2, player2)
    log(Players)
    log(typeof Players)

    // creating objects using constructor functions
    function Constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
    const meal = new Constructor("Pizza", "Coke")
    log(meal)
    log(meal.food)
    log(meal.drink)

    // testing array creating and object pushing
    const array = [];
    const obj = {name: "Mark", key: "value"};
    log(obj)
    log(obj.name)
    log(obj.key)

    let i = 0
    while (i < 4) {
        array.push(obj)
        i++
    }
    log(array)

// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public


// NOTE: minimize globals, use factory functions & IIFE's, prototype inheritance, Object.create(), Scope & Closure, private vs public
const log = console.log


// store gameboard as array - create object array, use factory function
const Gameboard = [];

// store players in objects  - using constructor function   
const Player = function(name, marker) {
this.name = name;
this.marker = marker;
};
const player1 = new Player("Jim", "Circle")
log(player1)

// store players in objects  - using factory function
function factoryPlayer(name, marker) {
return {name, marker};
}
const player2 = factoryPlayer("Willis", "Cross")
log(player2)

// object to control flow of game
function gameFlow(playFirst, playSecond) {
return {playFirst, playSecond}
}

let player1Marker = "Circle"
let player2Marker = "Cross"

const roundOne = gameFlow(player1Marker, player2Marker)
log(roundOne)



// ======================== From "test.js" ==========================

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

console.log(gameBoard())


// const gameBoardLoopIIFE = (function () {
//     const Gameboard = [];
//     for (let i = 0; i < 9; i++) {
//         // let number = 1;
//         // while (number < 10) {
//         //     const squareNumber = 

//         // }

//         let number = 1;
//         while(number < 10) {
//             const squareNumber = `square[number]`;
//             number++;
//             const square = squareNumber;
//             return square;
//         }
//         square = Gameboard[i];
//         const obj = {square}
//         Gameboard.push(obj);
//     }
//     return function () {
//         return Gameboard
//     }

// })();

// console.log(gameBoardLoopIIFE())

const Gameboard2 = [];
for (let i = 0; i < 9; i++) {
    let number = 1;
    let positionArray = [];
    while(number < 10) {
        const squareNumber = `square[number]`;
        positionArray.push(squareNumber)
        number++;
    }
    square = Gameboard2[i];
    const obj = {square}
    Gameboard2.push(obj);
}

console.log(Gameboard2)


// const foobar = (function () {
// const boardArrayX = [];
// return function () {
//     for (let i = 0; i < 9; i++) {
//         let number = 1;
//         let positionArray = [];
//         while(number < 10) {
//             const squareNumber = `square${number}`;
//             positionArray.push(squareNumber)
//             number++;
//         }
//         const square = positionArray[i];
//         const gameBoardPosition = boardArrayX[i];
//         const obj = {square: gameBoardPosition}
//         boardArrayX.push(obj);
//     }
// }
// })();
// // console.log(boardArrayX)

// console.log(foobar())




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

// console.log(boardArrayX) --> UNDEFINED - NOT IN GLOBALE SCOPE
console.log(gameBoardX())


================================================================================

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
// 
    return function() {
        return boardArrayX;
    }

})();
console.log(gameBoardFunction())
const gameBoard = gameBoardFunction()
console.log(gameBoard)


// const player1 = "x"
// const player2 = "o"
// let marker = player2
// let n = 2
// const squareNum = `square${n+1}`
// gameBoard[n] = {[squareNum]: marker}

// console.log(gameBoard)


// each round, alternate Players, choose position, replace object in board array

const playerA = "x";
const playerB = "o";

const playerWhoIs = prompt("Enter 'playerA' or 'playerB'.");
const playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1");

const index = playerInput - 1;
const squareNumber = `square${playerInput}`;
const playerMarker = (playerWhoIs === "playerA") ? "x" : "o";

gameBoard[index] = {[squareNumber]: playerMarker};
console.log(gameBoard);


    // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
    // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
    // gameBoard[index] = {[squareNumber]: playerMarker}

    // console.log(gameBoard)


    // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
    // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
    // gameBoard[index] = {[squareNumber]: playerMarker}

    // console.log(gameBoard)


    // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
    // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
    // gameBoard[index] = {[squareNumber]: playerMarker}

    // console.log(gameBoard)




    =======================================PLACEMARKER LOGIC COMPLETE=========================================

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
    // 
        return function() {
            return boardArrayX;
        }
    
    })();
    // console.log(gameBoardFunction())
    const gameBoard = gameBoardFunction()
    console.log(gameBoard)
    // console.log(gameBoard)
    
    
    // const player1 = "x"
    // const player2 = "o"
    // let marker = player2
    // let n = 2
    // const squareNum = `square${n+1}`
    // gameBoard[n] = {[squareNum]: marker}
    
    // console.log(gameBoard)
    
    
    // each round, alternate Players, choose position, replace object in board array
    
    const placeMarker = function (player, position) {
    
        const playerWhoIs = player;
            // prompt("Enter 'playerA' or 'playerB'.");
        const playerInput = position;
            // prompt("Please select your marker position. Enter number from 1-9.", "1");
    
        const index = playerInput - 1;
        const squareNumber = `square${playerInput}`;
        const playerMarker = (playerWhoIs === "playerA") ? "x" : "o";
    
        return gameBoard[index] = {[squareNumber]: playerMarker};
    
    };
    
    console.log(placeMarker("playerA", 5))
    console.log(gameBoard);
    
    console.log(placeMarker("playerB", 2))
    console.log(gameBoard);
    
    console.log(placeMarker("playerA", 7))
    console.log(gameBoard);
    
    console.log(placeMarker("playerB", 1))
    console.log(gameBoard);
    
    
        // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
        // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
        // gameBoard[index] = {[squareNumber]: playerMarker}
    
        // console.log(gameBoard)
    
    
        // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
        // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
        // gameBoard[index] = {[squareNumber]: playerMarker}
    
        // console.log(gameBoard)
    
    
        // playerWhoIs = prompt("Enter 'playerA' or 'playerB'.")
        // playerInput = prompt("Please select your marker position. Enter number from 1-9.", "1")
        // gameBoard[index] = {[squareNumber]: playerMarker}
    
        // console.log(gameBoard)

        =======================================PLACEMARKER LOGIC COMPLETE=========================================


=======================================BUILDING WIN CONDITION FUNCTION=========================================


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
    // console.log(placeMarker("playerA", 5))
    placeMarker("playerA", 5)
    console.log(gameBoard);

    // console.log(placeMarker("playerB", 2))
    placeMarker("playerB", 2)
    console.log(gameBoard);

    // console.log(placeMarker("playerA", 7))
    placeMarker("playerA", 7)
    console.log(gameBoard);

    // console.log(placeMarker("playerB", 1))
    placeMarker("playerB", 1)
    console.log(gameBoard);

    // console.log(placeMarker("playerA", 4))
    placeMarker("playerA", 4)
    console.log(gameBoard);

    // console.log(placeMarker("playerB", 3))
    placeMarker("playerB", 3)
    console.log(gameBoard);

    // console.log(placeMarker("playerA", 8))
    placeMarker("playerA", 8)
    console.log(gameBoard);

    // console.log(placeMarker("playerB", 9))
    placeMarker("playerB", 9)
    console.log(gameBoard);

    // console.log(placeMarker("playerA", 6))
    placeMarker("playerA", 6)
    console.log(gameBoard);


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

console.log(gameBoard[0].squareNumber)
console.log(gameBoard[0].playerMarker)
console.log(gameBoard[0])


// function to check if win condition has been met


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


    =======================================BUILDING WIN CONDITION FUNCTION=========================================



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


    ==================== VERSION 1 WIN CONDITION CHECK COMPLETE (BELOW) ======================

    // set game board
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


{
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
    //     (gameBoard[0].marker === gameBoard[1].marker === gameBoard[2].marker) ||
    //     (gameBoard[3].marker === gameBoard[4].marker === gameBoard[5].marker) ||
    //     (gameBoard[6].marker === gameBoard[7].marker === gameBoard[8].marker) ||
    //     (gameBoard[0].marker === gameBoard[3].marker === gameBoard[6].marker) ||
    //     (gameBoard[1].marker === gameBoard[4].marker === gameBoard[7].marker) ||
    //     (gameBoard[2].marker === gameBoard[5].marker === gameBoard[8].marker) ||
    //     (gameBoard[1].marker === gameBoard[5].marker === gameBoard[9].marker) ||
    //     (gameBoard[3].marker === gameBoard[5].marker === gameBoard[7].marker) 
    // ) {}

    // console.log(gameBoard[0].squareNumber)
    // console.log(gameBoard[0].marker)
    // console.log(gameBoard[0])



        // // function to check if win condition has been met


        // function checkWin() {

        //     if (
        //         (gameBoard[0].marker === gameBoard[1].marker === gameBoard[2].marker) ||
        //         (gameBoard[3].marker === gameBoard[4].marker === gameBoard[5].marker) ||
        //         (gameBoard[6].marker === gameBoard[7].marker === gameBoard[8].marker) ||
        //         (gameBoard[0].marker === gameBoard[3].marker === gameBoard[6].marker) ||
        //         (gameBoard[1].marker === gameBoard[4].marker === gameBoard[7].marker) ||
        //         (gameBoard[2].marker === gameBoard[5].marker === gameBoard[8].marker) ||
        //         (gameBoard[0].marker === gameBoard[4].marker === gameBoard[8].marker) ||
        //         (gameBoard[2].marker === gameBoard[4].marker === gameBoard[6].marker) 
        //     ) { 
        //         return "You Have Won The GAME!";
        //     } else return "No Winner";

        // }

// function to check if win condition has been met
}

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

    ==================== VERSION 1 WIN CONDITION CHECK COMPLETE (ABOVE) ======================
