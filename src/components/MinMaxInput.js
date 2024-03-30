import React from 'react'

const MinMaxInput = ({num , onClick}) => {
  return (
    <div className="back-rectangle-white" onClick={onClick}>
    <p style={{margin:"0%"}}>{`کلاس ${num}`}</p>
    <input style={{width:"20%",height:"20%", marginRight:"30%",marginTop:"2%"}}></input>
    <input style={{width:"20%",height:"20%" , marginRight:"5%",marginTop:"2%"}}></input>
    </div>
  )
}

export default MinMaxInput