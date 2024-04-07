import React, { useState } from "react";
import CountBox from "../components/CountBox";
import { toPersianDigit } from "../components/toPersianDigit";

function CountBoxPage() {
  const [classNum, setClassNum] = useState(1);
  const [classes, setClasses] = useState([{min: 0 , max:0}]);

  function handleAdd() {
    setClassNum((num) => num + 1);
    setClasses([...classes , {min: 0 , max:0}]);
  }

  function handleDlt() {
    if(classNum === 1) return
    setClassNum((num) => num - 1);
    setClasses(classes.slice(0 , classes.length - 1))
  }

  return (
    <div
      className="back-blue"
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CountBox onAdd={handleAdd} num={classNum} onDlt={handleDlt} />

      {classes.map((item, index) => (
        <div className="back-rectangle-white">
          <p style={{ margin: "0%" }}>{`کلاس ${toPersianDigit(index+1)}`}</p>
          <input className="input-min" placeholder="حداقل"
          ></input>
          <input className="input-max" placeholder="حداکثر"></input>
        </div>
      ))}
    </div>
  );
}

export default CountBoxPage;
