import React, { useState } from "react";

const plusminus = () => {
  const [state, setState] = useState(0);

  const addValue = () => {
    setState(state + 1);
  };

  const subValue = () => {
    setState(state - 1);
  };
  return (
    <div>
      <div className="container">
        <input
          type="number"
          value={state}
          className="plusminusInput"
          readOnly
        />
        <div>
          <button className="plusminusBtn" onClick={addValue}>
            +
          </button>
          <button className="plusminusBtn" onClick={subValue}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default plusminus;
