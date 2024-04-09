import React from "react";
import { toPersianDigit } from "../components/toPersianDigit";

function CountBox({ onAdd, num, onDlt, items}) {
  
  return (
    <>
      <div className="count">
        
         <p style={{ margin: "0%", fontSize: "20px",  width:"50%" }}>{items.name}</p>
                
        <div className="count-item-long" onClick={onAdd}>
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
        <p style={{ margin: "0%", fontSize: "22px" }}>٪  {`${toPersianDigit(num)}`}</p>
     
        <div className="count-item-long" onClick={onDlt}>
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
    </>
  );
}

export default CountBox;
