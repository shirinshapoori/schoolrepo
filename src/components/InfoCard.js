import React, { useState } from "react";
import PatternBar from "./PatternBar";
import ProcessButton from "./ProcessButton";

const InfoCard = () => {
  const [patternSelect, SetPatternSelect] = useState(0);
  //data : {patternId, pattern[{},{}, ...]} 
  const item = {
    score: "میانگین معدل",
    discipline: "انضباط",
    scientific: "نشان علمی",
    sport: "فعالیت ورزشی",
    students: "تعداد دانش آموزان",
    disciplineAvg: "20",
    scoreAvg: "18",
    scientificAvg: "17",
    sportAvg: "20",
    studentsAvg: "23",
  }; 
  function getPatternColor() {
    switch (patternSelect) {
      case 1:
        return "#FD6929";
      case 2:
        return "#E9B600";
      case 3:
        return "#BE0000";
      default:
        return "#1AC858";
    }
  }
  return (
    <div className="back-blue" style={{ justifyContent: "center" }}>
      <PatternBar
        onChange={SetPatternSelect}
        selectedPattern={patternSelect}
      />

      <div className="info-card">
        <p className="info-card-title">اطلاعات کلاس</p>
        <InfoCardList itemInfo={item} color={getPatternColor()} />
      </div>
      <ProcessButton />
    </div>
  );
};
export default InfoCard;

export const InfoCardList = ({ itemInfo, color }) => {
  return (
    <>
      <div className="line-before-text" style={{ borderColor: color , fontSize:"18px"}}>
        {itemInfo.score} : {itemInfo.scoreAvg}
      </div>
      <div className="line-before-text" style={{ borderColor: color , fontSize:"18px"}}>
        {itemInfo.discipline} : {itemInfo.disciplineAvg}
      </div>
      <div className="line-before-text" style={{ borderColor: color , fontSize:"18px"}}>
        {itemInfo.scientific} : {itemInfo.scientificAvg}
      </div>
      <div className="line-before-text" style={{ borderColor: color , fontSize:"18px"}}>
        {itemInfo.sport} : {itemInfo.sportAvg}
      </div>
      <div className="line-before-text" style={{ borderColor: color , fontSize:"18px"}}>
        {itemInfo.students} : {itemInfo.studentsAvg}
      </div>
    </>
  );
};
