import React from 'react'

export const Pattern = ({item,id}) => {
  return (
    <div className='back-white' id={id}>
        <p style={{margin:"1%"}}>{item.name}</p>
           <div className='border'>میانگین معدل: {item.score}</div> 
           <div className='border'>انضباط: {item.disipline}</div>
         </div>
    
  )
}
