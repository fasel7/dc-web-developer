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
