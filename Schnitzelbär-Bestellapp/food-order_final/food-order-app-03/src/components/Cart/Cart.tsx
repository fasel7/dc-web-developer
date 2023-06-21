import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

interface CartProps {
  onClose: () => void;
}

const Cart = (props: CartProps) => {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => {
        const itemTotalPrice = item.amount * item.price;
        return (
          <li key={item.id} className={classes['cart-item']}>
            <span>{item.name}</span>
            <div className={classes['cart-item-content']}>
              <span>Anzahl: {item.amount}</span>
              <span>Preis: {itemTotalPrice.toFixed(2)}</span>
              <div>
                <button onClick={() => ctx.incrementAmount(item)}>+</button>
                <button onClick={() => ctx.decrementAmount(item)}>-</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const totalAmount = ctx.items.reduce((acc, curr) => acc + curr.price * curr.amount, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Schließen
        </button>
        <button className={classes.button}>Bestellen</button>
      </div>
    </Modal>
  );
};

export default Cart;
