import React, { useState } from 'react'

const HomeWork = () => {
    const items=[{color:"#70C92F", name:"تکلیف کامل"},{color:"#F8CA00", name:"تکلیف ناقص"},{color:"#F94144", name:"فاقد تکلیف"}];
    const [select, setSelect]= useState(-1);
  return (
      <div className='homework'>
        <p className='row txt' style={{marginBottom:"10%" , background:"white"}}>تکلیف</p>
        <div className='row'>
        {items.map((item, index) => (
             <button className={select === index ? 'border-blue' : 'taklif'} onClick={()=> setSelect(index)}>
             <div className='square' style={{backgroundColor: item.color }}></div> 
             <p className='txt' style={{width:"75px"}}>{item.name}</p>
            </button>  
        ))}
      </div> 
           <button className='btn select'  style={{marginBottom:"15%", marginTop:"7%"}}>ذخیره</button>
    </div>
  )
}

export default HomeWork