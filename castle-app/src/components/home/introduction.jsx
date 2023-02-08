import React from "react";
import { introduction } from "./data/home";
export default function Accueil() {
  return (
    <section id="introduction">
      <h2>Le château de Fontainebleau</h2>
      <div id="article_accueil">
        <article>
          <h3>Le plus meublé des château royaux français</h3>
          <p>{introduction.le_plus_meuble}</p>
          <p>{introduction.patrimoine}</p>
          <br />
          <p>{introduction.emblematique}</p>
          <br />
          <p>{introduction.appartements}</p>
          <br />
          <p>{introduction.vie_au_chateau}</p>
          <br />
          <p className="source">Soure: www.fontainebleau-tourisme.com/</p>
        </article>
        <aside>
          <div>
            <h3>Les Origines</h3>
            <p>{introduction.origines}</p>
            <br />
            <p>{introduction.saint_louis}</p>
            <br />
            <p>{introduction.guerre_cent_ans}</p>
            <br />
            <p>{introduction.francois_premier}</p>
            <br />
            <p>{introduction.charles_ix}</p>
            <br />
            <p className="source">
              Source: www.chateaudeharoue.fr/le-chateau-de-fontainebleau/
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
