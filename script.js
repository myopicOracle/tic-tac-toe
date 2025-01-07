// Global variables
const gameBoardArray = []

// Create player methods and properties
class PlayMove {
    constructor(marker, position) {
        this.marker = marker
        this.position = position
    }

    _createMarker() {
        
    }

    _addMarkerToArr() {
        
    }
}

class PlayerOne extends PlayMove {
    constructor(marker, position) {
        super(marker, position)
        this.playerMarker = "X"
    }
}


class PlayerTwo extends PlayMove {
    constructor(marker, position) {
        super(marker, position)
        this.playerMarker = "O"
    }
}

// Create app gameplay logic
class GameLogic {
    anchor = document.querySelector("div.anchor")
    gameBoard = document.createElement("div")
    buttonPanel = document.createElement("div")
    buttonOne = document.createElement("button")
    buttonTwo = document.createElement("button")

    constructor() {
        // this.gameBoardArray = [] // moved to global scope
        this._renderBoard()
        this._renderButtons()
        this._playerOneChoice()
        this._playerTwoChoice()
    }

    _renderBoard() {
        this.gameBoard.setAttribute("class", "gameBoard")
        this.gameBoard.innerHTML = `
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
            <div class="blankTile gameBoard"></div>
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
        this.buttonOne.addEventListener("click", (e) => {
            e.target.someFunction()
        })
    }

    _playerTwoChoice() {

    }

    _checkWinCondition() {

    }

    _declareWinner() {

    }

    _resetGame() {
        
    }
}

// Immediately call methods in constructor on page load
const abracadabra = new GameLogic()