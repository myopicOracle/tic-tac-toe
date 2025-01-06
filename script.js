// Create player methods and properties
class PlayMove {
    constructor(marker, position) {
        this.marker = marker
        this.position = position
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
    constructor() {
        this.gameBoardArray = []
        this._renderBoard()
        this._renderButtons()
    }

    _renderBoard() {
        const gameBoard = document.createElement("div")
    }

    _renderButtons() {
        const buttonOne = document.createElement("button")
        buttonOne.value = "PlayerOne"

        const buttonTwo = document.createElement("button")
        buttonTwo.value = "PlayerTwo"
    }

    _playerOneChoice() {

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