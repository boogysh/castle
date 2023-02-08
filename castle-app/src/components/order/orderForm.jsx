import React from "react";
import { HashLink } from "react-router-hash-link";
//import Banner from "../../components/home/banner";

export default function OrderForm(props) {
  return (
    <section className="contact" id="contact">
      <h4>Valider votre commande...</h4>
      <div className="container-form">
        {/* <form method="post"> */}
        <form>
          {/* <div className="container_2_inputs"> */}
            <label htmlFor="prenom">Prénom</label>
            <div className="container_input_p">
              <input
                className="contact_input"
                //   onChange={(e) => matchFirstName(e)}
                onChange={props.matchFirstName}
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
                className="contact_input"
                onChange={props.matchLastName}
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
          {/* </div> */}
          <label htmlFor="lastName">Adresse</label>
          <div className="container_input_p">
            <input
              className="contact_input"
              onChange={props.matchAddress}
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
              className="contact_input"
              //   onChange={(e) => matchCity(e)}
              onChange={props.matchCity}
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
              className="contact_input"
              //   onChange={(e) => matchEmail(e)}
              onChange={props.matchEmail}
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
          <HashLink smooth to="/commande/confirmation">
            <button
              onClick={props.submit} //&& (() => resetInputs()) !!! contact empty
              className="orderForm_btn"
            >
              Valider
            </button>
          </HashLink>
        </form>
      </div>
    </section>
  );
}
