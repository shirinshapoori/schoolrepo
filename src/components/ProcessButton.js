import React, { useState } from 'react'
import { assignStuToClass } from '../api/classService';

const ProcessButton = ({processText}) => {

  const[relId,setrelId]=useState({id:0});

  function sendProcess(){
    setrelId({id:0});
    assignStuToClass(relId.id).then((res)=> {
    if(res.isSuccess){
     setrelId({ id: relId.id });
    }
   })
  }
  
  return (
    <button className='process' onClick={sendProcess}>
        {processText} 
    </button>
  )
}
export default ProcessButton