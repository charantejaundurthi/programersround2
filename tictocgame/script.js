let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function makeMove(cell) {
    const index = Array.from(cells).indexOf(cell);

    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        
        if (checkWin(currentPlayer)) {
            message.textContent = `Player ${currentPlayer} wins!`;
            message.classList.add('winner');
            gameActive = false;
        } else if (board.indexOf('') === -1) {
            message.textContent = "It's a draw!";
            message.classList.add('draw');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin(player) {
    for (const pattern of winPatterns) {
        if (board[pattern[0]] === player && board[pattern[1]] === player && board[pattern[2]] === player) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.textContent = `Player ${currentPlayer}'s turn`;
    message.classList.remove('winner', 'draw');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
}

resetBoard();
