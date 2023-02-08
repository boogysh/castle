import React from "react";
import imgCorbeille from "../../assets/icons/corbeille.png";

export default function CartCard(props) {
  return (
    <div className="article_cart_container">
      <img className="article_cart_img" src={props.src} alt={`Carte ${props.title}`} />
      <div className="article_cart">
        <div className="article_cart_h3_and_price">
          <h3 className="article_cart_h3">{props.title}</h3>
          <span className="article_cart_span">{props.changePrice} €</span>
        </div>
        <p className="article_priceUnity">{props.priceUnite} € / unité </p>
        <div className="cart_card_qty_and_delete">
          <img
            onClick={props.deleteCard}
            id={`corbeille_${props.title}`}
            className="delete"

            src={imgCorbeille}
            alt="image_corbeille"
          />
          <div className="cart_card_qty">
            <button
              className={`btn_decr ${props.dsblDecr}`}
              onClick={props.decr}
            >
              -
            </button>
            <span className="card_qty">{props.changeQty}</span>
            <button className="btn_incr" onClick={props.incr}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
