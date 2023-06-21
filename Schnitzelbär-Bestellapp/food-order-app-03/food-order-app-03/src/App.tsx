import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import { CartContext } from "./components/store/cart-context";
import { CartItem } from "./model/cart-item";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCartHandler = (item: CartItem) => {
    const newCartItems = [...cartItems];
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      const index = cartItems.indexOf(existingItem);
      newCartItems[index] = {
        id: existingItem.id,
        name: existingItem.name,
        price: existingItem.price,
        amount: existingItem.amount + item.amount,
      };
    } else {
      newCartItems.push(item);
    }

    setCartItems(newCartItems);
  };

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart: addToCartHandler,
        onClose: hideCartHandler,
      }}
    >
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />;
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartContext.Provider>
  );
};

export default App;
