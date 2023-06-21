import { createContext } from "react";
import { CartItem } from "../../model/cart-item";

type CartContextData = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  onClose: () => void;
};

export const CartContext = createContext<CartContextData>({
  items: [],
  addToCart: () => {},
  onClose: () => {},
});
