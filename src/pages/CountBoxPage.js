import React, { useEffect, useState } from "react";
import CountBox from "../components/CountBox";
import { toPersianDigit } from "../components/toPersianDigit";
import axios from "axios";

function CountBoxPage() {
  const [editOn, setEditOn] = useState(false);
  const [classNum, setClassNum] = useState(1);
  const [classes, setClasses] = useState([{ min: 0, max: 0, editable: false }]);
  

  function handleAdd() {
    setEditOn(true);
    setClassNum((num) => num + 1);
    setClasses([...classes, { min: 0, max: 0, editable: false }]);
  }

  function handleDlt() {
    if (classNum === 1) return;
    setClassNum((num) => num - 1);
    setClasses(classes.slice(0, classes.length - 1));
    useEffect = (() => {
      axios
      .delete("/1")
      .then(() => {
        setDlt(null)
      })
      .catch((error) => {
          console.log(error);
        });
         },
    []);
  } 

  const [dlt,setDlt] = useState(null);
  const [inputMax, setInputMax] = useState();
  const [inputMin, setInputMin] = useState();

  const handleInputMax = (e) => {
    setInputMax(e.target.value);
  };
  const handleInputMin = (e) => {
    setInputMin(e.target.value);
  };

  const url = "https://api.behpouyan.ir/Class";

  useEffect(() => {
      axios
        .post(url, {
          maxStuCount: inputMax,
          minStuCount: inputMin,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    []);
  
    if (editOn) { <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1472ff" d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg> 
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
        <div
          className="back-rectangle-white"
          style={{ padding: "1% 2% 1.5% 2%" }}
        >
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
          <p
            style={{
              margin: "0%",
              width: "30%",
              marginRight: "5%",
              paddingTop: "1.5%",
            }}
          >{`کلاس ${toPersianDigit(index + 1)}`}</p>
          <input
            className="input-min"
            placeholder="حداقل"
            value={inputMin}
            onChange={handleInputMin}
          ></input>
          <input
            className="input-max"
            placeholder="حداکثر"
            value={inputMax}
            onChange={handleInputMax}
          ></input>

          <div className="count-item" onClick={handleDlt}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#1472ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M.5 7h13"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountBoxPage;
