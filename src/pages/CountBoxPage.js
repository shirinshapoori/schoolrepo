import React, { useState } from "react";
import CountBox from "../components/CountBox";
import MinMaxInput from "../components/MinMaxInput";

function CountBoxPage() {
  const [classNum, setClassNum] = useState(1);

  const [clickOnAdd,setClickOnAdd] = useState(false);

  function handleAdd() {
    setClassNum((num) => num + 1);
    setClickOnAdd(clickOnAdd);
  }

  function handleDlt(){
    setClassNum((num)=> num - 1);
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
      <CountBox onAdd={handleAdd} num={classNum} onDlt={handleDlt}/>
      
      <div className="back-rectangle-white">
        <p style={{margin:"0%"}}>{`کلاس ${classNum}`}</p>
        <input style={{width:"20%",height:"20%", marginRight:"30%",marginTop:"2%"}}></input>
        <input style={{width:"20%",height:"20%" , marginRight:"5%",marginTop:"2%"}}></input>
      </div>
    </div>
  );
}

export default CountBoxPage;
