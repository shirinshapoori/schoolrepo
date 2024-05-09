import React, { useState } from 'react'
import Alarm from '../components/Alarm'

const AlarmPage = () => {
    const [isSeen, setIsSeen] = useState([false]);
  return (
    <>
    <Alarm isSeen={isSeen}/>
    </>
  )
}
export default AlarmPage