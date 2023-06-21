import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.items.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Warenkorb</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
