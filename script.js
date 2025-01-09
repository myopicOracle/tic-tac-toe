// Global variables
const gameBoardArray = []
let length = 0

// Create player methods and properties
class PlayMove {
    constructor(position, marker) {
        this.position = position
        this.marker = marker
    }

    _createMarker() {
        
    }

    _addMarkerToArr() {
        
    }
}

class PlayerOne extends PlayMove {
    constructor(position, marker) {
        super(position, marker)
        this.playerMarker = "X"
    }
}

class PlayerTwo extends PlayMove {
    constructor(position, marker) {
        super(position, marker)
        this.playerMarker = "O"
    }
}


// Create app gameplay logic
class GameLogic {
    // Page structure DOM
    anchor = document.querySelector("div.anchor")
    gameBoard = document.createElement("div")
    buttonPanel = document.createElement("div")
    buttonOne = document.createElement("button")
    buttonTwo = document.createElement("button")

    // Gameboard DOM
    tile1 = document.getElementById("1")
    tile2 = document.getElementById("2")
    tile3 = document.getElementById("3")
    tile4 = document.getElementById("4")
    tile5 = document.getElementById("5")
    tile6 = document.getElementById("6")
    tile7 = document.getElementById("7")
    tile8 = document.getElementById("8")
    tile9 = document.getElementById("9")

    // Private fields
    #position;
    #playerMarker;

    // Player Logic
    // playerOneMarker = "X"
    // playerTwoMarker = "O"

    // Called immediately on page load
    constructor() {
        // private class properties
        this.#position
        this.#playerMarker
        // methods to call on page load
        this._createBoard()
        this._renderBoard()
        this._renderButtons()
        this._playerOneChoice()
        this._playerTwoChoice()
        this._placeMarker()
        this._checkFinalWin()
    }

    _createBoard() {

        for (let i = 0; i < 9; i++) {
            let number = 1;
            let locationArray = [];
            while(number < 10) {
                const locationNumber = number;
                locationArray.push(locationNumber);
                number++;
            }
            const position = locationArray[i];
            const marker = null;
            const obj = {position, marker};
            gameBoardArray.push(obj);
        };
        
        console.log(gameBoardArray)

        return gameBoardArray;
    
    }

    _renderBoard() {
        this.gameBoard.setAttribute("class", "gameBoard")
        this.gameBoard.innerHTML = `
            <div id="1" class="blankTile gameBoard"></div>
            <div id="2" class="blankTile gameBoard"></div>
            <div id="3" class="blankTile gameBoard"></div>
            <div id="4" class="blankTile gameBoard"></div>
            <div id="5" class="blankTile gameBoard"></div>
            <div id="6" class="blankTile gameBoard"></div>
            <div id="7" class="blankTile gameBoard"></div>
            <div id="8" class="blankTile gameBoard"></div>
            <div id="9" class="blankTile gameBoard"></div>
            `
        this.anchor.appendChild(this.gameBoard)
    }

    _renderButtons() {
        this.buttonPanel.setAttribute("class", "buttonPanel")
        
        this.buttonOne.textContent = "Player 1 [X]"
        this.buttonPanel.appendChild(this.buttonOne)
        
        this.buttonTwo.textContent = "Player 2 [O]"
        this.buttonPanel.appendChild(this.buttonTwo)

        this.anchor.appendChild(this.buttonPanel)
    }

    _playerOneChoice() {
        this.buttonOne.addEventListener("click", () => {
        this.#playerMarker = "X"
        alert(`Player One's Turn | Marker: ${this.#playerMarker}`)
        })
    }
    
    _playerTwoChoice() {
        this.buttonTwo.addEventListener("click", () => {
        this.#playerMarker = "O"
        alert(`Player Two's Turn | Marker: ${this.#playerMarker}`)
        })
    }

    _placeMarker() {
        this.gameBoard.addEventListener("click", (e) => {
            e.target.textContent = this.#playerMarker
            // console.log(this.#playerMarker)
            this.#position = Number(e.target.getAttribute('id'))
            // console.log(this.#position)
            
            const newMarker = new PlayMove(this.#position, this.#playerMarker)
            console.log(newMarker)
            
            gameBoardArray[this.#position - 1] = newMarker
            console.log(gameBoardArray)
            
            length++
            // console.log(length)
            this._checkWinAfterMove()

        })  
    }

    _checkWinAfterMove() {
        if (length < 9) {
            if (
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[1].marker) && (gameBoardArray[1].marker !== null && gameBoardArray[1].marker === gameBoardArray[2].marker)) ||
                ((gameBoardArray[3].marker !== null && gameBoardArray[3].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[5].marker)) ||
                ((gameBoardArray[6].marker !== null && gameBoardArray[6].marker === gameBoardArray[7].marker) && (gameBoardArray[7].marker !== null && gameBoardArray[7].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[3].marker) && (gameBoardArray[3].marker !== null && gameBoardArray[3].marker === gameBoardArray[6].marker)) ||
                ((gameBoardArray[1].marker !== null && gameBoardArray[1].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[7].marker)) ||
                ((gameBoardArray[2].marker !== null && gameBoardArray[2].marker === gameBoardArray[5].marker) && (gameBoardArray[5].marker !== null && gameBoardArray[5].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[2].marker !== null && gameBoardArray[2].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[6].marker))
            ) { 
                return this._declareWinner()
            } 
        }
    }

    _checkFinalWin() {
        if (length >= 9) {
            if (
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[1].marker) && (gameBoardArray[1].marker !== null && gameBoardArray[1].marker === gameBoardArray[2].marker)) ||
                ((gameBoardArray[3].marker !== null && gameBoardArray[3].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[5].marker)) ||
                ((gameBoardArray[6].marker !== null && gameBoardArray[6].marker === gameBoardArray[7].marker) && (gameBoardArray[7].marker !== null && gameBoardArray[7].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[3].marker) && (gameBoardArray[3].marker !== null && gameBoardArray[3].marker === gameBoardArray[6].marker)) ||
                ((gameBoardArray[1].marker !== null && gameBoardArray[1].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[7].marker)) ||
                ((gameBoardArray[2].marker !== null && gameBoardArray[2].marker === gameBoardArray[5].marker) && (gameBoardArray[5].marker !== null && gameBoardArray[5].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[0].marker !== null && gameBoardArray[0].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[8].marker)) ||
                ((gameBoardArray[2].marker !== null && gameBoardArray[2].marker === gameBoardArray[4].marker) && (gameBoardArray[4].marker !== null && gameBoardArray[4].marker === gameBoardArray[6].marker))
            ) { 
                return this._declareWinner()
            } else alert("There is no winner this round. Play Again!")
        }
    }

    _declareWinner() {
        alert("You Have Won The GAME!")
    }

    _resetGame() {
        
    }
}

// Immediately call methods in constructor on page load
const abracadabra = new GameLogic()
