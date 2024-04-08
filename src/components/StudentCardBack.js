import React from 'react'

const StudentCardBack = () => {
  const infoItem = [{
    name:"محمد سجادی",
    score : "معدل:",
    discipline: "انضباط:", 
    scientific:"نشان علمی:",
    sport:"فعالیت ورزشی:", 
     }]

  return (
      <div className="card-img">
         {infoItem.map((item) => (<>
          <p className='txt-back'>{item.name}</p>
          <p className='txt-back'>{item.score}</p>
          <p className='txt-back'>{item.discipline}</p>
          <p className='txt-back'>{item.scientific}</p>
          <p className='txt-back'>{item.sport}</p>
        </> ))}
        </div>
    
  )
}

export default StudentCardBack 