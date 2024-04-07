import React from 'react'
import PatternBar from './PatternBar';

const InfoCard = () => {
    const infoItem = [{
    score : "میانگین معدل:",
    discipline: "انضباط:", 
    scientific:"نشان علمی:",
    sport:"فعالیت ورزشی:", 
    students :"تعداد دانش آموزان:",
    color:"#BE0000" },
    {
    score : "میانگین معدل:",
    discipline: "انضباط:", 
    scientific:"نشان علمی:",
    sport:"فعالیت ورزشی:",
    students :"تعداد دانش آموزان:",
    color:"#BE0000" }];

  return (
    <div className='back-blue' style={{justifyContent:"center"}}>
      <PatternBar />
       {infoItem.map((item)=> ( 
       <div className='info-card'>
        <p className='info-card-title'>اطلاعات کلاس</p>
        <InfoCardList   itemInfo= {item} />
      </div> 
      ))}
    
    </div>
  )
}

export default InfoCard

export const InfoCardList = ({itemInfo}) => {
    return (<>
    <div className='line-before-textone'>{itemInfo.score}</div>   
    <div className='line-before-text'>{itemInfo.discipline}</div>   
    <div className='line-before-text'>{itemInfo.scientific}</div>   
    <div className='line-before-text'>{itemInfo.sport}</div>   
    <div className='line-before-text'>{itemInfo.students}</div>  
    </>
  )}