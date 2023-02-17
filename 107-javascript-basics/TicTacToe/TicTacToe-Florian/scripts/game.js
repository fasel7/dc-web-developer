function resetGameStatus() {
  editedPlayer = 0;
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  for (var x = 0; x < gameData.length; x++) {
    for (var y = 0; y < gameData[x].length; y++) {
      gameData[x][y] = 0;
    }
  }

  for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.innerHTML = "";
    gameFieldElement.classList.remove("disabled");
  }
}

function startNewGame() {
  resetGameStatus();
  gameAreaElement.style.display = "block";
}

function checkForGameOver() {
  for (let i = 0; i < gameData.length; i++) {
    if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
      console.log("win");
    }
    // const counter = 0;
    // return activePlayer;
    console.log(gameData[i][0]);
    console.log(gameData[i][1]);
    console.log(gameData[i][2]);
  }
  for (let i = 0; i < gameData.length; i++) {
    if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]) {
      console.log("win");
    }
    // const counter = 0;
    // return activePlayer;
    console.log(gameData[0][i]);
    console.log(gameData[1][i]);
    console.log(gameData[2][i]);
  }
}
