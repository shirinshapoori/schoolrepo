import React, { useEffect, useState } from "react";
import CountBox from "../components/CountBox";
import { toPersianDigit } from "../components/toPersianDigit";
import { addClassReq } from "../api/classService";

function CountBoxPage({ relId }) {
  const [editOn, setEditOn] = useState(false);
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({
    name: "",
    min: 0,
    max: 0,
    editable: false,
  });

  function handleAdd() {
    setClasses([...classes, newClass]);
    setNewClass({ name: "", min: 0, max: 0, editable: false });
    addClassReq("کلاس", newClass.min, newClass.max, relId).then((res) => {
      if (res.isSuccess) {
        setClasses([...classes, newClass]);
        setNewClass({ min: 0, max: 0, editable: false });
      } else {
        console.log(res);
      }
    });
  }

  function handleDlt() {
    if (classes.length === 1) return;
    setClasses(classes.slice(0, classes.length - 1));
  }

  function handleEdit() {}

  return (
    <div
      className="back-blue"
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <CountBox onAdd={handleAdd} onDlt={handleDlt} num={1}/> */}
      {classes.map((item, index) => (
        <div
          className="back-rectangle-white"
          style={{ padding: "1% 2% 1.5% 2%" }}
        >
          <div className="count-item" onClick={handleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1472ff"
                d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
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
            value={item.min}
            onChange={(e) =>
              setNewClass({ ...newClass, min: parseInt(e.target.value) })
            }
          ></input>
          <input
            className="input-max"
            placeholder="حداکثر"
            value={item.max}
            onChange={(e) =>
              setNewClass({ ...newClass, max: parseInt(e.target.value) })
            }
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
        >{`کلاس ${toPersianDigit(classes.length + 1)}`}</p>
        <input
          className="input-min"
          placeholder="حداقل"
          value={newClass.min}
          onChange={(e) =>
            setNewClass({ ...newClass, min: parseInt(e.target.value) })
          }
        ></input>
        <input
          className="input-max"
          placeholder="حداکثر"
          value={newClass.max}
          onChange={(e) =>
            setNewClass({ ...newClass, max: parseInt(e.target.value) })
          }
        ></input>
      </div>
    </div>
  );
}

export default CountBoxPage;
