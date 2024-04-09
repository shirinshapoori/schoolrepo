import React from "react";
import { toPersianDigit } from "../components/toPersianDigit";

function CountBox({ onAdd, num, onDlt, item}) {
  
  return (
    <>
      <div className="count">
        
         <p style={{ margin: "0%", fontSize: "20px",  width:"50%" }}>{item.name}</p>
                
        <div className="count-item-long" onClick={()=>onAdd(item.type)}>
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
        <p style={{ margin: "0%", fontSize: "22px", width:"10%", textAlign:"center" }}>٪  {`${toPersianDigit(num)}`}</p>
     
        <div className="count-item-long" onClick={() => onDlt(item.type)}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="12px" height="12px" viewBox="0 0 14 14">
          <path fill="none" stroke="#1472ff" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M.5 7h13"
          />
          </svg>
         </div>
        </div>
    </>
  );
}

export default CountBox;
