import React, { useState } from "react";
import { FN, LN, ADDRESS, CITY, EMAIL } from "./data/data.adviceClient";
import OrderForm from "./orderForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "../home/banner";
//import env from "react-dotenv";

export default function OrderPage() {
  const { orderDetails, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();
  //----------------------------
  // add logic orderForm
  const [isFN, setFN] = useState("");
  const [isLN, setLN] = useState("");
  const [isAddress, setAddress] = useState("");
  const [isCity, setCity] = useState("");
  const [isEmail, setEmail] = useState("");

  const [isFNBorderRed, setFNBorderRed] = useState(false);
  const [isLNBorderRed, setLNBorderRed] = useState(false);
  const [isAddressBorderRed, setAddressBorderRed] = useState(false);
  const [isCityBorderRed, setCityBorderRed] = useState(false);
  const [isEmailBorderRed, setEmailBorderRed] = useState(false);

  const client = {
    firstName: `${isFN}`,
    lastName: `${isLN}`,
    address: `${isAddress}`,
    city: `${isCity}`,
    email: `${isEmail}`,
  };
  //----------------------------
  const matchFirstName = (e) => {
    const val = e.target.value;
    const FN_ErrMsg = document.getElementById("firstNameErrorMsg");
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
    const LN_ErrMsg = document.getElementById("lastNameErrorMsg");
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
  const matchAddress = (e) => {
    const val = e.target.value;
    const ADDRESS_ErrMsg = document.getElementById("addressErrorMsg");
    // const matched = val.match(/^[a-z A-Z]{3,25}$/);
    const matched = val.match(/^[0-9]{1,3}[a-z A-Z]{0,1} [a-z A-Z]{3,35}$/);
    if (val.length === 0) ADDRESS_ErrMsg.innerHTML = "";
    else if (val.length < 3 || val.length > 25) {
      ADDRESS_ErrMsg.innerHTML = ADDRESS.adviceContent;
      setAddress("");
    } else if (matched) {
      ADDRESS_ErrMsg.innerHTML = "";
      setAddress(val);
      setAddressBorderRed(false);
    } else if (!matched) {
      ADDRESS_ErrMsg.innerHTML = ADDRESS.adviceContent;
      setAddress("");
    }
  };
  const matchCity = (e) => {
    const val = e.target.value;
    const CITY_ErrMsg = document.getElementById("cityErrorMsg");
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) CITY_ErrMsg.innerHTML = "";
    else if (val.length < 3 || val.length > 25) {
      CITY_ErrMsg.innerHTML = CITY.adviceLength;
      setCity("");
    } else if (matched) {
      CITY_ErrMsg.innerHTML = "";
      setCity(val);
      setCityBorderRed(false);
    } else if (!matched) {
      CITY_ErrMsg.innerHTML = CITY.adviceContent;
      setCity("");
    }
  };
  const matchEmail = (e) => {
    const val = e.target.value;
    const EMAIL_ErrMsg = document.getElementById("emailErrorMsg");
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
  //-----------------------------

  const orderInfo = [];

  orderDetails.map((item) => {
    const orderInfoItem = {
      id: item.id,
      qty: item.qty,
    };
    return orderInfo.push(orderInfoItem);
  });

  // TO submit POST
  const order = {
    // id: nanoid(),
    clientInfo: client,
    orderInfo: orderInfo,
    totalPrice: totalPrice,
  };
  console.log(order);
  //-----------SET BORDER RED-----------------
  const borderRed = () => {
    !isFN && setFNBorderRed(true);
    !isLN && setLNBorderRed(true);
    !isAddress && setAddressBorderRed(true);
    !isCity && setCityBorderRed(true);
    !isEmail && setEmailBorderRed(true);
  };
  const allValues = isFN && isLN && isAddress && isCity && isEmail;
  const orderPost = (e) => {
    e.preventDefault();
    if (allValues) {
      // fetch(`${env.API_URL_ORDER}`, {
      fetch(`https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      dispatch({
        type: "EMAIL",
        payload: client.email,
      });
      dispatch({
        type: "CLEAN_CART",
        payload: [],
      });
      dispatch({
        type: "SOLDE",
        payload: 0,
      });
      const redirectOrderConfirmation = async () => {
        await fetch(
          `https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`
        );
        window.location.href = "/commande/confirmation";
      };
      redirectOrderConfirmation();
    } else {
      borderRed();
    }
  };

  return (
    <main id="orderPage">
      <Banner />
      <div className="container_page">
        <OrderForm
          id="orderForm"
          matchFirstName={matchFirstName}
          matchLastName={matchLastName}
          matchAddress={matchAddress}
          matchCity={matchCity}
          matchEmail={matchEmail}
          classFN={isFNBorderRed ? "contact_input borderRed" : "contact_input"}
          classLN={isLNBorderRed ? "contact_input borderRed" : "contact_input "}
          classAddress={
            isAddressBorderRed ? "contact_input borderRed" : "contact_input"
          }
          classCity={
            isCityBorderRed ? "contact_input borderRed" : "contact_input"
          }
          classEmail={
            isEmailBorderRed ? "contact_input borderRed" : "contact_input"
          }
          submit={(e) => orderPost(e)}
          
        />
      </div>
    </main>
  );
}
