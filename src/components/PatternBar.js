import React, { useState } from 'react'

const PatternBar = ({isSelected}) => {
    const [selected , setSelected]= useState('qermez', 'zard', 'naranji','sabz');
   
  return (
    <div className='pattern-bar'>
        <p className='info-card-title' style={{paddingBottom:"8%"}}> الگو سفارشی</p>
      <div className='pattern-icon'>
        
        <img src='./sabz.png' alt='' onClick={() => setSelected('sabz')} 
        className= {selected === 'sabz' ? 'pattern-img-select' : 'pattern-img'} />

        <img src='./naranji.png' alt='' onClick={() => setSelected('naranji')}  
        className= {selected === 'naranji' ? 'pattern-img-select' : 'pattern-img'} />
        <img src='./zard.png' alt=''  onClick={() => setSelected('zard')}  
        className= {selected === 'zard' ? 'pattern-img-select' : 'pattern-img'}/>
        <img src='./qermez.png' alt='' onClick={() => setSelected('qermez')}
        className= {selected === 'qermez' ? 'pattern-img-select' : 'pattern-img'}/>
      </div>
    </div>
  )
}
export default PatternBar  