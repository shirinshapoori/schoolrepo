import React from "react";

const PatternBar = ({onChange, selectedPattern}) => {

  return (
    <div className="pattern-bar">
      <p className="info-card-title" style={{ paddingBottom: "8%" }}>
        {" "}
        الگو سفارشی
      </p>
      <div className="pattern-icon">
        <img
          src="./sabz.png"
          alt=""
          onClick={() => onChange(0)}
          className={selectedPattern === 0 ? "pattern-img-select" : "pattern-img"}
        />

        <img
          src="./naranji.png"
          alt=""
          onClick={() => onChange(1)}
          className={selectedPattern === 1 ? "pattern-img-select" : "pattern-img"}
        />

        <img
          src="./zard.png"
          alt=""
          onClick={() => onChange(2)}
          className={selectedPattern === 2 ? "pattern-img-select" : "pattern-img"}
        />

        <img
          src="./qermez.png"
          alt=""
          onClick={() => onChange(3)}
          className={selectedPattern === 3 ? "pattern-img-select" : "pattern-img"}
        />
      </div>
    </div>
  );
};
export default PatternBar;
