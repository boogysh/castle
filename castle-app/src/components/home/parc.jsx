import React from "react";
import img1 from "../../assets/images-ext/porte_doree.jpg";
import img2 from "../../assets/images-ext/ext_1.jpg";
import img3 from "../../assets/images-ext/ext_3.jpg";
import img4 from "../../assets/images-ext/canal.jpg";
import img5 from "../../assets/images-ext/parterre.jpg";
import img6 from "../../assets/images-ext/jardin_diane.jpg";
import { parc } from "./data/home";

export default function Parc() {
  return (
    <section id="parc">
      <h2 className="parc_h2">
        Decouvrez le parc du Château, 130 hectares de bonheur avec accès libre
      </h2>
      <div className="parallax_parc"></div>

      <article className="article_content">
        <div className="article_txt">
          <h3 className="article_h3">La porte Dorée</h3>
          <p className="article_p">{parc.porte_doree}</p>
        </div>
        <a
          href={img1}
          className="article_a la_porte_doree"
          aria-label="La porte Dorée"
        >
          {""}
        </a>
      </article>

      <article className="article_content column_reverse">
        <a
          href={img2}
          className="article_a etang_carpes"
          aria-label="L'étang aux Carpes"
        >
          {""}
        </a>
        <div className="article_txt">
          <h3 className="article_h3">L'étang aux Carpes</h3>
          <p className="article_p">{parc.etang_carpes}</p>
        </div>
      </article>

      <article className="article_content">
        <div className="article_txt">
          <h3 className="article_h3">La cour d'Honneur</h3>
          <p className="article_p">{parc.cour_dHonneur}</p>
        </div>
        <a
          href={img3}
          className="article_a cour_dHonneur"
          aria-label="La cour d'Honneur"
        >
          {""}
        </a>
      </article>

      <article className="article_content column_reverse">
        <a
          href={img4}
          className="article_a canal_du_parc"
          aria-label="Le canal du parc"
        >
          {""}
        </a>
        <div className="article_txt">
          <h3 className="article_h3">Le canal du parc</h3>
          <p className="article_p">{parc.canal_parc}</p>
        </div>
      </article>

      <article className="article_content">
        <div className="article_txt">
          <h3 className="article_h3">Le grand Parterre</h3>
          <p className="article_p">{parc.grand_parterre}</p>
        </div>
        <a
          href={img5}
          className="article_a parterre"
          aria-label="Le grand Parterre"
        >
          {""}
        </a>
      </article>

      <article className="article_content column_reverse">
        <a
          href={img6}
          className="article_a jardin_diane"
          aria-label="Le jardin de Diane"
        >
          {""}
        </a>
        <div className="article_txt">
          <h3 className="article_h3">Le jardin de Diane</h3>
          <p className="article_p">{parc.jardin_dianne}</p>
        </div>
      </article>
    </section>
  );
}
