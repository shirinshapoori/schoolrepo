import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import StudentCard from "../components/StudentCard";
import StudentCardBack from "../components/StudentCardBack";
import SearchBar from "../components/SearchBar";

const StudentsList = () => {
  const [moveMode, setMoveMode] = useState(false);
  const [search, setSearch] = useState(false);
  const [studentsList, setStudentsList] = useState([
    {
      name: "علی احمدی",
      score: 12,
      discipline: 20,
      scientific: 0,
      sport: 0,
    },
    {
      name: "محمد سجادی",
      score: 16,
      discipline: 18,
      scientific: 1,
      sport: 2,
    },
    {
      name: "شاهین شاپوری",
      score: 20,
      discipline: 18,
      scientific: 2,
      sport: 10,
    },
    {
      name: "عرفان عبدی",
      score: 20,
      discipline: 19,
      scientific: 5,
      sport: 15,
    },
  ]);
  return (
    <>
      <SearchBar
        onClick={setMoveMode}
        moveModeClick={moveMode}
        onSearch={setSearch}
        search={search}
      />
      <>
        <div className="alphabet">الف</div>
        <div style={{ display: "flex", flexWrap: "wrap",justifyContent:'space-around'}}>
          {studentsList.map((item) => (
            <div style={{ width: "30%" }}>
              <StudentCard moveMode={moveMode} info={item}/>
            </div>
          ))}{" "}
        </div>
      </>

      {/* <div onClick={handleFlip}>
    {isFlipped ? <StudentCard /> : <StudentCardBack />}
      </div> */}
    </>
  );
};

export default StudentsList;
