import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Warenkorb</span>
      <span className={classes.badge}>?</span>
    </button>
  );
};

export default HeaderCartButton;
