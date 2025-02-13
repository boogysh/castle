import React, { useState, useEffect } from "react";
//import { UseFetch } from "../../hooks/useFetch";
import Error500 from "../errors/Error500";
import Loader from "../../components/common/loader/loader";
import { nanoid } from "nanoid";
import DropDownOrderList from "../../components/dropDown/dropDownOrderList";

export default function OrderList(props) {
  //const { data, isLoading, error} = UseFetch(`${env.REACT_APP_API_URL_ORDER}`);
  // const { data } = UseFetch(
  //   `https://castle-nmy1u5b1u-boogysh.vercel.app/api/commandes`
  // );
  // if (error) return <Error500 />;
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

  //---------------

  if (error) {
    return <Error500 />;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <section className="orderList">
      <h2 className="orderList_h2">La liste des vos commandes:</h2>
      <button onClick={props.closeOrderList} className="orderList_btn_close">
        x
      </button>
      {data.map((order) => {
        const EMAIL = props.email === order.clientInfo.email;
        const ORDERNR = props.orderNr === order._id;
        console.log("ORDERNR:", ORDERNR);
        console.log("order._id:", order._id);

        return (
          (EMAIL || ORDERNR) && (
            <div className="orderList_wrapper">
              <DropDownOrderList
                key={nanoid()}
                title={`Commande Nr: ${order._id} ${order.createdAt.slice(
                  0,
                  10
                )} ${``} ${order.createdAt.slice(11, 19)} `}
                content={
                  <div>
                    <h4
                      key={nanoid()}
                    >{`Email : ${order.clientInfo.email}`}</h4>
                    {order.orderInfo.map((item, index) => {
                      return (
                        <div key={nanoid()}>
                          <h4
                            key={nanoid()}
                          >{`Cartes : ${item.id} - ${item.qty}`}</h4>
                        </div>
                      );
                    })}
                    <h4
                      key={nanoid()}
                    >{`Prix total de la commande : ${order.totalPrice} €`}</h4>
                    <h4
                      key={nanoid()}
                    >{`Commande effectué le: ${order.createdAt.slice(
                      0,
                      10
                    )}  à : ${order.createdAt.slice(11, 19)}`}</h4>
                  </div>
                }
              />
            </div>
          )
        );
      })}
    </section>
  );
}
