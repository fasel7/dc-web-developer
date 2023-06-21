import { useState } from "react";
import "./App.css";
import MenuList from "./components/molecules/MenuList";
import Header from "./components/molecules/Header";
import { Card } from "./components/atoms/Card";
import CartModal from "./modal/CartModal";
import { CartItem } from "./data/CartItem";

const DUMMY_CARTITEM: any = [
  {
    id: "Menu 1",
    title: "Bärentatzen-menü1",
    price: 22.99,
    amount: 1,
  },
  {
    id: "Menu 2",
    title: "Bärentatzen-menü2",
    price: 22.99,
    amount: 1,
  },
];

function App(props: { onAddToCart: any }) {
  const [cartItem, setCartItem] = useState(DUMMY_CARTITEM);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function showCartItem() {
    setIsCartOpen(true);
  }

  function closeCartItem() {
    setIsCartOpen(false);
  }

  function addToCart(item: CartItem) {
    const newCartItem = [...cartItem, item];
    setCartItem(newCartItem);
  }

  return (
    <div className="App">
      <Header showCart={showCartItem}></Header>

      <Card className="card">
        <MenuList onAddToCart={addToCart}></MenuList>
      </Card>

      {isCartOpen && <CartModal cart={cartItem} closeCart={closeCartItem}></CartModal>}
    </div>
  );
}

export default App;
