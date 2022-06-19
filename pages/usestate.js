import React, { useState } from "react";
import $ from "jquery";

const usestate = () => {
  const [state, setState] = useState();

  const toggle = () => {
    $(".div").slideToggle();
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 id="toggle" style={{ cursor: "pointer" }} onClick={toggle}>
            Toggle
          </h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            eligendi voluptas id aspernatur dolores, animi doloremque
            reprehenderit debitis nobis numquam aperiam libero, ad excepturi
            non. Quia ipsa sit modi cupiditate corrupti ab eveniet eligendi.
          </p>
          <div className="div" style={{ display: "none" }}>
            <h4>Title</h4>
            <p>content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default usestate;
