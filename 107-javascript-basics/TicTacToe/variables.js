const editPlayerNameBtn = document.querySelectorAll(".edit-name-btn").forEach((element) => {
  element.addEventListener("click", editName);
});

const inputField = document.querySelector("input");
const chooseName = document.getElementById("choose-name");
const player1Name = document.getElementById("player1-name");
const player2Name = document.getElementById("player2-name");
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", confirmPlayerName);

const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", cancelPlayerName);
const newGameBtn = document.getElementById("new-game-btn");
newGameBtn.addEventListener("click", startNewGame);
const gameContainer = document.getElementById("game-container");
const playersTurn = document.getElementById("players-turn");
const gameBoard = document.getElementById("game-board");
gameBoard.addEventListener("click", markedField);

let current = 0;
const players = ["Х", "Ο"];
let filledFields = [];
let emptyFields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
