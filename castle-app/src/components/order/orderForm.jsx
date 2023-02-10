import React from "react";

export default function OrderForm(props) {
  return (
    <section className="contact" id="contact">
      <h4>Valider votre commande...</h4>
      <div className="container-form">
        <form>
          <label htmlFor="prenom">Prénom</label>
          <div className="container_input_p">
            <input
              className={props.classFN}
              onChange={props.matchFirstName}
              name="prenom"
              placeholder="Prénom"
              id="prenom"
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="firstNameErrorMsg" className="error"></p>
          <label htmlFor="nom">Nom</label>
          <div className="container_input_p">
            <input
              className={props.classLN}
              onChange={props.matchLastName}
              type="text"
              placeholder="Nom"
              name="nom"
              id="nom"
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="lastNameErrorMsg" className="error"></p>

          <label htmlFor="lastName">Adresse</label>
          <div className="container_input_p">
            <input
              className={props.classAddress}
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
              className={props.classCity}
              onChange={props.matchCity}
              type="text"
              placeholder="Ville"
              id="city"
            />
            <span role="img" aria-label="star" className="star">
              ☆
            </span>
          </div>
          <p id="cityErrorMsg" className="error"></p>

          <label htmlFor="email">Email:</label>
          <div className="container_input_p">
            <input
              className={props.classEmail}
              onChange={props.matchEmail}
              placeholder="Email"
              id="email"
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
          <button
            onClick={props.submit}
            className="orderForm_btn"
            type="submit"
          >
            Valider
          </button>
        </form>
      </div>
    </section>
  );
}
