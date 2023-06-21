import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../store/cart-context";
import { CartItem } from "../../model/cart-item";

interface CartProps {
  cart: any;
  onClose: () => void;
}

const Cart = () => {
  const ctx = useContext(CartContext);
  console.log(ctx);
  const cartItems = (
    <ul>
      {ctx.items.map((item: CartItem) => (
        <div key={item.id}>
          <li className="cart-item">
            <div className="menu-name">
              <h4>{item.name}</h4>
              <h6>{item.price}€</h6>
              <span>x{item.amount}</span>
            </div>
            <div>
              <button className="increase-amount">+</button>
              <button className="decrease-amount">-</button>
            </div>
          </li>
          <hr></hr>
        </div>
      ))}
    </ul>
  );

  return (
    <Modal onClose={ctx.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onClose}>
          Schließen
        </button>
        <button className={classes.button}>Bestellen</button>
      </div>
    </Modal>
  );
};

export default Cart;
