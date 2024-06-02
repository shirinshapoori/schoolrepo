import React, { useState } from 'react'

export const PeresentAbsentButton = () => {
    const [select, setSelect] = useState(false);
  return (
    <button className={select ? 'btn select' : 'btn'} onClick={()=> setSelect(!select)} >
       ثبت حضور و غیاب
    </button>
  )
}
