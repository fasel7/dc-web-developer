import React, { Children } from "react";
import "./MenuList.css";
import { MenuItemProps } from "./MenuItem";
import MenuItem from "./MenuItem";
import { menus } from "../../data/menus";
import { CartItem } from "../../data/CartItem";

interface MenuListProps {
  menus: MenuItemProps[];
  onAddToCart?: any;
}

export default function MenuList(props: any) {
  function addToCart(cartItem: CartItem) {
    console.log(cartItem);
    props.onAddToCart(cartItem);
  }

  return (
    <ul className="menu-list">
      {menus.map((item) => (
        <MenuItem key={item.id} id={item.id} title={item.title} sideDish={item.sideDish} price={item.price} onAddToCart={addToCart}></MenuItem>
      ))}
    </ul>
  );
}
