// tic-tac-toe.js

// Ensure the code runs after the DOM is fully loaded

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div"); // Select all divs in the board
    
    squares.forEach(square => {
        square.classList.add("square"); // Add the 'square' class to each cell
    });
});

let currentPlayer = "X"; // Initialize first player as "X"

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if (square.textContent === "") { // Only mark empty squares
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer); // Add class "X" or "O" for styling
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("hover"); // Add hover effect on mouseover
        });
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover"); // Remove hover effect on mouseout
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    function checkWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                const winner = squares[a].textContent;
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
                return true;
            }
            return false;
        });
    }

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if (square.textContent === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector("button");

    newGameButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = ""; // Clear the content of each square
            square.classList.remove("X", "O"); // Remove the "X" or "O" class
        });
        status.textContent = "Move your mouse over a square and click to play an X or an O."; // Reset status text
        status.classList.remove("you-won");
        currentPlayer = "X"; // Reset the starting player
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector("button");

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            if (square.textContent === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (!checkWinner()) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    newGameButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";
    });

    function checkWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                const winner = squares[a].textContent;
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
                return true;
            }
            return false;
        });
    }
});
