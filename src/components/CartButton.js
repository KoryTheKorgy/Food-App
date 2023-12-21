import React from "react";

import CartIcon from "../assets/CartIcon";
import classes from "../styles/CartButton.module.css";

function CartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
