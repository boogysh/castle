import React from "react";

export default function Horaires() {
  return (
    <section id="horaires">
      <div className="bg_horaires"></div>
      <div className="horaire">
        <h2>Horaires d'ouverture</h2>
        <h3>Le château</h3>
        <p>
          Le château est ouvert tous les jours,{" "}
          <strong>
            sauf le mardi, le 1er janvier, le 1er mai et le 25 décembre.
          </strong>
        </p>
        <br />
        <p>
          <strong>D'octobre à mars:</strong> 9h30 à 17h (dernier accès à 16h15).
        </p>
        <br />
        <p>
          <strong>D'avril à septembre</strong> :9h30 à 18h (dernier accès à
          17h15).
        </p>
        <br />
        <h3>Le parc</h3>
        <p>
          Le parc et les jardins sont ouverts, dans les conditions habituelles,
          gratuitement.
        </p>
        <br />
        <h3>Plan d'acces:</h3>
      </div>
    </section>
  );
}
