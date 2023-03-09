import Card from "../UI/Card";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  return (
    <Card className="expense-date">
      <h5>{props.month}</h5>
      <p>{props.year}</p>
      <h2>{props.day}</h2>
    </Card>
  );
}
