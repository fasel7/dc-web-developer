import { useState } from 'react';
import { CartItem } from '../../model/cart-item';
import { CartContext } from './cart-context';

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider(props: CartContextProviderProps) {
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

  const incrementAmount = (item: CartItem) => {
    item.amount++;
    setCartItems([...cartItems]);
  };

  const decrementAmount = (item: CartItem) => {
    if (item.amount === 1) {
      setCartItems((items) => items.filter((i) => i.id !== item.id));
      return;
    }

    item.amount--;
    setCartItems([...cartItems]);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart: addToCartHandler,
        incrementAmount,
        decrementAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
