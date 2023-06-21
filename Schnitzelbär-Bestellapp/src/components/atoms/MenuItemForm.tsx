import { ChangeEventHandler, useState } from "react";
import Button from "./Button";
import "./MenuItemForm.css";
import { CartItem } from "../../data/CartItem";

interface MenuItemFormProps {
  id?: string;
  title?: string;
  price?: number;
  type?: string;
  className?: string;
  onAddToCart?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: (id: string) => void;
}

export function QuantityInputField(props: MenuItemFormProps) {
  const [enteredAmount, setEnteredAmount] = useState<number>(1);

  const type = props.type || "number";

  function amountChangeHandler(event: { target: { value: React.SetStateAction<any> } }) {
    setEnteredAmount(+event.target.value);
  }

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(props);
    console.log(enteredAmount);

    const mealToCart = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: enteredAmount,
    };
    props.onAddToCart(mealToCart);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="add-to-cart-box">
        <label>Menge</label>
        <input className="quantity" type={type} defaultValue="1" min="1" onChange={amountChangeHandler} />
        <br></br>
        <Button className="add-btn" type="submit" value="+ HINZUFÜGEN" />
      </div>
    </form>
  );
}

export default QuantityInputField;
