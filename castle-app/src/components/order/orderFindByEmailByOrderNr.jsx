import React, { useState } from "react";
import img_search from "../../assets/icons/search.png";
// import { useSelector } from "react-redux";
import { FIND_ORDER } from "./data/data.adviceClient";
import { useDispatch } from "react-redux";

export default function Orderfind_ByEmail_byOrderNr(props) {
  const dispatch = useDispatch();
  //   const { findEmail } = useSelector((state) => state.cartReducer);
  const [isEmailToFind, setEmailToFind] = useState("");
  console.log(isEmailToFind);
  const [isFindOrder, setFindOrder] = useState("");
  console.log("isFindOrder:", isFindOrder);

  //-------------------------------
  const matchOrderToFind = (e) => {
    const val = e.target.value;
    const FIND_ORDER_ErrMsg = document.getElementById("orderFindErrorMsg");

    const matched = val.match(/^[a-zA-Z0-9]{24}$/);
    const matched2 = val.match(
      /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
    );

    if (val.length === 0) {
      FIND_ORDER_ErrMsg.innerHTML = "";
      setFindOrder("");
      dispatch({
        type: "FIND_ORDER",
        payload: "",
      });
      dispatch({
        type: "FIND_EMAIL",
        payload: "",
      });
    } else if (val.length < 5 || val.length > 24) {
      FIND_ORDER_ErrMsg.innerHTML = FIND_ORDER.adviceContent;
      setFindOrder("");
      dispatch({
        type: "FIND_ORDER",
        payload: "",
      });
      dispatch({
        type: "FIND_EMAIL",
        payload: "",
      });
    } else if (matched) {
      FIND_ORDER_ErrMsg.innerHTML = "";
      setFindOrder(val);
      dispatch({
        type: "FIND_ORDER",
        payload: val,
      });
      //   setFIND_ORDERBorderRed(false);
    } else if (matched2) {
      FIND_ORDER_ErrMsg.innerHTML = "";
      setEmailToFind(val);
      dispatch({
        type: "FIND_EMAIL",
        payload: val,
      });
      //   setFIND_ORDERBorderRed(false);
    } else if (!matched) {
      FIND_ORDER_ErrMsg.innerHTML = FIND_ORDER.adviceContent;
      setFindOrder("");
      dispatch({
        type: "FIND_ORDER",
        payload: "",
      });
      dispatch({
        type: "FIND_EMAIL",
        payload: "",
      });
    }
  };
  return (
    <div className="orderFind_container">
      <h5 className="orderFind_h5">Chercher vos commandes:</h5>
      <div className="orderFind">
        <p className="orderFind_p">
          <strong>Saisir votre e-mail où le nr. de commande :</strong>
        </p>
        {/* <p>ADRESSE E-MAIL où NR DE COMMANDE:</p> */}
        <p>EX: bugavictor86@gmail.com</p>
        <p>EX: 63e61b3b69cbd5198b876894</p>
        <div className="orderFind_email_container">
          <input
            type="text"
            onChange={matchOrderToFind}
            className="orderFind_email"
            placeholder="Votre Nr. de commande"
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
  );
}
