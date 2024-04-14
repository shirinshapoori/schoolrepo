import React, { useState } from "react";
import PatternBar from "./PatternBar";
import ProcessButton from "./ProcessButton";

const InfoCard = () => {  
  const [patternSelect, SetPatternSelect] = useState(-1);
  const item = {
      score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
    };
    return (
    <div className="back-blue" style={{ justifyContent: "center" }}>

      <PatternBar item={item}  onChangeMenu={() => SetPatternSelect(3)} />
      
      <div className="info-card">
        <p className="info-card-title">اطلاعات کلاس</p>
        <InfoCardList itemInfo={item} color={"#1AC858"} />
      </div>
     <ProcessButton />
    </div>
  );
};
export default InfoCard;

export const InfoCardList = ({ itemInfo , color}) => {
  return (
    <>
      <div className="line-before-text" style={{borderColor: color}}>{itemInfo.score} :</div>
      <div className="line-before-text" style={{borderColor: color}}>{itemInfo.discipline} :</div>
      <div className="line-before-text" style={{borderColor: color}}>{itemInfo.scientific} :</div>
      <div className="line-before-text" style={{borderColor: color}}>{itemInfo.sport} :</div>
      <div className="line-before-text" style={{borderColor: color}}>{itemInfo.students} :</div>
    </>
  );
};
