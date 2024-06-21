
function gameBoard() {

    let board = ['', '', '', '', '', '', '', '', ''];
    let gameRound = 0;


    const player1 = {
        name: "Player-1",
        marker: 'X'
    };

    const player2 = {
        name: "Player-2",
        marker: 'O'
    };

    function clearBoard()
    {
        board.forEach((__, index ) => {
            board[index]= '';
        })

        document.querySelectorAll('.game-button').forEach(button => {
        
            button.innerHTML = '';

        });

        return;
    }

    function checkBoardFull()
    {
        for(let i =0; i < 10; i++)
        {
            if(board[i]=='')
            {
                return;
            }
        }

        alert("board is full - It's a tie! ");
        return ;
    }

    function checkWin() {
        //check all horizontal possiblities
 
            for (let j = 0; j < 3; j++) {
                
                //check all horizontal possiblites
                if (board[0 + (j * 3)] == player1.marker && board[1 + (j * 3)] == player1.marker && board[2 + (j * 3)] == player1.marker) {
                    alert("player 1 won!");
                    return;
                }

                if (board[0 + (j * 3)] == player2.marker && board[1 + (j * 3)] == player2.marker && board[2 + (j * 3)] == player2.marker) {
                    alert("player 2 won!");
                    return;
                }
                
                //check all vertical possibilites
                if (board[0 + (j)] == player1.marker && board[3 + (j)] == player1.marker && board[6 + (j)] == player1.marker) {
                    alert("player 1 won!");
                    return;
                }
                
                if (board[0 + (j)] == player2.marker && board[3 + (j)] == player2.marker && board[6 + (j)] == player2.marker) {
                    alert("player 2 won!");
                    return;
                }
            }

            //check diagonal
            if (board[0] == player2.marker && board[4] == player2.marker && board[8] == player2.marker) {
                alert("player 2 won!");
                return;
            }

            if (board[0] == player1.marker && board[4] == player1.marker && board[8] == player1.marker) {
                alert("player 1 won!");
                return;
            }

            if (board[6] == player2.marker && board[4] == player2.marker && board[2] == player2.marker) {
                alert("player 2 won!");
                return;
            }

            if (board[6] == player1.marker && board[4] == player1.marker && board[2] == player1.marker) {
                alert("player 1 won!");
                return;
            }

            //check if board full
            checkBoardFull();
    }

    function placeMove(moveIndex) {

        if (board[moveIndex] == '') {

            const boardPiece = document.querySelector(`.game-button[data-index="${moveIndex}"]`);

            if (boardPiece) {

                PlayerNum = (gameRound % 2) + 1;

                boardPiece.innerHTML = PlayerNum === 1 ? player1.marker : player2.marker;

                board[moveIndex] = PlayerNum == 1 ? player1.marker : player2.marker;

                gameRound++;
                
                checkWin();
                //after finishing a move, check the board for wins.
            }

        }
        else { //ignore attempted move
            alert("Invalid move, try again.");
            return;
        }

    };


    //clear board function needed 
    return { placeMove, clearBoard };

}

//define gameboard object
const myGameBoard = gameBoard();

function displayController() {

    resetButton = document.querySelector('#reset-button').addEventListener('click', () => {

        //reset board, start game over
        alert('reset button clicked');
        myGameBoard.clearBoard();

    });

    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('click', (e) => {

            console.log(e.target.getAttribute('data-index'));
            console.log("hit button.");

            myGameBoard.placeMove(e.target.getAttribute('data-index'));
        });

    });
}

displayController();