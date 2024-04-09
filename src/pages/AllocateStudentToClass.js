import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import ClassSetting from "../components/ClassSetting";
import { GetPhotos } from "../api/BookRequest";
import CountBoxPage from "./CountBoxPage";
import CountBox from "../components/CountBox";

const AllocateStudentToClass = () => {
  const items = [{name:"پایه هفتم" , img:"./book.png"},
  {name:"پایه هشتم" ,img:"./book.png"},
  {name:"پایه نهم" ,img:"./book.png"}];

  return (
    <>
      <div className="back-blue" style={{paddingBottom:"0%"}}>
        {items.map((item, index) => (
          <Item item={item} id={index} />
        ))}
      </div>
      <CountBoxPage />
      <ClassSetting  />
     
    </>
  );
};

export default AllocateStudentToClass;
