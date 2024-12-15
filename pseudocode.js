// ========= PSEUDOCODE ========   final result / output

Gameboard
1 2 3 
4 5 6
7 8 9

WIN Condition
if 
    Across
        1 = 2 = 3 
        4 = 5 = 6
        7 = 8 = 9
    Down
        1 = 4 = 7
        2 = 5 = 8
        3 = 6 = 9
    Diagonal
        1 = 5 = 9
        3 = 5 = 7

Player Inputs (2 Players)

P = Player; C = Marker Choice

Array(PlayerChoices) {

    P1 C1,
    P2 C1,
    P1 C2,
    P2 C2,
    P1 C3,
    P2 C3,
    ...until win condition met

}


Need to Create Vars for grid positions

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


Player Choices

 1) Marker -- "X" or "O"
 2) Position -- Gameboard [0 - 9]

    playerA: marker: "x", Gameboard: Gameboard[0]