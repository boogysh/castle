import React, { useState, useEffect } from "react";
import OrderList from "./orderList";
import { useSelector } from "react-redux";
import Banner from "../home/banner";
import img_search from "../../assets/icons/search.png";
//-------
import Error500 from "../errors/Error500";
import Loader from "../common/loader/loader";
//--------
import { nanoid } from "nanoid";
import { EMAIL } from "../order/data/data.adviceClient";
import { useDispatch } from "react-redux";
//import { UseFetch } from "../../hooks/useFetch";
//import env from "react-dotenv";
//import Loader from "../common/loader/loader";

export default function OrderPageConfirmation() {
  const dispatch = useDispatch();
  // const { data } = UseFetch(
  //   `https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`
  // );

  //---------------
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const url = `https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`;
  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  //--------------
  const { findEmail } = useSelector((state) => state.cartReducer);
  // const [show, setShow] = useState(false);
  console.log("data:", data);

  //---------------------------------------------

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

  //----------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const closeOrderList = () => {
    setIsOpen(!isOpen);
  };
  const openOrderList = () => {
    setIsOpen(true);
  };
  // const redirectHome = () => {
  //   window.location.href = "/";
  // };

  if (error) {
    return <Error500 />;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <main id="orderPageConfirmation">
      <Banner />
      <div className="container_page container_page_OrderPageConfirmation">
        <div className="orderPageConfirmation_content">
          {data
            .map((order) => {
              return (
                <h1 key={nanoid()} className="orderPageConfirmation_h1">
                  Commande validée! Votre numéro de commande: {order._id}
                </h1>
              );
            })
            .slice(0, 1)}

          <div>
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
                  <button onClick={openOrderList} className="orderFind_btn">
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
          </div>

          {isOpen && (
            <OrderList
              email={findEmail}
              closeOrderList={closeOrderList}
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </main>
  );
}
