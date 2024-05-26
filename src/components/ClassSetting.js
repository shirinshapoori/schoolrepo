import React, { useState, useEffect } from "react";
import { Pattern } from "./Pattern";
import ClassCustomizePattern from "./ClassCustomizePattern";
import { classificationPatterns } from "../api/classService";

const ClassSetting = ({relId}) => {
 const [patterns, setPatterns] = useState([{}]);

  const [select, setSelect] = useState(-1);
  const [custom, setCustom] = useState(false);

  useEffect(() => {
    classificationPatterns(relId).then((res) => {
      if (res.isSuccess) {
        setPatterns(res.data);
      }
    })
  }, []);

  return (
    <>
        <div className="back-blue">
          {custom ? (
            <ClassCustomizePattern relId={relId}/>
          ) : (
            <> 
            <p className="btn-class-lable">شاخص کلاس‌بندی</p>
              {patterns.map((item, index) => (
                <>
                  <Pattern
                    item={item}
                    id={index}
                    isSelected={select === index}
                    onClick={() =>index === 3 ? setCustom(true) : setSelect(index)}
                  />
                </>
              ))}
            </>
          )}
        </div>
      
    </>
  );
};
export default ClassSetting;
 
// const patterns = [
  //   { name: "الگو اول", score: 80, disipline: 20},
  //   { name: "الگو دوم", score: 70, disipline: 20, importance: 10 },
  //   { name: "الگو سوم", score: 60, disipline: 20, importance: 20},
  //   { name: "الگو سفارشی" },
  // ];