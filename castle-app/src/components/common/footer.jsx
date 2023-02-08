import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="footer_p">Projet d'apprentissage &copy;</p>
      <p className="footer_p">Source: https://www.chateaudefontainebleau.fr</p>
      <div className="footer_flex">
        <p className="footer_p">Site officiel du:</p>
        <a
          className="footer_a"
          target="blank"
          href="https://www.chateaudefontainebleau.fr/"
        >
          Chateau de Fontainebleau
        </a>
      </div>
    </footer>
  );
}
