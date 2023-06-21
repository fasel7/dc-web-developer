import { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function setExpenseHandler() {
    console.log(title, amount, date);

    const expenseData = { id: crypto.randomUUID(), title: title, date: new Date(date), amount: amount };

    setAmount("");
    setDate("");
    setTitle("");

    props.getData(expenseData);
  }
  return (
    <>
      <div className="form-input">
        <label htmlFor="date">Date</label>
        <input type="datetime-local" name="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
      </div>
      <div className="form-input">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div className="form-input">
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      </div>
      <button className="submit-btn" onClick={setExpenseHandler}>
        Add
      </button>
    </>
  );
}
