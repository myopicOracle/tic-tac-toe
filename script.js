// Global variables
const gameBoardArray = []
let length = 0

// Create player methods and properties
class PlayMove {
    constructor(position, marker) {
        this.position = position
        this.marker = marker
    }
}

// Create app gameplay logic
class GameLogic {
    // Page structure DOM
    anchor = document.querySelector("div.anchor")
    headerPanel = document.createElement("div")
    gameBoard = document.createElement("div")
    buttonPanel = document.createElement("div")
    buttonOne = document.createElement("button")
    buttonTwo = document.createElement("button")
    displayCurrentMarker = document.createElement("div")
    resetGameButton = document.createElement("button")

    // Private fields
    #position;
    #playerMarker;

    // Called immediately on page load
    constructor() {
        // private class properties
        this.#position
        this.#playerMarker = "?"
        // methods to call on page load
        this._renderHeaderPanel()
        this._createBoard()
        this._renderBoard()
        this._renderButtons()
        this._playerOneChoice()
        this._playerTwoChoice()
        this._placeMarker()
        this._checkFinalWin()
        this._resetGame()
    }

    _renderHeaderPanel() {
        this.headerPanel.textContent = "Let's Play Tic Tac Toe!"
        this.headerPanel.setAttribute("class", "headerPanel")
        this.anchor.appendChild(this.headerPanel)
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
        this.gameBoard.setAttribute("class", "container gameBoard")
        console.log(this.gameBoard)
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

        this.displayCurrentMarker.textContent = `${this.#playerMarker}`
        this.displayCurrentMarker.setAttribute("class", "displayMarker")
        this.buttonPanel.appendChild(this.displayCurrentMarker)
        
        this.buttonTwo.textContent = "Player 2 [O]"
        this.buttonPanel.appendChild(this.buttonTwo)

        this.anchor.appendChild(this.buttonPanel)
    }

    _playerOneChoice() {
        this.buttonOne.addEventListener("click", () => {
        this.#playerMarker = "X"
        this.displayCurrentMarker.textContent = this.#playerMarker
        // alert(`Player One's Turn | Marker: ${this.#playerMarker}`)
        })
    }
    
    _playerTwoChoice() {
        this.buttonTwo.addEventListener("click", () => {
        this.#playerMarker = "O"
        this.displayCurrentMarker.textContent = this.#playerMarker
        // alert(`Player Two's Turn | Marker: ${this.#playerMarker}`)
        })
    }

    _placeMarker() {
        this.gameBoard.addEventListener("click", (e) => {
            e.target.textContent = this.#playerMarker
            console.log(e.target)
            this.#position = Number(e.target.getAttribute('id'))
            
            const newMarker = new PlayMove(this.#position, this.#playerMarker)
            console.log(newMarker)
            
            gameBoardArray[this.#position - 1] = newMarker
            console.log(gameBoardArray)
            length++

            this._checkWinAfterMove()
            this._checkFinalWin()
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
                this._declareWinner()
                // alert("You Win!")
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
                this._declareWinner()
                // alert("You Win!")
            } else {
                this._noWinner()
                // alert("No Winner.")
            }
        }
    }

    _declareWinner() {
        if (this.#playerMarker === "X")
            this.headerPanel.textContent = "Player 1 Won the Game!"
        else if (this.#playerMarker === "O")
            this.headerPanel.textContent = "Player 2 Won the Game!"
        this.headerPanel.style.backgroundColor = "darkorange"

        this.anchor.lastChild.remove()
        this.resetGameButton.setAttribute("class", "resetGame")
        this.resetGameButton.textContent = "--- Play Again! ---"
        this.anchor.appendChild(this.resetGameButton)
    }

    _noWinner() {
        this.headerPanel.textContent = "No winner. Play again?"
        this.headerPanel.style.backgroundColor = "darkgrey"

        this.anchor.lastChild.remove()
        this.resetGameButton.setAttribute("class", "resetGame")
        this.resetGameButton.textContent = "Play Again!"
        this.anchor.appendChild(this.resetGameButton)    
    }

    _resetGame() {
        this.resetGameButton.addEventListener("click", (e) => {
            e.target.remove()
            this.headerPanel.style.backgroundColor = "violet"
            this._renderHeaderPanel()
            this._createBoard()
            this._renderBoard()
            this._renderButtons()
            gameBoardArray = []
        })   
    }
}

// Immediately call methods in constructor on page load
const abracadabra = new GameLogic()