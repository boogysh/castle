import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import HeaderBurger from "../../components/common/header-burger/HeaderBurger";
import tickets from "../../assets/icons/tickets.png";

import "../../style/style.css";

export default function Header() {
  const dataCart = useSelector((state) => state.cartReducer.carts);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let quantity = 0;
    dataCart.map((e) => {
      return (quantity = e.qty + quantity);
    });
    setQuantity(quantity);
  }, [dataCart]);

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setAnimated] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setAnimated(!isAnimated);
  };
  //-------------HIDE-NAVBAR-ON-SCROLL-----------------------------
  const [lastScroll, setLastScroll] = useState(0);
  const el_autohide = document.querySelector(".autohide");
  if (el_autohide) {
    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;
      if (scrollTop < lastScroll) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      setLastScroll(scrollTop);
    });
  }

  return (
    <div className="container_header">
      <nav id="nav" className="autohide">
        <HeaderBurger toggle={toggleNav} animation={isAnimated} />

        <div className={isOpen ? "menu active " : "menu"}>
          <HashLink smooth to="/#accueil" className="nav_item">
            Accueil
          </HashLink>
          <HashLink smooth to="/#appartements" className="nav_item">
            Les chambres
          </HashLink>
          <HashLink smooth to="/#parc" className="nav_item">
            Le parc
          </HashLink>
          <HashLink smooth to="/#tarifs" className="nav_item">
            Tarifs
          </HashLink>
          <HashLink smooth to="/#horaires" className="nav_item">
            Horaires
          </HashLink>
          <HashLink smooth to="/#contact" className="nav_item">
            Contact
          </HashLink>
          <HashLink
            smooth
            to="/panier#panier"
            className="nav_item shopping-cart-link"
          >
            <div className="shopping-cart">
              <img className="shopping_cart_img" src={tickets} alt="panier" />
              <h5 className="shopping-cart_h5">{quantity}</h5>
            </div>
          </HashLink>
        </div>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);
