// Array Übungen

// Exercise1
// Array-Literal Schreibweise
let array = ["Hund", "Katze"];
// Constructor-Function
let array2 = new Array("Affe", "Maus");

// Exercise2
let todoList = ["Bad putzen", "Einkaufen"];

// Exercise3
todoList.push("Rasen mähen");

// Exercise4
todoList.unshift("Sport machen");
console.log(todoList);

// Exercise5
todoList.splice(2, 0, "Garage streichen", "Rollrasen verlegen", "Klo putzen");
console.log(todoList);

// Exercise6
todoList.pop();
console.log(todoList);

// Exercise7
todoList.shift();
console.log(todoList);

// Exercise8
todoList.splice(1, 2);
console.log(todoList);

// Exercise9
let todoList2 = todoList.slice(1, 3);
console.log(todoList2);

// Exercise10
let names = ["Klaus", "Xaver", "Peter", "Andreas"];

// Exercise11
names.reverse();
console.log(names);
let nameAsString = names.join();
console.log(nameAsString);
