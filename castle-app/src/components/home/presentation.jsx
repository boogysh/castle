import React from "react";
import napoleon from "../../assets/images_site_original/napoleon.jpg";
import porteBois from "../../assets/images_site_original/porteBois.jpg";
import parc from "../../assets/images_site_original/ext.jpg";

export default function Presentation() {
  return (
    <section >
      <div className="container_presentaion">
        <div className="presentation">
          
          <h3 className="container_presentaion_h3">
            Un voyage au coeur de l'histoire
          </h3>

          <div className="napoleon">
            <div className="overflow_hidden">
              <img className="napoleon_img" src={napoleon} alt="napoleon" />
            </div>
            <h3 className="napoleon_h3 right350">
              À la rencontre de Napoléon Ier
            </h3>
          </div>
        </div>
        <div className="presentation">
          <div className="porteBois">
            <div className="overflow_hidden">
              <img
                className="porteBois_img"
                src={porteBois}
                alt="porte sculptée"
              />
            </div>
            <h3 className="napoleon_h3 left350">la demeure des rois</h3>
          </div>
          <div className="parc_ext">
            <div className="overflow_hidden">
              <img className="parc_ext_img" src={parc} alt="parc" />
            </div>
            <h3 className="napoleon_h3 left300">une source d'inspiration</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
