import React from "react";
import iconChateau from "../../assets/icons/chateau_f3.png";

export default function Banner() {
  return (
    <header id="header">
      <div className="bg-header"></div>
      <div className="titre">
        <img src={iconChateau} alt="icon chateau" />
        <h1 className="banner_h1">Chateau de Fontainebleau</h1>
      </div>
      
      <h2>Petit guide d'un bellifontain pour faciliter votre visite</h2>
      <div className="banner_solde">
        <h3>-5%</h3>
        <h4>CODE5</h4>
      </div>
      <p>Buga Victor</p>
    </header>
  );
}


