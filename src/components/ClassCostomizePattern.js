import React, { useState } from 'react'
import CountBox from './CountBox'
import { toPersianDigit } from './toPersianDigit';
import { type } from '@testing-library/user-event/dist/type';

const ClassCostomizePattern = () => {
  //arraye az dictionary ha ya object ha
    const [items, setItems] = useState(
  [ {name:"معدل:" , type:"score" , percent: 0},
    {name: "انضباط:" , type:"discipline" , percent: 0}, 
    {name:"نشان علمی (دارای رتبه برتر):" , type:"scientific" , percent: 0},
    {name:"فعالیت ورزشی:" , type:"sport" , percent: 0},
    {name: "نمرات دروس تخصصی:" , type:"lessons" , percent: 0},
    {name:"فعالیت فرهنگی:" , type:"culture" , percent: 0},
 ]); 

  const handleAdd = () => {
     setItems(preitems => ({...preitems , [items.percent]: items.percent +5 }));
   }
  
  return (
    <div>
      
        <p>شاخص کلاس بندی</p>
        {items.map((item)=> 
             <CountBox  onAdd={handleAdd}  num={item.percent} items={item}/>
       )}
          
    </div>
  )
}

export default ClassCostomizePattern