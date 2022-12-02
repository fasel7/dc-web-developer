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

function addPlayer() {
  const enteredName = prompt("Spielername eingeben");

  if (enteredName.length < 3) {
    alert("Spielername muss mindestens drei Zeichen lang sein");
    return;
  }

  const enteredHeight = prompt("Größe des Spielers  eingeben");
  const convertedHeight = parseInt(enteredHeight);

  if (isNaN(convertedHeight)) {
    alert("Bitte geben sie eine gültige Zahl ein.");
    return;
  }

  if (convertedHeight < 100) {
    alert("Der Spieler muss größer als 100cm sein.");
    return;
  }

  const enteredMass = prompt("Gewicht des Spielers  eingeben");
  const convertedMass = parseInt(enteredMass);

  if (isNaN(convertedMass)) {
    alert("Bitte geben sie eine gültige Zahl ein.");
    return;
  }

  if (convertedMass > 100) {
    alert("Der Spieler ist zu dick.");
    return;
  }

  const enteredEyeColor = prompt("Augenfarbe des Spielers eingeben");

  if (enteredEyeColor === "") {
    alert("Augenfarbe eingeben");
    return;
  }

  const enteredGender = prompt("Geschlecht des Spielers eingeben");

  if (enteredGender === "") {
    alert("Geschlecht eingeben");
    return;
  }

  const player = {
    name: enteredName,
    height: convertedHeight,
    mass: convertedMass,
    eye_color: enteredEyeColor,
    gender: enteredGender,
  };
  footballPlayers.push(player);
}
console.log(footballPlayers);
addPlayer();
