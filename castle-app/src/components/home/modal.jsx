import React, { useState } from "react";

export default function Modal(props) {
  const [show, setShow] = useState(true);
  
const closeModal = () => {
    setShow(false);
    window.location.reload();
    // window.location.href = "/";
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

// import React, { useState } from "react";

// export default function modal() {
//   const [show, setShow] = useState(true);
//   const [url, setUrl] = useState("https://www.youtube.com/embed/8UHfxxTPgCc");

//   const closeModal = () => {
//     setShow(false);
//     setUrl(null);
//   };

//   return (
//     <div className={show ? "modal_container" : "modal_container hidden"}>
//       <div className="modal">
//         <iframe
//           id="video_chateau"
//           src={url}
//           title="chateau-de-fontainebleau"
//           allow="accelerometer; autoplay; encrypted-media; web-share; fullscreen;picture-in-picture; gyroscope;"
//           allowscriptaccess="always"
//           // autoPlay="play"
//         ></iframe>
//         <button onClick={closeModal} className="modal_btn" id="modal_btn">
//           x
//         </button>
//       </div>
//     </div>
//   );
// }
