import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import imgCB from "../../assets/cartes_bancaires/cb.jpg";
import imgCbMaster from "../../assets/cartes_bancaires/master.jpg";
import imgCbVisa from "../../assets/cartes_bancaires/visa.jpg";
import imgCbPayPal from "../../assets/cartes_bancaires/paypal.jpg";
import imgCbAmericanExpress from "../../assets/cartes_bancaires/american_express.jpg";
import img_search from "../../assets/icons/search.png";
import { HashLink } from "react-router-hash-link";
import { EMAIL } from "../order/data/data.adviceClient";

export default function AsideCart(props) {
  const [isEmailToFind, setEmailToFind] = useState("");
  console.log(isEmailToFind);
  const dispatch = useDispatch();

  const matchEmailToFind = (e) => {
    const val = e.target.value;
    const EMAIL_ErrMsg = document.getElementById("orderFindErrorMsg");
    const matched = val.match(
      /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
    );
    if (val.length === 0) {
      EMAIL_ErrMsg.innerHTML = "";
    } else if (val.length < 3 || val.length > 25) {
      EMAIL_ErrMsg.innerHTML = EMAIL.adviceLength;
      setEmailToFind("");
    } else if (matched) {
      EMAIL_ErrMsg.innerHTML = "";
      setEmailToFind(val);
      dispatch({
        type: "FIND_EMAIL",
        payload: val,
      });
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = EMAIL.adviceContent;
      setEmailToFind("");
    }
    dispatch({
      type: "FIND_EMAIL",
      payload: val,
    });
  };
  // const dispatchFindEmail= ()=>{
  //   dispatch({
  //     type: "FIND_EMAIL",
  //     payload: isEmailToFind,
  //   });
  //   // window.location.reload()
  // }
  const carts = useSelector((state) => state.cartReducer.carts);
  return (
    <aside id="total">
      <div className="total">
        <h4>Total</h4>
        <p className="total_p">{props.finalPrice} €/t.t.c.</p>
      </div>
      <hr />
      <div className="sous_total">
        <h5>Sous-total</h5>
        <p>{props.totalPrice} €/t.t.c.</p>
      </div>
      <div className="remise">
        <h5>Remise</h5>
        <p>{props.soldeTotal} €/t.t.c.</p>
      </div>
      <div className="bon_reduction_container">
        <div className="bon_reduction">
          <input
            onChange={props.solde}
            className="remise_input"
            type="text"
            name="remise"
            id="remise"
            placeholder="Code de reduction"
          />
          <button className="bon_reduction_btn" onClick={props.btnSolde}>
            Verifier
          </button>
        </div>
      </div>
      {carts.length > 0 && (
        <HashLink
          onClick={props.createOrderDetails}
          smooth
          to="/commande#orderForm"
          className="payment_link"
        >
          CONTINUER
        </HashLink>
      )}
      <h5>NOUS ACCEPTON:</h5>
      <div className="cartes_payments">
        <img src={imgCB} alt="carte_cb" />
        <img src={imgCbMaster} alt="mastercard" />
        <img src={imgCbVisa} alt="visa" />
        <img src={imgCbPayPal} alt="pay_pal" />
        <img src={imgCbAmericanExpress} alt="american_express" />
      </div>
      <div className="separe_aside"></div>
      {/* <OrderFind /> */}
      <div className="orderFind_container">
        <h5>Cherceher vos commandes:</h5>
        <div className="orderFind">
          <p className="orderFind_p">SAISIR VOTRE ADRESSE E-MAIL :</p>
          <p>Voir les commandes de: bugavictor86@gmail.com</p>
          <div className="orderFind_email_container">
            <input
              type="text"
              onChange={matchEmailToFind}
              className="orderFind_email"
              placeholder="Votre email"
            />
            <button onClick={props.openOrderList} className="orderFind_btn">
              <img
                src={img_search}
                alt="search"
                className="orderFind_btn_searchPng"
              />
            </button>
          </div>
          <p id="orderFindErrorMsg" className="error"></p>
        </div>
      </div>
    </aside>
  );
}
