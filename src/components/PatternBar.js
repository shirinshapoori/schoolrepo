import React, { useState } from 'react'

const PatternBar = (p, item) => {
    const [state,setState] = useState(-1);
  
  return (
    <div className='pattern-bar'>
        <p className='info-card-title' style={{paddingBottom:"8%"}}> الگو سفارشی</p>
      <div className='pattern-icon' item={item}>
        
        <img src='./sabz.png' alt='' onClick={()=> setState(p)} 
        className= {state === 0 ? 'pattern-img-select' : 'pattern-img'} />
         
        <img src='./naranji.png' alt='' onClick={()=> setState(p)}  
        className= {state === 1 ? 'pattern-img-select' : 'pattern-img'} />
        
        <img src='./zard.png' alt=''  onClick={()=> setState(p)}  
        className= {state === 2 ? 'pattern-img-select' : 'pattern-img'}/>
      
        <img src='./qermez.png' alt='' onClick={()=> setState(p)}
        className= {state === 3 ? 'pattern-img-select' : 'pattern-img'}/>
      
      </div>
    </div>
  )
}
export default PatternBar  