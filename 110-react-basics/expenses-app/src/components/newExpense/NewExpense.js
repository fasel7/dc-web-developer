import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  function getData(data) {
    props.getData(data);
  }
  return (
    <Card className="expense-form-box">
      <ExpenseForm getData={getData} />
    </Card>
  );
}
