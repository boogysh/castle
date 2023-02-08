import React, { useEffect, useState } from "react";
import OrderList from "./orderList";
import { useSelector } from "react-redux";
import Banner from "../home/banner";
//import Error500 from "../errors/Error500";
//import Loader from "../common/loader/loader";
import { UseFetch } from "../../hooks/useFetch";
import { nanoid } from "nanoid";
import env from "react-dotenv";

export default function OrderPageConfirmation() {
  const { data } = UseFetch(`${env.API_URL_ORDER}`);
  const { email } = useSelector((state) => state.cartReducer);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [show]);
  //----------------------------------------------
  const [isClosed, setIsClosed] = useState(true);
  const closeOrderList = () => {
    setIsClosed(!isClosed);
  };
  const redirectHome = () => {
    window.location.href = "/";
  };

  // if (error) {
  //   return <Error500 />;
  // }

  return (
    show && (
      <main id="orderPageConfirmation">
        <Banner />
        <div className="container_page container_page_OrderPageConfirmation">
          <div className="orderPageConfirmation_content">
            {data
              .map((order, i) => {
                return (
                  <h1 key={nanoid()} className="orderPageConfirmation_h1">
                    Commande validée! Votre numéro de commande: {order._id}
                  </h1>
                );
              })
              .slice(0, 1)}
            <p className="orderPageConfirmation_content_p">
              Pour savoir plus sur votre commande garder ce numéro.
            </p>
            <p className="orderPageConfirmation_content_p">
              Vous pouvez, également chercher vos commandes avec votre email.
            </p>
          </div>

          <OrderList
            email={email}
            closeOrderList={closeOrderList && redirectHome}
            isClosed={isClosed}
          />
        </div>
      </main>
    )
  );
}

/* <div id="order">
        <h2 className="order_h2">Commande Nr: {id}</h2>
        <h3>Le prix de la commande: {totalPrice} €</h3>
        {orderDetails.map((item) => {
          return (
            <h3 key={uuidv4()}>
              Cartes {item.id}: {item.qty}
            </h3>
          );
        })}
      </div> */
