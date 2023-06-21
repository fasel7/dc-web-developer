import { useContext } from "react";
import { CartItem } from "../../../model/cart-item";
import { Meal } from "../../../model/meal";
import { CartContext } from "../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
  meal: Meal;
}

const MealItem = (props: MealItemProps) => {
  const { price, name, description, id } = props.meal;
  const priceFormatted = `$${price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    const item: CartItem = { id, name, price, amount };
    ctx.addToCart(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormatted}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
