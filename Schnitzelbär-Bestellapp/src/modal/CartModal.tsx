import React from "react";

import "./CartModal.css";

export default function CartModal(props: any) {
  console.log(props);
  return (
    <div className="cart-box">
      <ul>
        {props.cart.map((item: { id: string; title: string; price: number; amount: number }) => (
          <>
            <li className="cart-item" key={item.id}>
              <div className="menu-name">
                <h4>{item.title}</h4>
                <h6>{item.price}€</h6>
                <span>x{item.amount}</span>
              </div>
              <div>
                <button className="increase-amount">+</button>
                <button className="decrease-amount">-</button>
              </div>
            </li>
            <hr></hr>
          </>
        ))}
      </ul>
      <div className="total-amount">
        <h3>total amount</h3>
        <h3>34.55€</h3>
      </div>
      <div className="btn-box">
        <button className="close-btn" onClick={props.closeCart}>
          schließen
        </button>
        <button className="order-btn" onClick={props}>
          bestellen
        </button>
      </div>
    </div>
  );
}
