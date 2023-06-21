import { useState } from "react";
import NewOrderForm from "./NewOrderForm";

function NewOrder(props: any) {
  console.log(props);
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveOrderDataHandler = (enteredOrderData: string) => {
    setIsEditing(false);
  };

  return (
    <div className="new-order">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <NewOrderForm onSaveOrderNumber={saveOrderDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewOrder;
