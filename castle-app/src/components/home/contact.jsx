import React, { useState } from "react";
//import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FN, LN, TEL, EMAIL, MSG } from "../order/data/data.adviceClient";
//import env from "react-dotenv";

export default function Contact(props) {
  const [isFN, setFN] = useState(null);
  const [isFNBorderRed, setFNBorderRed] = useState(false);
  const [isLN, setLN] = useState(null);
  const [isLNBorderRed, setLNBorderRed] = useState(false);
  const [isTel, setTel] = useState(null);
  const [isTelBorderRed, setTelBorderRed] = useState(false);
  const [isEmail, setEmail] = useState(null);
  const [isEmailBorderRed, setEmailBorderRed] = useState(false);
  const [isMsg, setMsg] = useState(null);
  const [isMsgBorderRed, setMsgBorderRed] = useState(false);

  const contactMsg = {
    firstName: `${isFN}`,
    lastName: `${isLN}`,
    tel: `${isTel}`,
    email: `${isEmail}`,
    messageTxt: `${isMsg}`,
  };
  console.log("contactMsg:", contactMsg);
  console.log("isTel:", isTel, isFN, isLN, isEmail);

  //----------------------------
  const matchFirstName = (e) => {
    const val = e.target.value;
    const FN_ErrMsg = document.getElementById("contactFirstNameErrorMsg");
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) FN_ErrMsg.innerHTML = "";
    else if (val.length < 3 || val.length > 25) {
      FN_ErrMsg.innerHTML = FN.adviceLength;
      setFN("");
    } else if (matched) {
      FN_ErrMsg.innerHTML = "";
      setFN(val);
      setFNBorderRed(false);
    } else if (!matched) {
      FN_ErrMsg.innerHTML = FN.adviceContent;
      setFN("");
    }
  };
  const matchLastName = (e) => {
    const val = e.target.value;
    const LN_ErrMsg = document.getElementById("contactLastNameErrorMsg");
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) LN_ErrMsg.innerHTML = "";
    else if (val.length < 3 || val.length > 25) {
      LN_ErrMsg.innerHTML = LN.adviceLength;
      setLN("");
    } else if (matched) {
      LN_ErrMsg.innerHTML = "";
      setLN(val);
      setLNBorderRed(false);
    } else if (!matched) {
      LN_ErrMsg.innerHTML = LN.adviceContent;
      setLN("");
    }
  };
  const matchEmail = (e) => {
    const val = e.target.value;
    const EMAIL_ErrMsg = document.getElementById("contactEmailErrorMsg");
    const matched = val.match(
      /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
    );
    if (val.length === 0) EMAIL_ErrMsg.innerHTML = "";
    else if (val.length < 3 || val.length > 25) {
      EMAIL_ErrMsg.innerHTML = EMAIL.adviceLength;
      setEmail("");
    } else if (matched) {
      EMAIL_ErrMsg.innerHTML = "";
      setEmail(val);
      setEmailBorderRed(false);
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = EMAIL.adviceContent;
      setEmail("");
    }
  };
  const matchTel = (e) => {
    const val = e.target.value;
    const TEL_ErrMsg = document.getElementById("contactTelErrorMsg");
    // const matched = val.match(/^[a-z A-Z]{3,25}$/);
    const matched = val.match(
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
    );
    // 0123456789
    // 01 23 45 67 89
    // 01.23.45.67.89
    // 0123 45.67.89
    // 0033 123-456-789
    // +33-1.23.45.67.89
    // +33 - 123 456 789
    // +33(0) 123 456 789
    // +33 (0)123 45 67 89
    // +33 (0)1 2345-6789
    // +33(0) - 123456789
    if (val.length === 0) TEL_ErrMsg.innerHTML = "";
    else if (val.length < 10 || val.length > 13) {
      TEL_ErrMsg.innerHTML = TEL.adviceLength;
      setTel("");
    } else if (matched) {
      TEL_ErrMsg.innerHTML = "";
      setTel(val);
      setTelBorderRed(false);
    } else if (!matched) {
      TEL_ErrMsg.innerHTML = TEL.adviceContent;
      setTel("");
    }
  };
  const matchMessage = (e) => {
    const val = e.target.value;
    const MSG_ErrMsg = document.getElementById("contactMessageErrorMsg");
    // const matched = val.match(/^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?| ]*$/);
    const matched = val.match(
      /^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]+$/
    );
    if (val.length === 0) MSG_ErrMsg.innerHTML = "";
    else if (val.length < 10) {
      MSG_ErrMsg.innerHTML = MSG.adviceLength;
      setMsg("");
    } else if (matched) {
      MSG_ErrMsg.innerHTML = "";
      setMsg(val);
      setMsgBorderRed(false);
    } else if (!matched) {
      MSG_ErrMsg.innerHTML = MSG.adviceContent;
      setMsg("");
    }
  };

  //-----------SET BORDER RED-----------------
  const borderRed = () => {
    !isFN && setFNBorderRed(true);
    !isLN && setLNBorderRed(true);
    !isTel && setTelBorderRed(true);
    !isEmail && setEmailBorderRed(true);
    !isMsg && setMsgBorderRed(true);
  };
  //-----------MESSAGE-POST-----------------------------
  const messagePost = () => {
    // const urlMsgPost =
    //   "https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/messages";
    if (isFN && isLN && isEmail && isTel && isMsg) {
      //fetch("http://localhost:4000/api/messages/", {
     
      // fetch(`${env.API_URL_MSG}`, {
      fetch(`https://castle-nmy1u5b1u-boogysh.vercel.app/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactMsg),
      });
      props.msgConfirm();
    }else{
      borderRed()
    }
    
    // window.location.href("/");
  };
 

  //-----------------------------
  return (
    <section className="contact" id="contact">
      <h4>Contactez nous...</h4>
      <div className="container-form">
        <form >
          <div className="FN_and_LN">
            <label htmlFor="prenom">Prénom</label>

            <div className="container_input_p">
              <input
                onChange={matchFirstName}
                // className="contact_input"
                className={
                  isFNBorderRed ? "contact_input borderRed" : "contact_input "
                }
                type="text"
                name="prenom"
                placeholder="Prénom"
                id="prenom"
                required
              />
              <span role="img" aria-label="star" className="star">
                ☆
              </span>
            </div>
            <p id="contactFirstNameErrorMsg" className="error"></p>
            <label htmlFor="nom">Nom</label>
            <div className="container_input_p">
              <input
                onChange={matchLastName}
                // className="contact_input"
                className={
                  isLNBorderRed ? "contact_input borderRed" : "contact_input "
                }
                type="text"
                placeholder="Nom"
                name="nom"
                id="nom"
                required
              />
              <span role="img" aria-label="star" className="star">
                ☆
              </span>
            </div>
            <p id="contactLastNameErrorMsg" className="error"></p>
          </div>
          <label htmlFor="email">Email</label>
          <div className="container_input_p">
            <input
              onChange={matchEmail}
              // className="contact_input"
              className={
                isEmailBorderRed ? "contact_input borderRed" : "contact_input "
              }
              type="email"
              placeholder="Email"
              // name="email"
              id="email"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="contactEmailErrorMsg" className="error"></p>
          <label htmlFor="tel">Téléphone:</label>
          <div className="container_input_p">
            <input
              onChange={matchTel}
              // className="contact_input"
              className={
                isTelBorderRed ? "contact_input borderRed" : "contact_input "
              }
              type="tel"
              placeholder="Telephone"
              name="tel"
              id="tel"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="contactTelErrorMsg" className="error"></p>
          <div className="container_input_p">
            <textarea
              id="txt"
              onChange={matchMessage}
              placeholder="Votre message"
              required
              // className="contact_input"
              className={
                isMsgBorderRed ? "contact_input borderRed" : "contact_input "
              }
            ></textarea>
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="contactMessageErrorMsg" className="error"></p>
          <p className="p_star">
            Les éléments avec "{" "}
            <span className="star_2" role="img" aria-label="star">
              ☆
            </span>{" "}
            " sont obligatoires à remplir.
          </p>
          <Link to="/">
            <button  className="contact_btn"
            onClick={messagePost}>Envoyer</button>
          </Link>
        </form>
      </div>
    </section>
  );
}
