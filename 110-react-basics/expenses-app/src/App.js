import "./App.css";
import NewExpense from "../src/components/newExpense/NewExpense";
import ExpensesList from "./components/Expenses/ExpensesList";
import { useState } from "react";
import { expenses } from "./data/expensesData";

function App() {
  const [expense, setExpense] = useState(expenses);

  function getData(data) {
    console.log(data);
    setExpense((prevValue) => {
      return [data, ...prevValue];
    });
  }
  return (
    <>
      <NewExpense getData={getData} />
      <ExpensesList newExpense={expense} />
    </>
  );
}

export default App;
