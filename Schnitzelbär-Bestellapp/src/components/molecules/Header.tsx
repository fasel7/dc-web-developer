import React from "react";
import Logo from "../../assets/Logo.png";
import Cart from "../../assets/shopping_cart-basic.svg";
import HeaderImg from "../../assets/Header-picture.png";
import Button from "../atoms/Button";
import "./Header.css";
import { Card } from "../atoms/Card";

export default function Header(props: any) {
  console.log(props);
  function openCartHandler() {
    console.log(props);
  }

  return (
    <header>
      <div className="nav-bar">
        <img className="logo" src={Logo} />
        <button className="cart-btn" onClick={props.showCart}>
          <img className="cart-icon" src={Cart} alt="" />
          <span>Warenkorb</span>
          <div>0</div>
        </button>
      </div>
      <img className="header-img" src={HeaderImg} alt="Schnitzel" />
      <Card className="card header-card">
        <h1>Die Schnitzelbär Speisekarte</h1>
        <h5>KLAR, NORMALERWEISE STEHT DER BÄR FÜR GEMÜTLICHKEIT.</h5>
        <h5>
          DOCH BEI UNS MACHEN IHM DAMPF UNTERM FELL. DA DIR DAS WASSER BEREITS IM MUND ZERLÄUFT, VERSUCHEN WIR IMMER, SCHNELL ZU SEIN. WIR KENNEN
          NÄMLICH DIE GEFAHR DER UNTERSCHNITZELUNG
        </h5>
      </Card>
    </header>
  );
}
