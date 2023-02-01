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
    current = 0;
  });
}

function markedField(event) {
  let field = event.target;
  if (field.innerHTML == "") {
    field.innerHTML = players[current];
    emptyFields.pop();
    winningArray();
    winning(filledFields, players[current]);
    current = 1 - current;
    witchPlayersTurn();
    // PlayerInfoText();
    console.log(event);
  } else {
    // infoText.innerHTML = "Please choose a empty field";
    alert("Please choose a empty field");
  }
}

function checkIfCompleted() {
  if (emptyFields.length == 0) {
    // infoText.innerHTML = "draw";
    alert("draw");
  } else {
    // infoText.innerHTML = "Player " + players[current + 1] + "'s turn";
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
    // infoText.innerHTML = "Player " + players[current] + " won";

    console.log("Player " + players[current] + " won");
    console.log(gameBoard);
    // gameBoard.removeEventListener("click", markedField);
    return true;
  } else {
    checkIfCompleted();
    return false;
  }
}
