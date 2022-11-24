function createUser(userName, eMail, password) {
  let user = {
    userName: userName,
    eMail: eMail,
    password: password,
  };
  return user;
}

let newUser = createUser("Julian", "julian@gmail.at", "7767677");

console.log(newUser);

function calculateVolume(height, width, length) {
  let x = height;
  let y = width;
  let z = length;
  console.log(x * y * z);
}

calculateVolume(2, 3, 4);

function showMessageDeclaration(firstName, lastName) {
  console.log("Hallo " + firstName + " " + lastName);
}

showMessageDeclaration("Julian", "Visi");

function calculate(num1, num2) {
  console.log("Das Ergebnis der Addition ist " + (num1 + num2));
  console.log("Das Ergebnis der Subtration ist " + (num1 - num2));
  console.log("Das Ergebnis der Division ist " + num1 / num2);
  console.log("Das Ergebnis der Multiplikation ist " + num1 * num2);
}
calculate(7, 5);

const PI = 3.1415;

function kreisflächeCalculate(radius) {
  let sum = radius * radius * PI;
  console.log(sum);
}

kreisflächeCalculate(5);

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber = getRandomInt(20, 10);
console.log(randomNumber);

// if else Übungen

function orderMyLogic(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(11));

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(4));

function findTheRightSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num < 10) {
    return "Small";
  } else if (num >= 10 && num < 15) {
    return "Medium";
  } else if (num >= 15 && num <= 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(findTheRightSize(19));

function showAlert(statusCode) {
  let message;
  if (statusCode == 1) {
    message = "Alpha";
  } else if (statusCode == 2) {
    message = "Beta";
  } else if (statusCode == 3) {
    message = "Gamma";
  } else if (statusCode == 4) {
    message = "Delta";
  }
  //alert(message);
}
showAlert(4);

function evenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}
evenOrOdd(2);

function boolToWord(bool) {
  if (bool == true) {
    console.log("Yes");
  } else if (bool == false) {
    console.log("No");
  }
}
boolToWord(true);

function take_umbrella(weather, num) {
  if (weather == "rainy" || (weather == "cloudy" && num > 0.2)) {
    return true;
  } else if (weather == "sunny" && num > 0.5) {
    return true;
  } else if (weather == "sunny") {
    return false;
  }
}
console.log(take_umbrella("sunny", 0.4));

function rps(p1, p2) {
  if (p1 == "rock" && p2 == "paper") {
    return "Player 2 won";
  } else if (p1 == "scissors" && p2 == "rock") {
    return "Player 2 won";
  } else if (p1 == "paper" && p2 == "scissors") {
    return "Player 2 won";
  } else if (p1 == p2) {
    return "Drawl";
  } else {
    return "Player 1 won";
  }
}

console.log(rps("scissors", "paper"));
console.log(rps("paper", "scissors"));
console.log(rps("paper", "rock"));
console.log(rps("paper", "paper"));

function calculateStudentGrade(StudentName, num1) {
  if (num1 < 0) {
    return "Error";
  } else if (num1 < 60) {
    return StudentName + " Grade = F";
  } else if (num1 < 70) {
    return StudentName + " Grade = D";
  } else if (num1 < 80) {
    return StudentName + " Grade = C";
  } else if (num1 < 90) {
    return StudentName + " Grade = B";
  } else if (num1 <= 100) {
    return StudentName + " Grade = A";
  }
}

console.log(calculateStudentGrade("Mark", 90));

// Schleifen

for (let i = 0; i < 7; i++) {
  console.log("Hello JS");
}

var i = 0;
while (i < 7) {
  i++;
  console.log("Hello JS");
}

// ---------

let noten = [70, 45, 89, 33, 25];
let summe = 0;

for (let i = 0; i < noten.length; i++) {
  summe += noten[i];
}
let durchschnitt = Math.floor(summe / noten.length);
console.log(durchschnitt);

function generateFibonacci(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
console.log(generateFibonacci(11));

let differentNumbers = [70, 45, 89, 33, 25, 10, 20];
let geradeZahlen = [];

function evenNumbers() {
  for (let i = 0; i < differentNumbers.length; i++) {
    if (differentNumbers[i] % 2 == 0) {
      geradeZahlen.push(differentNumbers[i]);
    }
  }
  return geradeZahlen;
}

console.log(evenNumbers());

function errorCodeAnswer(code) {
  if (code == 400) {
    console.log("Bad Request");
  } else if (code == 402) {
    console.log("Payment Required");
  } else if (code == 404) {
    console.log("Not Found");
  } else if (code == 409) {
    console.log("Conflict");
  } else if (code == 414) {
    console.log("URI Too Long");
  } else if (code == 425) {
    console.log("Too Early");
  } else if (code == 429) {
    console.log("Too Many Requests");
  } else {
    console.log("Läuft");
  }
}

errorCodeAnswer(429);

let errorCode = 429;

switch (errorCode) {
  case 400:
    document.write("Bad Request");
    break;
  case 402:
    document.write("Payment Required");
    break;
  case 404:
    document.write("Not Found");
    break;
  case 409:
    document.write("Conflict");
    break;
  case 414:
    document.write("URI Too Long");
    break;
  case 425:
    document.write("Too Early");
    break;
  case 429:
    document.write("Too Many Requests");
    break;

  default:
    document.write("Läuft");
}

let differentNumArray = [12, 55, 43, 10];

function multiplicateArray() {
  let sum = 1;
  for (let i = 0; i < differentNumArray.length; i++) {
    sum *= differentNumArray[i];
  }
  return sum;
}

console.log(multiplicateArray());

function gcd_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));

function minArray() {
  let minNumber = differentNumArray[0];
  for (let i = 0; i < differentNumArray.length; i++) {
    if (differentNumArray[i] < minNumber) {
      minNumber = differentNumArray[i];
    }
  }
  return minNumber;
}
console.log(minArray());

function bubblesortArray(arr) {
  let temp = 0;
  for (let i = 0; i < differentNumArray.length; i++) {
    for (let j = 1; j < differentNumArray.length; j++) {
      if (differentNumArray[j - 1] > differentNumArray[i]) {
        temp = differentNumArray[j - 1];
        differentNumArray[j - 1] = differentNumArray[i];
        differentNumArray[i] = temp;
      }
    }
  }
  console.log(differentNumArray);
}
bubblesortArray();

// let differentNumArray = [12, 55, 43, 10];

let NumArray = [10, 3, 6, 8, 12, 3, 2, 15];
function searchSameNumber() {
  for (let i = 0; i < NumArray.length; i++) {
    for (let j = i + 1; j < NumArray.length; j++) {
      if (NumArray[j] === NumArray[i]) {
        console.log(NumArray[i] + "=" + NumArray[j]);
      }
    }
  }
}

searchSameNumber(NumArray);

let zahl = 5;
let speicher = 1;

for (let i = zahl; i > 1; i--) {
  speicher = speicher * i;
}

console.log(speicher);

let palindromName = "Anna";

for (let i = 0; i < palindromName.length / 2; i++) {
  if (palindromName[i] === palindromName[palindromName.length - i - 1]);
}

console.log(palindromName.length);

//
console.log("---------------------------------------------");

const obj = {
  firstName: "Max",
  lastName: "Mustermann",
  age: 30,
  listProperties() {
    const arrayOfKeys = Object.keys(this);
    arrayOfKeys.forEach((key) => console.log(key, typeof this[key]));
  },
};
console.log(obj);
console.log(obj.firstName);
console.log(obj["firstName"]);

obj.firstName = "Josef";
obj.lastName = "Mayer";
obj.hobbies = ["Golf", "Tennis", "Surfen"];
obj.hobbies.push("Tanzen");
obj.hobbies.shift();
delete obj.age;
console.log(obj.hasOwnProperty("age"));

// for in Schleife
for (let key in obj) {
  console.log(obj[key], typeof obj[key]);
}

function listProperties(object) {
  const arrayOfKeys = Object.keys(object);
  arrayOfKeys.forEach((key) => console.log(key, typeof object[key]));
}
listProperties(obj);

obj.listProperties(obj);
// const keys = Object.keys(obj);
// keys.forEach((key) => console.log(obj[key]));
console.log("---------------------------------------------");

// let kurstitel = "Web Developer";
// let kursbeschreibung = "adsfsgdf";
// let trainer = ["Daniel", "Martin"];
// let themengebiete = ["HTML", "CSS", "Javascript"];
// let studenten = ["Julian", "Marco", "Ebrahim"];

const digitalCampusKurs = {
  titel: "Web Developer",
  beschreibung: "adsfsgdf",
  trainer: ["Daniel", "Martin"],
  themengebiete: [
    { titel: "HTML", einheiten: 20, trainer: "Martin" },
    { titel: "CSS", einheiten: 30, trainer: "Daniel" },
    { titel: "Javascript", einheiten: 10000, trainer: "Martin" },
  ],
  studenten: ["Julian", "Marco", "Ebrahim", "Martin", "Pius"],
  enrollStudent() {
    let person = prompt("Please enter your name");
    if (person) {
      if (digitalCampusKurs.studenten.length <= 4) {
        this.studenten.push(person);
      } else alert("Zu viele Teilnehmer");
    } else alert("Bitte Name eingeben");
  },
  info() {
    console.log(this.titel, this.trainer, this.beschreibung);
  },
  addThemengebiet(titel, einheiten, trainer) {
    this.themengebiete.push({ titel, einheiten, trainer });
  },
};
console.log(digitalCampusKurs);
// function info(object) {
//   console.log(digitalCampusKurs.kurstitel);
//   console.log(object);
// }
// info(digitalCampusKurs);

// function enrollStudent(StudentName) {
//   digitalCampusKurs.studenten.push(StudentName);
// }
// enrollStudent("Regina");

digitalCampusKurs.info();
digitalCampusKurs.enrollStudent();
console.log(digitalCampusKurs);
digitalCampusKurs.addThemengebiet("SQL", 100, "josef");
console.log(digitalCampusKurs);
// Exercise 5
// function addThemengebiet(titel, einheiten, trainer) {
//   digitalCampusKurs.themengebiete.push({ titel, einheiten, trainer });
// }

// Exercise 6
function sumEinheiten() {
  let summe = 0;
  for (let i = 0; i < digitalCampusKurs.themengebiete.length; i++) {
    summe += digitalCampusKurs.themengebiete[i].einheiten;
  }
  return summe;
}
console.log("Einheiten Gesamt: " + sumEinheiten() + " Stunden");

// Exercise 7
console.log(digitalCampusKurs.studenten.length);
