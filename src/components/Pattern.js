import React from "react";
import { toPersianDigit } from "../components/toPersianDigit";

export const Pattern = ({ item, id, isSelected, onClick }) => {
  return (
    <div className={isSelected ? "back-white border-blue" : "back-white"} id={id} onClick={onClick} >
      <p style={{ margin: "1%" }}>{item.name}</p>
      {id === 3 ? (
        <p className="border">شاخص های مدنظر</p>
      ) : (
        <>
          <p className="border">{`میانگین معدل: ${toPersianDigit(item.score)}`}</p>
          <p className="border"> {`انضباط: ${toPersianDigit(item.disipline)}`}</p>
        </>
      )}
      {id === 1 || id === 2 ? (
        <p className="border">{`نمرات تخصصی: ${toPersianDigit(item.importance)}`}</p>
      ) : null}
    </div>
  );
};

//  <p className={switch(id){
//           case 0: return "border green";
//           case 1: return "border naranji";
//           case 2: return "border zard";
//           case 3: return "border red";
//         }}
//         >شاخص های مدنظر</p>