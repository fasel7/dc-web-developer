import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { expenses } from "../../data/expensesData";
import Card from "../UI/Card";

export default function ExpensesList() {
  return (
    <Card className="expenses-container">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>;
      })}
    </Card>
  );
}
