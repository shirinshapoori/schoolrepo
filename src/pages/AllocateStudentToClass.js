import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import ClassSetting from "../components/ClassSetting";
import { GetPhotos } from "../api/BookRequest";
import CountBoxPage from "./CountBoxPage";
import CountBox from "../components/CountBox";
import ProcessButton from "../components/ProcessButton";
import axios from "axios";

const AllocateStudentToClass = () => {
  
  const url = "https://api.behpouyan.ir/GetGradeAndFields";
 
  const [grade, setGrade] = useState();

  useEffect(() => { 
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZGVudGlmaWVyIjoiMzAzNCIsIlJlbCI6IjIwMTAiLCJTY2hvb2wiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImV4cCI6MTcxMzY3NzE2MSwiaXNzIjoibG9hbGhvc3Q6NTIyNyIsImF1ZCI6ImxvY2FsaG9zdDo1MjI3In0.zgwyCbUPetx2n6tO9X2-4agfhKcU9foNiZmtIaucukM' };
    axios
    .get(url , {headers} )
    .then(res => setGrade(res.data))
    .catch(error => console.log(error))
  }, []);
  
  console.log(grade);

  const [select, setSelect] = useState(-1);
  return (
    <>
      <div className="back-blue" style={{ paddingBottom: "0%" }}>
        {grade.map((item, index) => (
          <Item
            item={item}
            id={index}
            isSelected={select === index}
            onClick={() => setSelect(index)}
          />
        ))}
      </div>
      <CountBoxPage />
      <ClassSetting />
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProcessButton processText={"پردازش"} />
      </div>
    </>
  );
};

export default AllocateStudentToClass;
