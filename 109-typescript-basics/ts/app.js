var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button = document.getElementById("add");
button.addEventListener("click", add);
function add() {
    var sum = num1.value + num2.value;
    console.log(sum);
    console.log(typeof sum);
}
function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName, "!"));
}
var john = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
greet(john);
