import React from "react";
import "./headerBurger.css";

export default function HeaderBurger(props) {
  return (
    <button
      className={props.animation ? "menu_toggle menu_anim" : "menu_toggle"}
      onClick={props.toggle}
    >
      <div className="burger_container">
        <div className="burger_element"></div>
        <div className="burger_element"></div>
        <div className="burger_element"></div>
      </div>
    </button>
  );
}
