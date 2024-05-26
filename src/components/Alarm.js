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
          <p className='long-txt'>آلارم ایز تستینگ</p>
       </div>
        <div className='alarm'>
          <p className='long-txt'>آلارم تست  آلارم تست  آلارم تست  آلارم تست  آلارم تست  آلارم تست  آلارم تست </p>
       </div> 
        <img src='./alarm.png' alt='' className='animate-img'/>
    </div>
    )
}