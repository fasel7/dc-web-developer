import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm = (props: MealItemFormProps) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef<HTMLInputElement>();

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!amountRef.current) {
      return;
    }

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Menge"
        input={{
          ref: amountRef,
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Hinzufügen</button>
      {!amountIsValid && <p>Bitte geben Sie eine gültige Anzahl ein (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
