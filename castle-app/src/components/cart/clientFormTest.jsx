import React, { useState } from "react";
import { FN, LN, ADDRESS, CITY, EMAIL } from "../order/data/data.adviceClient";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";

export default function ClientForm() {
  const [isFN, setFN] = useState("");
  const [isLN, setLN] = useState("");
  const [isAddress, setAddress] = useState("");
  const [isCity, setCity] = useState("");
  const [isEmail, setEmail] = useState("");
  const client = {
    firstName: `${isFN}`,
    lastName: `${isLN}`,
    address: `${isAddress}`,
    city: `${isCity}`,
    email: `${isEmail}`,
  };

  //--------------------------------------------
  const dispatch = useDispatch();

  const toOrderPage = (e) => {
    e.preventDefault(e);
    dispatch({
      type: "CLIENT_INFO",
      payload: client,
    });
  };
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
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = EMAIL.adviceContent;
      setEmail("");
    }
  };

  return (
    <section className="contact" id="contact">
      <h4>Valider votre commande...</h4>
      <div className="container-form">
        {/* <form method="post"> */}
        <form>
          <label htmlFor="prenom">Prénom</label>
          <div className="container_input_p">
            <input
              //onChange={(e) => matchFirstName(e) }
              onChange={(e) => matchFirstName(e)}
              // type="text"
              name="prenom"
              placeholder="Prénom"
              id="prenom"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="firstNameErrorMsg" className="error"></p>
          <label htmlFor="nom">Nom</label>
          <div className="container_input_p">
            <input
              onChange={(e) => matchLastName(e)}
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
          <p id="lastNameErrorMsg" className="error"></p>
          <label htmlFor="lastName">Adresse</label>
          <div className="container_input_p">
            <input
              onChange={(e) => matchAddress(e)}
              type="text"
              placeholder="Adresse"
              id="adress"
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="addressErrorMsg" className="error"></p>

          <label htmlFor="ville">Ville:</label>
          <div className="container_input_p">
            <input
              onChange={(e) => matchCity(e)}
              type="text"
              placeholder="Ville"
              id="city"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="cityErrorMsg" className="error"></p>

          <label htmlFor="email">Email:</label>
          <div className="container_input_p">
            <input
              onChange={(e) => matchEmail(e)}
              // type="email"
              placeholder="Email"
              id="email"
              required
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="emailErrorMsg" className="error"></p>

          <p className="p_star">
            Les éléments avec "{" "}
            <span className="star_2" role="img" aria-label="star">
              ☆
            </span>{" "}
            " sont obligatoires à remplir.
          </p>
          <HashLink smooth to="/commande#order">
            <button onClick={toOrderPage}>Valider</button>
          </HashLink>
        </form>
      </div>
    </section>
  );
}
