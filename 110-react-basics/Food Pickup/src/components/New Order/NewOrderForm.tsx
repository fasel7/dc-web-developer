import { useState } from "react";

import "./NewOrderForm.css";

function NewOrderForm(props: { onSaveOrderNumber: any; onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
  console.log(props);
  const [enteredOrderNumber, setEnteredOrderNumber] = useState("");

  const orderNumberChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredOrderNumber(event.target.value);
  };

  const submitHandler = () => {
    const orderNumber = enteredOrderNumber;
    props.onSaveOrderNumber(orderNumber);
    setEnteredOrderNumber("");
  };

  return (
    <div className="new-order-form">
      <p>Bestellnummer:</p>
      <input type="text" value={enteredOrderNumber} placeholder="Bestellnummer eingeben" onChange={orderNumberChangeHandler} />
      <div>
        <button className="submit-btn" onClick={submitHandler}>
          Bestätigen
        </button>
        <button className="cancle-btn" onClick={props.onCancel}>
          Schließen
        </button>
      </div>
    </div>
  );
}

export default NewOrderForm;
