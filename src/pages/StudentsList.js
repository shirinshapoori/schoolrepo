import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import StudentCard from '../components/StudentCard';
import StudentCardBack from '../components/StudentCardBack';

const StudentsList = () => {
    const [isFlipped,setIsFlipped] = useState(false);
   
    function handleFlip(){
        setIsFlipped(!isFlipped);
    }
  return (<>
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    
    <div onClick={handleFlip}>
    {isFlipped ? <StudentCard /> : <StudentCardBack />}
      </div>

    {/* <div onClick={handleFlip}>
      <StudentCard />
    </div> */}
    </ReactCardFlip>
  </>)
}

export default StudentsList