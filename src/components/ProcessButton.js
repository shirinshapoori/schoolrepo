import React, { useState } from 'react'
import { assignStuToClass } from '../api/classService';

const ProcessButton = ({processText, grade}) => {

  const[relId,setrelId]= useState(-1);
  
  function sendProcess(){
    assignStuToClass().then((res)=> {
    if(res.isSuccess){
     setrelId(res.data);
    }
   })
  }
  
  return (
    <button className='process' onClick={sendProcess}>
        {processText} {relId} 
    </button>
  )
}
export default ProcessButton