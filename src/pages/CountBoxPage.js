import React, { useState } from "react";
import CountBox from "../components/CountBox";
import { toPersianDigit } from "../components/toPersianDigit";

function CountBoxPage() {
  const [classNum, setClassNum] = useState(1);
  const [classes, setClasses] = useState([{min: 0 , max:0 , editable: false}]);
  
  function handleAdd() {
    setClassNum((num) => num + 1);
    setClasses([...classes , {min: 0 , max:0 , editable:false}]);
    
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
         {/* <CountBox onAdd={handleAdd} onDlt={handleDlt} num={classNum}/> */}
         {classes.map((item, index) => (
    
        <div className="back-rectangle-white" style={{padding:"1% 2% 1.5% 2%"}}>

             <div className="count-item" onClick={handleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="#1472FF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M256 112v288m144-144H112"
            />
          </svg> 

        
        </div>
          <p style={{ margin: "0%", width:"30%", marginRight:"5%", paddingTop:"1.5%"}}>{`کلاس ${toPersianDigit(index+1)}`}</p>
          <input className="input-min" placeholder="حداقل"
          ></input>
          <input className="input-max" placeholder="حداکثر"></input>
       
       
          <div className="count-item" onClick={handleDlt}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 30 12"
          >
            <path
              fill="#1472FF"
              fill-rule="evenodd"
              d="M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
              clip-rule="evenodd"
            />
          </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountBoxPage;
