import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function ExpenseItem(props) {
  let month = months[props.date.getMonth()];

  return (
    <Card className="expense-item" key={props.id}>
      <div className="expense-box">
        <ExpenseDate day={props.date.getDate()} month={month} year={props.date.getFullYear()} />
        <h3>{props.title}</h3>
      </div>
      <span>{props.amount} €</span>
    </Card>
  );
}
