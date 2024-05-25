import React, { useState } from 'react'

const HomeWork = () => {
    const items=[{color:"#70C92F", name:"تکلیف کامل"},{color:"#F8CA00", name:"تکلیف ناقص"},{color:"#F94144", name:"فاقد تکلیف"}];
    const [select, setSelect]= useState(-1);
  return (
      <div className='homework'>
        <div className='row'>
        {items.map((item, index) => (
             <button className={select === index ? 'border-blue' : 'taklif'} onClick={()=> setSelect(index)}>
             <div className='square' style={{backgroundColor: item.color }}></div> 
             <p className='txt' style={{width:"75px"}}>{item.name}</p>
            </button>  
        ))}
      </div> 
         <div style={{width:"100%", marginBottom:"15%"}}>
           <button className='cancel' style={{marginRight:'10%', marginTop:"10%"}}>لغو</button>
           <button className='save' style={{marginRight:'17%', marginTop:"0%"}}>ذخیره</button>
         </div>
    </div>
  )
}

export default HomeWork