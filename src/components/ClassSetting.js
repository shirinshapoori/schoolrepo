import React from 'react'
import { Pattern } from './Pattern';
import ClassCostomizePattern from './ClassCostomizePattern';

const ClassSetting = () => {
  const patterns = [{ name: "الگو اول", score: "۹۰%", disipline: "۱۰%" },
  { name: "الگو اول", score: "۹۰%", disipline: "۱۰%" }, { name: "الگو اول", score: "۹۰%", disipline: "۱۰%" }, { name: "الگو اول", score: "۹۰%", disipline: "۱۰%" },
  ];
 
  return (<>
    <div>
      <div className="back-blue">
      <p className="btn-class-lable">شاخص کلاس‌بندی</p>
    
        {patterns.map((item, id) => (<>
          <Pattern item={item} id={id} />
        </>))}
        
        </div>
    </div>
  </>)
}
export default ClassSetting;