import React from "react";
//import env from "react-dotenv";

import { UseFetch } from "../../hooks/useFetch";
import Error500 from "../errors/Error500";
import Loader from "../../components/common/loader/loader";
//import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import DropDownOrderList from "../../components/dropDown/dropDownOrderList";

export default function OrderList(props) {
  //   const { email } = useSelector((state) => state.cartReducer);
  const { data, isLoading, error } = UseFetch(
    //`http://localhost:4000/api/commandes`
    "https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/commandes/"
    //`${env.API_HOST}/api/commandes`
  );

  if (error) return <Error500 />;

  return isLoading ? (
    <Loader />
  ) : (
    <section className={props.isClosed ? "orderList" : "orderList hidden"}>
      <h2 className="orderList_h2">La liste des vos commandes:</h2>
      <button onClick={props.closeOrderList} className="orderList_btn_close">
        x
      </button>

      {data.map((order) => {
        // const EMAIL = email === order.clientInfo.email;
        const EMAIL = props.email === order.clientInfo.email;

        return (
          EMAIL && (
            <div className="orderList_wrapper">
              <DropDownOrderList
                title={`Commande Nr: ${order._id} ${order.createdAt.slice(
                  0,
                  10
                )} ${``} ${order.createdAt.slice(11, 19)} `}
                content={
                  <div>
                    <h4 key={nanoid()}>{`Email : ${order.clientInfo.email}`}</h4>
                    {order.orderInfo.map((item, index) => {
                      return (
                        <div key={nanoid()}>
                          <h4 key={nanoid()}>{`Cartes : ${item.id} - ${item.qty}`}</h4>
                        </div>
                      );
                    })}
                    <h4 key={nanoid()}>{`Prix total de la commande : ${order.totalPrice} €`}</h4>
                    <h4 key={nanoid()}>{`Commande effectué le: ${order.createdAt.slice(
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
