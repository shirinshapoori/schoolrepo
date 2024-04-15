import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import StudentCard from "../components/StudentCard";
import StudentCardBack from "../components/StudentCardBack";
import SearchBar from "../components/SearchBar";

const StudentsList = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [moveMode, setMoveMode] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }
  return (
    <>
      <SearchBar onClick={setMoveMode} moveModeClick={moveMode} />
      {moveMode ? 
        <>
          <div className="alphabet">الف</div> <StudentCard moveMode={moveMode} />
        </>
       : 
        <>
          <div className="alphabet">الف</div>
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped}
            flipSpeedBackToFront={0.8}
            flipSpeedFrontToBack={0.8}
          >
            <div onClick={handleFlip}>
              <StudentCard />
            </div>
            <div onClick={handleFlip}>
              <StudentCardBack />
            </div>
          </ReactCardFlip>
        </>
    }

      {/* <div onClick={handleFlip}>
    {isFlipped ? <StudentCard /> : <StudentCardBack />}
      </div> */}
    </>
  );
};

export default StudentsList;
