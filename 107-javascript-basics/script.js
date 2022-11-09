// window.alert("Hello World");

console.log("Hello World auf der Konsole");

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

let shoppingCart = ["CD", "BOX", "DVD"]; //Array//

console.log(shoppingCart[0]);

//Objects//
let user = {
  firstName: "Julian",
  lastName: "Visi",
};

console.log(user);
console.log(user.firstName);

// let try =

// let 2ndName =
// let first%Name =
// let first-name =
// let first_Name = 1;
// let_firstName = 2;
// let $firstName = 2;

//Funktionen//

function showMessageDeclaration() {
  console.log("Hallo Devs");
}

function showMessageDeclaration(firstName, lastName) {
  console.log("Hallo " + firstName + " " + lastName);
}

function outerFunction() {
  innerFunction();
}
function innerFunction() {
  console.log("Hi");
}

function addNumber(x, y) {
  return x + y;
}
console.log(addNumber(2, 2));

function createUser(userName, email, password) {
  let user = {
    userName: userName,
    email: email,
    password: password,
  };
  return user;
}

let newUser = createUser("Julian", "julian@gmail.at", "123445666");
console.log(newUser);

outerFunction();

showMessageDeclaration();
showMessageDeclaration("Julian");

//Anonyme Funktion//

let functionExpression = function () {
  console.log("Hallo!");
};

functionExpression();

//Berechnungen//

function geometrischerKörper(height, length, width) {
  let h = height;
  let x = length;
  let y = width;

  let surface = calculateSurface(x, y);
  console.log("Fläche = " + surface);

  console.log("Volumen = " + calculateVolume(h, x, y));
}

geometrischerKörper(1, 2, 3);

function calculateSurface(length, width) {
  let flaeche = length * width;
  return flaeche;
}

function calculateVolume(h, x, y) {
  return h * x * y;
}
