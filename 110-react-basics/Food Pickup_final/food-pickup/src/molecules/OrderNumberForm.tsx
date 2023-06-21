import { useState } from 'react';
import { FirebaseOrder, Order, OrderStatus } from '../model/order';
import Button from '../atoms/Button';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';
import { useFirebaseOrders } from '../utils/firebase-utils';

export interface OrderNumberFormProps {
  onEnteredOrderNumber: (orderNumber: FirebaseOrder) => void;
}

export function OrderNumberForm(props: OrderNumberFormProps) {
  const orders = useFirebaseOrders();

  const [enteredOrderNumber, setEnteredOrderNumber] = useState('');

  function validateOrderNumber(orderNumber: string) {
    if (!orderNumber) {
      throw new Error('Bitte geben Sie eine Bestellnummer ein.');
    }

    if (orderNumber.length > 4) {
      throw new Error('Bitte geben Sie eine maximal 4-stellige Bestellnummer ein.');
    }

    if (!orderNumber.match('^[0-9]*$')) {
      throw new Error('Es sind nur Zahlen von 0-9 erlaubt.');
    }

    if (
      orders.findIndex((existing) => existing.number === orderNumber && existing.status !== OrderStatus.PickedUp) > -1
    ) {
      throw new Error('Bestellnummer existiert bereits.');
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      validateOrderNumber(enteredOrderNumber);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      }
      return;
    }

    const order: FirebaseOrder = {
      id: enteredOrderNumber,
      number: enteredOrderNumber,
      status: OrderStatus.Preparing,
      createdAt: new Date().toISOString(),
    };

    props.onEnteredOrderNumber(order);
    setEnteredOrderNumber('');
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <Label value="Bestellnummer:"></Label>
      <InputField
        id="order-number"
        type="text"
        name="orderNumber"
        placeholder="Bestellnummer eingeben"
        value={enteredOrderNumber}
        onChange={(e) => setEnteredOrderNumber(e.target.value)}
      ></InputField>
      <Button value="Bestätigen" type="submit"></Button>
    </form>
  );
}
