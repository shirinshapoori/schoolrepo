import React, { useState } from "react";
import PatternBar from "./PatternBar";
import ProcessButton from "./ProcessButton";

const InfoCard = () => {
  const [patternSelect, SetPatternSelect] = useState(0);
  const item = {
    score: "میانگین معدل",
    discipline: "انضباط",
    scientific: "نشان علمی",
    sport: "فعالیت ورزشی",
    students: "تعداد دانش آموزان",
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
      <div className="line-before-text" style={{ borderColor: color }}>
        {itemInfo.score} :
      </div>
      <div className="line-before-text" style={{ borderColor: color }}>
        {itemInfo.discipline} :
      </div>
      <div className="line-before-text" style={{ borderColor: color }}>
        {itemInfo.scientific} :
      </div>
      <div className="line-before-text" style={{ borderColor: color }}>
        {itemInfo.sport} :
      </div>
      <div className="line-before-text" style={{ borderColor: color }}>
        {itemInfo.students} :
      </div>
    </>
  );
};
