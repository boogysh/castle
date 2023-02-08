import React from "react";
import { useState } from "react";
import Banner from "./banner";
import Presentation from "./presentation";
import Introduction from "./introduction";
import Apparements from "./apparements";
import Parc from "./parc";
import Tarifs from "./tarifs";
import Horaires from "./horaires";
import Contact from "./contact";
import Modal from "./modal";
import "../../style/style.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const msgConfirm = () => {
    setShowModal(true);
  };
  return (
    <main id="accueil">
      <Banner />
      <div className="container_page">
        <Presentation />
        <Introduction />
        {/* <div id="parallax"></div> */}
        <Apparements />
        <Parc />
        <Tarifs />
        <Horaires />
        <Contact msgConfirm={msgConfirm} />
        
      </div>
      {showModal && <Modal content={"Votre message a bien été envoyé!"} />}
    </main>
  );
}
