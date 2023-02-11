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
          <p>{introduction.emblematique}</p>
          <p>{introduction.appartements}</p>
          <p>{introduction.vie_au_chateau}</p>
          <p className="source">Soure: www.fontainebleau-tourisme.com/</p>
        </article>
        <aside>
          <div>
            <h3>Les Origines</h3>
            <p>{introduction.origines}</p>
            <p>{introduction.saint_louis}</p>
            <p>{introduction.guerre_cent_ans}</p>
            <p>{introduction.francois_premier}</p>
            <p>{introduction.charles_ix}</p>
            <p className="source">
              Source: www.chateaudeharoue.fr/le-chateau-de-fontainebleau/
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
