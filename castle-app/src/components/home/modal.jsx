import React, { useState } from "react";

export default function Modal(props) {
  const [show, setShow] = useState(true);
  
const closeModal = () => {
    setShow(false);
    window.location.reload();
  };

  return (
    <div className={show ? "modal_container" : "modal_container hidden"}>
      <div className="modal">
        <h2 className="modal_h2">{props.content}</h2>
        <button onClick={closeModal} className="modal_btn" id="modal_btn">
          x
        </button>
      </div>
    </div>
  );
}


