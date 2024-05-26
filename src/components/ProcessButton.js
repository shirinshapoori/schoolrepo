import React, { useState } from "react";
import { assignStuToClass } from "../api/classService";
import { useNavigate } from "react-router-dom";
import InfoCard from "./InfoCard";

const ProcessButton = ({ processText, relId }) => {  
  //  const navigate = useNavigate();
   const [classInfo, setClassInfo] = useState([]);
   
   const goToInfoCard = () => {
    return (
    <InfoCard classInfo={classInfo}/>
    )
    // navigate("/InfoCard");
  }
    
   function sendProcess() {
     if (relId === -1) return;
     assignStuToClass(relId).then((res) => {  
      if (res.isSuccess) {
          setClassInfo(res);
          goToInfoCard();

        // <InfoCard res={res}/>
      }
    });
  }
 
  return ( 
    <button className="process" onClick={sendProcess}>
      {processText} {relId}
    </button>
  );
};
export default ProcessButton;
