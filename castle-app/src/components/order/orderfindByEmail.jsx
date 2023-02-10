import React,{useState} from "react";
import img_search from "../../assets/icons/search.png";
// import { useSelector } from "react-redux";
import { EMAIL } from "../order/data/data.adviceClient";
import { useDispatch } from "react-redux";

export default function OrderfindByEmail(props) {
    const dispatch = useDispatch();
//   const { findEmail } = useSelector((state) => state.cartReducer);
  const [isEmailToFind, setEmailToFind] = useState("");
  console.log(isEmailToFind);

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

//   const [isOpen, setIsOpen] = useState(false);
//   const closeOrderList = () => {
//     setIsOpen(!isOpen);
//   };
//   const openOrderList = () => {
//     setIsOpen(true);
//   };

  return (
    <div className="orderFind_container">
      <h5 className="orderFind_h5">Cherceher toutes vos commandes:</h5>
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
  );
}
