const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Lionel Messi",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Alex Morgan",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "David Alaba",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Sebastian Schweinsteiger",
    height: 190,
    mass: 200,
    eye_color: "brown",
    gender: "male",
  },
  {
    name: "Anna Balla",
    height: 156,
    mass: 46,
    eye_color: "blue",
    gender: "female",
  },
];

// Exercise1
footballPlayers.push({
  name: "Rudi Völler",
  height: 176,
  mass: 80,
  eye_color: "blue",
  gender: "male",
});

// Exercise2
let footballPlayerNames = [];
footballPlayerNames = footballPlayers.map((player) => player.name);

// console.log(footballPlayers[0].name);
// for (let i = 0; i < footballPlayers.length; i++) {
//   footballPlayerNames.push(footballPlayers[i].name);
// }

console.log(footballPlayerNames);

// Exercise3
const malePlayer = footballPlayers.filter((player) => player.gender === "male");
console.log(malePlayer);

// Exercise4
const playerMassUnder50 = footballPlayers.some((player) => player.mass < 50);
console.log(playerMassUnder50);

// Exercise5
let playerHeight = [];
playerHeight = footballPlayers.map((player) => player.height);
console.log(playerHeight);

// Exercise6
let sumPlayerHeight = playerHeight.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log("Alle Spieler sind zusammen " + sumPlayerHeight + " cm groß");

// Exercise7
const playerOver100mass = footballPlayers.filter((player) => player.mass > 100);
console.log(playerOver100mass);

// Exercise8
const playerHeightUnder200 = footballPlayers.filter((player) => player.height < 200).map((player) => player.name);
console.log(playerHeightUnder200);

// Exercise9
console.log(footballPlayers.sort((a, b) => b.height - a.height)); // Sortiert nach größter Spieler
console.log(footballPlayers.sort((a, b) => b.mass - a.mass));

// Exercise10
console.log(footballPlayers.every((player) => player.eye_color === "Blue"));

// Exercise11
console.log(footballPlayers.every((player) => player.mass > 40));

// Exercise12
console.log(footballPlayers.some((player) => player.gender === "male"));
