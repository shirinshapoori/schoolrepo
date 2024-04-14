import React, { useState } from "react";
import PatternBar from "./PatternBar";

const InfoCard = () => {
  const a = [{
      score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#1AC858",
    },
    { score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#1AC858",
    }];
  const b = [{
      score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#FE902A",
    },
    { score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#FE902A",
    }];
  const c = [{
      score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#E9B600",
    },
    { score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#E9B600",
    }];
  const d = [{
      score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#BE0000",
    },
    { score: "میانگین معدل",
      discipline: "انضباط",
      scientific: "نشان علمی",
      sport: "فعالیت ورزشی",
      students: "تعداد دانش آموزان",
      color: "#BE0000",
    }];
 const arr = [a , b , c , d];
  const [patternSelect, SetPatternSelect] = useState(-1);
  
  if(patternSelect === 0) {
     return (<>
     {a.map((item) => (
        <div className="info-card">
          <p className="info-card-title">اطلاعات کلاس</p>
          <InfoCardList itemInfo={item} />
        </div>
      ))}
      </>)}
     if(patternSelect === 1) {
     return (<>
     {b.map((item) => (
        <div className="info-card">
          <p className="info-card-title">اطلاعات کلاس</p>
          <InfoCardList itemInfo={item} />
        </div>
      ))}
      </>)} 
       if(patternSelect === 2) {
     return (<>
     {c.map((item) => (
        <div className="info-card">
          <p className="info-card-title">اطلاعات کلاس</p>
          <InfoCardList itemInfo={item} />
        </div>
      ))}
      </>)} 
     if(patternSelect === 3) {
      return (<>
      {d.map((item) => (
        <div className="info-card">
          <p className="info-card-title">اطلاعات کلاس</p>
          <InfoCardList itemInfo={item} />
        </div>
      ))}
      </>)} 

  return (
    <div className="back-blue" style={{ justifyContent: "center" }}>
    
    {arr.map((item, index) => (
      <>
       <PatternBar item={item} p = {()=> SetPatternSelect(index)}/>
     </> ))}
    </div>
  );
};
export default InfoCard;

export const InfoCardList = ({ itemInfo}) => {
  return (
    <>
      <div className="line-before-text" style={{borderColor: itemInfo.color}}>{itemInfo.score} :</div>
      <div className="line-before-text" style={{borderColor: itemInfo.color}}>{itemInfo.discipline} :</div>
      <div className="line-before-text" style={{borderColor: itemInfo.color}}>{itemInfo.scientific} :</div>
      <div className="line-before-text" style={{borderColor: itemInfo.color}}>{itemInfo.sport} :</div>
      <div className="line-before-text" style={{borderColor: itemInfo.color}}>{itemInfo.students} :</div>
    </>
  );
};
