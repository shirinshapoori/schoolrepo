import React from 'react'

const ClassFilter = () => {
    const items = [{name : "معدل"}, {name : "انضباط"},{name : "دروس تخصصی"},{name : "نشان علمی"},{name : "فعالیت فرهنگی"},{name : "فعالیت ورزشی"},]
      return (
    <div className='filter'>
      <p className="lable">شاخص ها</p>
     
            {items.map((item) => (
            <div className='checkbox-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#7C7C7C" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"/><path d="m7.5 10.5l2 2l4-4"/></g></svg>
               {/* <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 20 20"><path fill="#7C7C7C" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm9.854 1.854a.5.5 0 0 0-.708-.708L8.5 11.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"/></svg> */}
              <p>{item.name}</p>
            </div>
           ))}
      <button className='actions'>اعمال</button>  
   
    </div>
  )
}
export default ClassFilter