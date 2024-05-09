import React, { useEffect, useState } from "react";
import CountBox from "./CountBox";
import { toPersianDigit } from "./toPersianDigit";
import { type } from "@testing-library/user-event/dist/type";
import { getConstraints } from "../api/classService";

const ClassCustomizePattern = () => {
  //   const [items, setItems] = useState([
  //   { name: "معدل:", type: "score", percent: 0 },
  //   { name: "انضباط:", type: "discipline", percent: 0 },
  //   { name: "نشان علمی (دارای رتبه برتر):", type: "scientific", percent: 0 },
  //   { name: "فعالیت ورزشی:", type: "sport", percent: 0 },
  //   { name: "نمرات دروس تخصصی:", type: "lessons", percent: 0 },
  //   { name: "فعالیت فرهنگی:", type: "culture", percent: 0 },
  // ]);
  const [items, setItems] = useState([]);
  
  useEffect(()=>{
    getConstraints().then((res)=> {
      if (res.isSuccess) {
        setItems(res.data);
      }
    })
  }, []);

  const handleAdd = (id) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        if (item.percent === 100) return item;
        let newItem = { ...item, percent: item.percent + 5 };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };
  
   const handleDlt = (id) => {
    let dltItems = items.map((item) => {
        if (item.id === id) {
            if( item.percent === 0) return item;
            let dltItem = {...item , percent: item.percent - 5 };
            return dltItem;
        }
        return item;
    });
    setItems(dltItems);
   };

  return (
    <>
      <p className="btn-class-lable">کلاس‌بندی سفارشی</p>
      {items.map((item) => (
        <CountBox onAdd={handleAdd} onDlt={handleDlt} num={item.percent} item={item} />
      ))}
    </>
  );
};

export default ClassCustomizePattern;
