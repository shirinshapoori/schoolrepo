import React, { useState } from "react";
import Item from "../components/Item";
import ClassSetting from "../components/ClassSetting";
import { GetPhotos } from "../api/BookRequest";
import CountBoxPage from "./CountBoxPage";
import CountBox from "../components/CountBox";
import ProcessButton from "../components/ProcessButton";

const AllocateStudentToClass = () => {
  const items = [
    { name: "پایه هفتم", img: "./book.png" },
    { name: "پایه هشتم", img: "./book.png" },
    { name: "پایه نهم", img: "./book.png" },
  ];
  const[select, setSelect]=useState(-1);
  return (
    <>
      <div className="back-blue" style={{ paddingBottom: "0%" }}>
        {items.map((item, index) => (
          <Item item={item} id={index} isSelected={select===index} onClick={()=> setSelect(index)}/>
        ))}
      </div>
      <CountBoxPage />
      <ClassSetting />
      <div style={{display:"flex",alignItems:"center"}}>
      <ProcessButton processText={'پردازش'} /></div>
    </>
  );
};

export default AllocateStudentToClass;
