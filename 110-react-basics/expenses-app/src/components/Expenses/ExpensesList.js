import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  // console.log(props.newExpense);

  function getYear(year) {
    setFilteredYear(year);

    console.log(filteredYear);
  }
  const filteredResult = props.newExpense.filter((expense) => filteredYear === expense.date.getFullYear().toString());
  console.log(filteredResult);

  if (filteredYear === "All") {
    return (
      <>
        <Card className="expenses-container">
          <ExpensesFilter selectedYear={getYear} />
          {props.newExpense.map((data) => {
            return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}></ExpenseItem>;
          })}
        </Card>
      </>
    );
  }

  if (filteredResult.length === 0) {
    return (
      <>
        <Card className="expenses-container">
          <ExpensesFilter selectedYear={getYear} />
          <h2>No expenses found</h2>
        </Card>
      </>
    );
  }

  return (
    <>
      <Card className="expenses-container">
        <ExpensesFilter selectedYear={getYear} />
        {filteredResult.map((data) => {
          console.log(data.date.getFullYear());
          return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}></ExpenseItem>;
        })}
      </Card>
    </>
  );
}
