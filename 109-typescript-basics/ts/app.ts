const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("add")!;
button.addEventListener("click", add);

function add() {
  let sum = num1.value + num2.value;
  console.log(sum);
  console.log(typeof sum);
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

greet(john);
