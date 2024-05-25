import React from 'react'

const PeresentAbsent = () => {
    const students = [{name:"علی احمدی"}, {name:"محمد احمدی"}, {name:"شایان احمدی"}];
  return (
    <div>
        <div className='modal'>
             <div className='gradient-titr red'>افرادی که غایب هستند</div> 
             {students.map((item)=> (
                <p className='txt-underline'>{item.name}</p>
             ))}
             <div className='gradient-titr yellow'>افرادی که با تأخیر حاضر شدند</div>
             {students.map((item)=> (
                <p className='txt-underline'>{item.name}</p>
             ))}

              <div style={{width:"100%"}}>
           <button className='cancel' style={{marginRight:'10%', marginTop:"10%"}}>بازگشت</button>
           <button className='save' style={{marginRight:'17%', marginTop:"0%"}}>تأیید</button>
             </div>
        </div>
    </div>
  )
}

export default PeresentAbsent