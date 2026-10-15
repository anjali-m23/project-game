



let cells = document.querySelectorAll(".cell");
let game = document.getElementById("game");
let reset = document.getElementById("reset");


let currentPlayer = "X";
let gameOver = false;



let winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

      
        if (cell.textContent !== "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;

        let win = false;

        for (let i = 0; i < winningLines.length; i++) {

            let line = winningLines[i];

            if (
                cells[line[0]].textContent === currentPlayer &&
                cells[line[1]].textContent === currentPlayer &&
                cells[line[2]].textContent === currentPlayer
            ) {
                win = true;
                break;
            }
        }

        if (win) {
            game.textContent = "Player " + currentPlayer + " Jeet Gaya!";
            gameOver = true;
            return;
        }

 
        let draw = true;

        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent === "") {
                draw = false;
                break;
            }
        }

        if (draw) {
            game.textContent = "Match Draw!";
            gameOver = true;
            return;
        }

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        game.textContent = "Player " + currentPlayer + " ki baari";
    });

});


reset.addEventListener("click", function() {

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }

    currentPlayer = "X";
    gameOver = false;

    game.textContent = "Player X ki baari";
});