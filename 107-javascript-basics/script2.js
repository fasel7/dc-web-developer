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
