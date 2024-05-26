import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import ClassSetting from "../components/ClassSetting";
import CountBoxPage from "./CountBoxPage";
import CountBox from "../components/CountBox";
import ProcessButton from "../components/ProcessButton";
import axios from "axios";
import { getGradeAndFields } from "../api/classService";
import urls from "../api/urls";

const AllocateStudentToClass = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    getGradeAndFields().then((res) => {
      if (res.isSuccess) {
        setGrades(res.data);
      }
    });
  }, []);

  const [selectedRelId, setSelectedRelId] = useState(-1);

  return (
    <>
      <div className="back-blue" style={{ paddingBottom: "0%" }}>
        {grades.map((item, index) => (
          <Item
            item={item}
            id={index}
            isSelected={selectedRelId === item.relId}
            onClick={() => setSelectedRelId(item.relId)}
          />
        ))}
      </div>
      <CountBoxPage relId={grades.length && selectedRelId} />
      <ClassSetting relId={selectedRelId} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProcessButton processText={"پردازش"} relId={selectedRelId} />
      </div>
    </>
  );
};

export default AllocateStudentToClass;
