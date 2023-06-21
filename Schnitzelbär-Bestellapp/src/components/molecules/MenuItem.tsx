import React from "react";
import "./MenuItem.css";
import MenuItemForm from "../atoms/MenuItemForm";
import { Menu } from "../../data/menus";
import { CartItem } from "../../data/CartItem";

export interface MenuItemProps {
  map(arg0: (item: { title: React.Key | null | undefined; sideDish: any; amount: any }) => JSX.Element): React.ReactNode;
  id: string;
  title: string;
  sideDish: string;
  price: number;
  onClick?: (id: string) => void;
  onAddToCart?: any;
}

export default function MenuItem(props: any) {
  function addToCart(cartItem: CartItem) {
    console.log(cartItem);
    props.onAddToCart(cartItem);
  }

  console.log(props.onAddToCart);
  return (
    <>
      <li className="menu-item" key={props.id}>
        <div className="menu-name">
          <h4>{props.title}</h4>
          <h6>{props.sideDish}</h6>
          <span>{props.price}€</span>
        </div>
        <MenuItemForm id={props.id} title={props.title} price={props.price} onAddToCart={addToCart}></MenuItemForm>
      </li>
      <hr></hr>
    </>
  );
}
