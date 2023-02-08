import React from "react";
import { HashLink } from "react-router-hash-link";
//import { ADD } from "../../redux/action";
import { useDispatch } from "react-redux";
import { UseFetch } from "../../hooks/useFetch";
import Loader from "../common/loader/loader";
import Error500 from "../errors/Error500";
import { v4 as uuidv4 } from "uuid";

export default function Tarifs() {
  const { data, isLoading, error } = UseFetch(
    `https://boogysh.github.io/chateau-api/dataCartCard.json`
  );

  const dispatch = useDispatch();
  const addToCartFunc = (e) => {
    // dispatch(ADD(e));
    dispatch({
      type: "ADD_CART",
      payload: e,
    });
  };
  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    <section className="tarifs" id="tarifs">
      <h3>Nos tarifs...</h3>
      <div className="container-cartes">
        {data.map((items) => {
          return (
            <div className="cartes" id={uuidv4()} key={uuidv4()}>
              <h4>{items.title}</h4>
              <span className="price">{items.price}€</span>
              <ul>
                <li>
                  <span role="img" aria-label="v">
                    {items.li_1}
                  </span>
                  <p> Visite du château</p>
                </li>
                <li>
                  <span role="img" aria-label="x">
                    {items.li_2}
                  </span>
                  <p> Spectacle au château</p>
                </li>
                <li>
                  <span role="img" aria-label="x">
                    {items.li_3}
                  </span>
                  <p> Visite de la ville</p>
                </li>
                <li>
                  <span role="img" aria-label="x">
                    {items.li_4}
                  </span>
                  <p> Restaurant tipique d'exeption</p>
                </li>
                <li>
                  <span role="img" aria-label="x">
                    {items.li_5}
                  </span>
                  <p>Visite sur plusieurs jours</p>
                </li>
                <li>
                  <span role="img" aria-label="x">
                    {items.li_6}
                  </span>
                  {/* <p>Accès à des lieux interdits au public</p> */}
                  <p>Accès à des lieux exclusifs</p>
                </li>
              </ul>
              <button
                className="cartes_btn"
                onClick={() => addToCartFunc(items)}
              >
                Ajouter au panier
              </button>
            </div>
          );
        })}
      </div>
      <button className="btn_to_cart">
        <HashLink smooth to="/panier#panier" id="valide_panier">
          Voir le panier
        </HashLink>
      </button>
    </section>
  );
}
