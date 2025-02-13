import React, { useState, useEffect } from "react";
import OrderList from "./orderList";
import { useSelector } from "react-redux";
import Banner from "../home/banner";
import Error500 from "../errors/Error500";
import Loader from "../common/loader/loader";
import { nanoid } from "nanoid";
import OrderFindByEmailByOrderNr from "./orderFindByEmailByOrderNr";
//import env from "react-dotenv";

export default function OrderPageConfirmation() {
  // const { data } = UseFetch(
  //   `https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`
  // );
  //---------------
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const url = `https://castle-637wiwwcy-boogyshs-projects.vercel.app/api/commandes`;
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
  const { findEmail, findOrder } = useSelector((state) => state.cartReducer);
  //----------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const closeOrderList = () => {
    setIsOpen(!isOpen);
  };
  const openOrderList = () => {
    setIsOpen(true);
  };

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
          <div className="orderList_wrapper">
            <OrderFindByEmailByOrderNr openOrderList={openOrderList} />
            {isOpen && (
              <OrderList
                email={findEmail}
                orderNr={findOrder}
                closeOrderList={closeOrderList}
                isOpen={isOpen}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
