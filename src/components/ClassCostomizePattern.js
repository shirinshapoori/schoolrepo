import React, { useState } from "react";
import CountBox from "./CountBox";
import { toPersianDigit } from "./toPersianDigit";
import { type } from "@testing-library/user-event/dist/type";

const ClassCostomizePattern = () => {
  //arraye az dictionary ha ya object ha
    const [items, setItems] = useState([
    { name: "معدل:", type: "score", percent: 0 },
    { name: "انضباط:", type: "discipline", percent: 0 },
    { name: "نشان علمی (دارای رتبه برتر):", type: "scientific", percent: 0 },
    { name: "فعالیت ورزشی:", type: "sport", percent: 0 },
    { name: "نمرات دروس تخصصی:", type: "lessons", percent: 0 },
    { name: "فعالیت فرهنگی:", type: "culture", percent: 0 },
  ]);

  const handleAdd = (type) => {
    let newItems = items.map((item) => {
      if (item.type === type) {
        if (item.percent === 100) return item;
        let newItem = { ...item, percent: item.percent + 5 };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };
  
   const handleDlt = (type) => {
    let dltItems = items.map((item) => {
        if (item.type === type) {
            if( item.percent === 0) return item;
            let dltItem = {...item , percent: item.percent - 5 };
            return dltItem;
        }
        return item;
    });
    setItems(dltItems);
   };

  return (
    <div>
      <p>شاخص کلاس بندی</p>
      {items.map((item) => (
        <CountBox onAdd={handleAdd} onDlt={handleDlt} num={item.percent} item={item} />
      ))}
    </div>
  );
};

export default ClassCostomizePattern;

