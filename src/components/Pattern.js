import React from "react";

export const Pattern = ({ item, id, isSelected, onClick }) => {
 
  return ( 
    <div className = {isSelected ? "back-white border-blue" : "back-white"} id={id} onClick={onClick} >
     <p className="txt" style={{width:"90%"}}>{item.title}</p>

        {item?.constraints?.map((constraintItem) => (<>
         <PatternItem patternItem= {constraintItem}/>
        </>))}
    </div>
  );
};

  const PatternItem = ({patternItem}) => {
         return (<>
           <p className="border" style={{width:"90%"}}>{patternItem?.constraintTitle}: {patternItem?.parcent}</p>
          </>)
}
export default PatternItem


{/* <p className="border"> {`انضباط: ${toPersianDigit(item.disipline)}`}</p> */}


      //  {item.id === 4 ? (<>
      //   <p className="border">{item?.constraints?.constraintTitle}</p>
      // </>) : (
      //   <>
      //     <p className="border">{item?.constraints?.constraintTitle}: {item?.constraints?.percent}</p>
      //     <p className="border">{item?.constraints?.constraintTitle}: {item?.constraints?.percent}</p>
          
      //   </>
      // )}
      // {item.id === 2 || item.id === 3 ? (<>
      //   <p className="border">{item?.constraints?.constraintTitle}: {item?.constraints?.percent}</p>
      // </>) : null}    



//  <p className={switch(id){
//           case 0: return "border green";
//           case 1: return "border naranji";
//           case 2: return "border zard";
//           case 3: return "border red";
//         }}
//         >شاخص های مدنظر</p>