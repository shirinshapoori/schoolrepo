import React from 'react'

const Alarm = () => {
  
 return (<>
  <AlarmCheck />
 </>)
}
export default Alarm

function AlarmCheck() {
 return(
  <div className='profile-border' >
       <div className='alarm'>
          <p className='long-txt'>ازمون فردا اک اف</p>
       </div>
        <div className='alarm'>
          <p className='long-txt'>ازمون فردا اک اddddd dddddd fdddd dddddd dddddd ddddف</p>
       </div>
        <img src='./alarm.png' alt='' className='animate-img'/>
    </div>
    )
}