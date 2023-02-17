function markedField(event) {
  let field = event.target;
  if (field.innerHTML == "") {
    field.innerHTML = players[currentPlayer];
    emptyFields.pop();
    winningArray();
    winning(filledFields, players[currentPlayer]);
    currentPlayer = 1 - currentPlayer;
    witchPlayersTurn();

    console.log(event);
  } else {
    alert("Please choose a empty field");
  }
}

function checkIfCompleted() {
  if (emptyFields.length == 0) {
    alert("draw");
  }
}

function winningArray() {
  for (let i = 0; i < 9; i++) {
    filledFields[i] = document.querySelectorAll(".board-box")[i].innerHTML;
  }
  console.log(filledFields);
}

// winning combinations using the board indexies
function winning(board, player) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    playerWon();
    console.log("Player " + players[currentPlayer] + " won");
    console.log(gameBoard);

    return true;
  } else {
    checkIfCompleted();
    return false;
  }
}

function playerWon() {
  console.log("Player " + players[currentPlayer] + " won");
}

function startNewGame() {
  resetGame();
  witchPlayersTurn();
  gameContainer.style.display = "block";
}

function resetGame() {
  document.querySelectorAll(".board-box").forEach((element) => {
    element.innerHTML = "";
    playersTurn.innerText = "";
    emptyFields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    currentPlayer = 0;
  });
}
