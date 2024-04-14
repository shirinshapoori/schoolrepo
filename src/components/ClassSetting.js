import React, { useState } from "react";
import { Pattern } from "./Pattern";
import ClassCustomizePattern from "./ClassCustomizePattern";

const ClassSetting = () => {
  const patterns = [
    { name: "الگو اول", score: 80, disipline: 20},
    { name: "الگو دوم", score: 70, disipline: 20, importance: 10 },
    { name: "الگو سوم", score: 60, disipline: 20, importance: 20},
    { name: "الگو سفارشی" },
  ];
  const [select, setSelect] = useState(-1);
  const [custom, setCustom] = useState(false);
  return (
    <>
        <div className="back-blue">
          {custom ? (
            <ClassCustomizePattern />
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
