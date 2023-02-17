let playerName = {};

function editName(event) {
  playerName = event.target.parentNode.children[1];

  chooseName.style.display = "block";
}

function setPlayerName(element) {
  element.innerText = inputField.value;
  chooseName.style.display = "none";
  inputField.value = "";
}

function confirmPlayerName() {
  setPlayerName(playerName);
}

function cancelPlayerName() {
  chooseName.style.display = "none";
  inputField.value = "";
}

function witchPlayersTurn() {
  if (playersTurn.innerText === player1Name.innerText) {
    playersTurn.innerText = player2Name.innerText;
  } else {
    playersTurn.innerText = player1Name.innerText;
  }
}
