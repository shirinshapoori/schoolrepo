import React, { useState } from "react";
import SelectFilter from "./SelectFilter";

const ClassFilter = () => {
  const [items , setItems] = useState([
    { name: "معدل" ,isSelected:false },
    { name: "انضباط" ,isSelected:false  },
    { name: "دروس تخصصی" ,isSelected:false  },
    { name: "نشان علمی" ,isSelected:false  },
    { name: "فعالیت فرهنگی" ,isSelected:false },
    { name: "فعالیت ورزشی" ,isSelected:false },
  ]);
 
  function filterHandler(index) {
    let newItem= items.map((item , i) => {
      if(i === index) {
        return {...item,  isSelected: !item.isSelected }
      }
      return item;
    });
    setItems(newItem);
  }

  return (
    <div className="filter">
      <p className="lable">شاخص ها</p>
      {items.map((item,index) => (
          <SelectFilter
           item={item} 
           onClick={() => filterHandler(index)}
           id={index} 
           isSelected={item.isSelected} />
      ))}
      <button className="actions">اعمال</button>
    </div>
  );
};
export default ClassFilter;
