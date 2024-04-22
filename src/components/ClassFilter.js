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
   const [select , setSelect]=useState(-1);
  function filterHandler(index) {
    setSelect(index);
    setItems([...items, { isSelected:true } ]);
  }

  return (
    <div className="filter">
      <p className="lable">شاخص ها</p>
      {items.map((item,index) => (

          <SelectFilter item={item} onClick={() => filterHandler(index)} id={index}  isSelected={select === index } />
      ))}
      <button className="actions">اعمال</button>
    </div>
  );
};
export default ClassFilter;
