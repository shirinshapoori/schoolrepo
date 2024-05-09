import React from 'react'

const StudentCardBack = ({info}) => {
  return (
      <div className="card-img" style={{paddingBottom:"21%"}}>
          <p className='txt-back'>{info.name}</p>
          <p className='txt-back'>معدل: {info.score}</p>
          <p className='txt-back'>انضباط: {info.discipline ? info.discipline : "ندارد"}</p>
          <p className='txt-back'>نشان علمی: {info.scientific}</p>
          <p className='txt-back'>فعالیت ورزشی: {info.sport}</p>
      </div>
  )
}
export default StudentCardBack 