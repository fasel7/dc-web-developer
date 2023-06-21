import { createContext } from 'react';
import { CartItem } from '../../model/cart-item';

type CartContextData = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementAmount: (item: CartItem) => void;
  decrementAmount: (item: CartItem) => void;
};

export const CartContext = createContext<CartContextData>({
  items: [],
  addToCart: () => {},
  incrementAmount: () => {},
  decrementAmount: () => {},
});
