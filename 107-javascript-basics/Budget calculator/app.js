const budgetBox = document.getElementById("budget-box");
const insertBudgetBtn = document.getElementById("insert-budget-btn");
const expenseBox = document.getElementById("expense-box");
const amountBox = document.getElementById("amount-box");
const insertExpensesBtn = document.getElementById("insert-expenses-btn");
const budgetOutput = document.getElementById("budget-output");
const totalExpensesOutput = document.getElementById("total-expenses-output");
const expensesListOutput = document.getElementById("expenses-list-output");
const remainingAmount = document.getElementById("remaining-amount");
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const deleteAllBtn = document.getElementById("delete-all-btn");
const colorpicker = document.getElementById("colorpicker");
const date = document.getElementById("date");

const regex = new RegExp("^[A-Z][a-z]*");
let budget = 0;
let expensesList = [];
let openBudget = 0;
let amount = parseInt(amountBox.value);

window.onload = function () {
  let expenses = localStorage.getItem("expenses");
  expensesList = JSON.parse(expenses) || [];
  budget = parseInt(localStorage.getItem("budget")) || 0;
  budgetOutput.innerText = budget + " €";
  sumExpenses();
  updateExpenseListOutput();
};

deleteAllBtn.addEventListener("click", () => {
  if (confirm("Wirklich alles löschen?") == true) {
    localStorage.clear();
    budget = 0;
    budgetOutput.innerText = budget + " €";
    expensesList = [];
    sumExpenses();
    updateExpenseListOutput();
  }
});

insertBudgetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (budgetBox.value == "") {
    budgetBox.style.borderColor = "red";
    showToastMessage("error", "Fehler", "Bitte ein Budget eingeben");
    return;
  }

  if (isNaN(budgetBox.value)) {
    budgetBox.style.borderColor = "red";
    showToastMessage("error", "Fehler", "Bitte eine Nummer eingeben");
    return;
  }

  if (parseInt(budgetBox.value) < 0) {
    budgetBox.style.borderColor = "red";
    showToastMessage("error", "Fehler", "Bitte eine positives Budget eingeben");
    return;
  }

  //no errors --> set budget
  budget = parseInt(budgetBox.value);
  localStorage.setItem("budget", budget);
  budgetOutput.innerText = budget + " €";
  budgetForm.reset();
  budgetBox.style.borderColor = "";
  showToastMessage("success", "Erfolgreich", "Budget wurde hinzugefügt");
  console.log(budget);
});

insertExpensesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(colorpicker.value);
  console.log(date.value);
  if (validateExpense() && validateAmount()) {
    expensesList.push({
      description: expenseBox.value,
      amount: amount,
      date: date.value,
      color: colorpicker.value,
    });

    sumExpenses();
    updateExpenseListOutput();
    expenseForm.reset();
    console.log(expensesList);
  }
});

function validateExpense() {
  if (!expenseBox.value.match(regex)) {
    expenseBox.style.borderColor = "red";
    showToastMessage("error", "Fehler", "Muss mit einem Großbuchstaben beginnen und darf keine Zahlen enthalten.");
    return false;
  } else {
    expenseBox.style.borderColor = "";
    return true;
  }
}

function validateAmount() {
  amount = parseInt(amountBox.value);
  if (isNaN(amount) === true && !amountBox.value >= 0) {
    amountBox.style.borderColor = "red";
    showToastMessage("error", "Fehler", "Enter falid number");
    return false;
  } else {
    showToastMessage("success", "Erfolgreich", "");
    amountBox.style.borderColor = "";
    return true;
  }
}

function sumExpenses() {
  let expenseSum = 0;
  for (let i = 0; i < expensesList.length; i++) {
    expenseSum += expensesList[i].amount;
    // console.log(expenseSum);
  }
  totalExpensesOutput.innerText = expenseSum + " €";
  openBudget = budget - expenseSum;
  remainingAmount.innerText = openBudget + " €";
  console.log("Budget " + budget + " - expenseSum " + expenseSum + " = openbudget", openBudget);
}

function updateExpenseListOutput() {
  styleRemainingAmount();

  localStorage.setItem("expenses", JSON.stringify(expensesList));
  expensesListOutput.innerHTML = "";

  expensesList.forEach((element) => {
    let listElement = document.createElement("li");
    listElement.style.background = element.color;
    listElement.innerText = element.description + ": " + element.amount + " € " + "am " + element.date;
    expensesListOutput.prepend(listElement);
    console.log(element);
  });
}

function styleRemainingAmount() {
  if (openBudget >= 0) {
    remainingAmount.style.color = "green";
  } else {
    remainingAmount.style.color = "red";
  }
}

/**
 ** Shows a custom toast message
 *
 * @param {String} type         available types: error, success, warning, info
 * @param {String} title        title to display
 * @param {String} message      Message to display [String]
 * @param {Number} duration     Display duration in milliseconds - default set to 2000sec
 *
 * @copyright Marco
 */

function showToastMessage(type, title, message, duration = 2000) {
  const toastContainer = document.querySelector(".toast-msg");
  toastContainer.classList.add(type, "visible");
  console.log((toastContainer.innerHTML = "<h4>" + title + "</h4><p>" + message + "</p>"));
  setTimeout(() => {
    toastContainer.innerHTML = "";
    toastContainer.classList.remove(type, "visible");
  }, duration);
}
