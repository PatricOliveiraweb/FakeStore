import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Facebook } from "../assets/faceIcon.svg";
import { ReactComponent as Instagram } from "../assets/instaIcon.svg";
import { ReactComponent as Logo } from "../assets/shop-solid.svg";
import { ReactComponent as Cart } from "../assets/cart-shopping-solid.svg";
import { ReactComponent as User } from "../assets/user-solid.svg";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext";
const Header = () => {
  const { count } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <nav className={styles.header__socialBar}>
        <ul>
          <li>
            <a href="" target="_blank">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Instagram />
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles.header__menuBar}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/cart">
              <Cart />
              {count ? <span>{count}</span> : ""}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
