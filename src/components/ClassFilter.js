import React, { useState } from 'react'

const ClassFilter = () => {
    const items = [{name : "معدل"}, {name : "انضباط"},{name : "دروس تخصصی"},{name : "نشان علمی"},{name : "فعالیت فرهنگی"},{name : "فعالیت ورزشی"},]
    const [selectFilter, setSelectFilter]= useState(false);
    return (
    <div className='filter'>
      <p className="lable">شاخص ها</p>
     
            {items.map((item) => (
            <div className='checkbox-item' onClick={setSelectFilter(!selectFilter)}>
        {selectFilter ?   <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" }}
            idth="30px"
            height="30px"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#7C7C7C"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2" />
              <path d="m7.5 10.5l2 2l4-4" />
            </g>
             </svg> 
             : 
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#7C7C7C" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"/><path d="m7.5 10.5l2 2l4-4"/></g></svg>
     }
              <p>{item.name}</p>
            </div>
       ))}
      <button className='actions'>اعمال</button>  
   
    </div>
  )
}
export default ClassFilter
