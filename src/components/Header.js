import React, { Fragment } from "react";

import headerImg from "../assets/header-img.jpg";
import classes from "../styles/Header.module.css";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Kory's Restaurant</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="Kory's Restaurant Burgers" />
      </div>
    </Fragment>
  );
}

export default Header;
