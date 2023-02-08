import React from "react";
import { appartements } from "./data/home";
import img1 from "../../assets/images_int/int_napoleon.jpg";
import img2 from "../../assets/images_int/int_napoleon_2.jpg";
import img3 from "../../assets/images_int/int_pape.jpg";

export default function Apparements() {
  return (
    <section id="appartements" className="appartements">
      <h2 id="appartements_h2">Les grands appartements</h2>
      <article className="article_content">
        <div className="article_txt">
          <h3 className="article_h3">Petite chambre à coucher de l'Empereur</h3>
          <p className="article_p">{appartements.chambreEmpreur}</p>
        </div>
        <a
          href={img1}
          className="article_a petite_chambre"
          aria-label="petite_chambre"
        >
          {""}
        </a>
      </article>
      {/* ------------- */}
      <article className="article_content column_reverse">
        <a
          href={img2}
          className="article_a chambre_a_coucher"
          aria-label="chambre_a_coucher"
        >
          {""}
        </a>
        <div className="article_txt">
          <h3 className="article_h3">Chambre à coucher de l'Empereur</h3>
          <p className="article_p">{appartements.chambre_coucher}</p>
        </div>
      </article>
      {/* --------------- */}
      <article className="article_content">
        <div className="article_txt">
          <h3 className="article_h3">L'appartement du pape</h3>
          <p className="article_p">{appartements.chambre_pape}</p>
        </div>
        <a
          href={img3}
          className="article_a chambre_pape"
          aria-label="petite_chambre"
        >
          {""}
        </a>
      </article>
    </section>
  );
}
