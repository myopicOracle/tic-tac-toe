// Global variables
const gameBoardArray = []
let position = 0;
let playerMarker;

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

    // Called immediately on page load
    constructor() {
        this._renderBoard()
        this._renderButtons()
        this._playerOneChoice()
        this._playerTwoChoice()
        this._placeMarker()
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
        playerMarker = "X"
        alert(`Player One's Turn | Marker: ${playerMarker}`)
        })
    }
    
    _playerTwoChoice() {
        this.buttonTwo.addEventListener("click", () => {
        playerMarker = "O"
        alert(`Player Two's Turn | Marker: ${playerMarker}`)
        })
    }
    
    _placeMarker() {
        this.gameBoard.addEventListener("click", (e) => {
            e.target.textContent = playerMarker;
            console.log(playerMarker)
            position++;
            console.log(position)
            const newMarker = new PlayMove(playerMarker, position)
            console.log(newMarker)
            gameBoardArray.push(newMarker)
            console.log(gameBoardArray)
        })  
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