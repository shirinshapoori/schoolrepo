import React, { useState } from 'react'
import CountBox from './CountBox'
import { toPersianDigit } from './toPersianDigit';

const ClassCostomizePattern = () => {
    const items = [{score:"معدل"},
    {discipline: "انضباط:"}, 
    {scientific:"نشان علمی (دارای رتبه برتر):"},
    {sport:"فعالیت ورزشی:"},
    {lessons: "نمرات دروس تخصصی:"},
    {culture:"فعالیت فرهنگی:"},
 ];
   const title= "کلاس‌بندی سفارشی";
   const name="%";
   const [percent, setPercent] = useState(0);
   
   function handleAdd() {
      setPercent((num)=> num + 5);
   }
   function handleDec() {
    if(percent === 0) return
    setPercent((num)=> num - 5);
   }
  return (
    <div>
        <p>{title}</p>
        {items.map((item , index)=> 
             <CountBox name={name} onAdd={handleAdd} onDlt={handleDec} num={percent} items={item} id={index}/>
       )}
          
    </div>
  )
}

export default ClassCostomizePattern