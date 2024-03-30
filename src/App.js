import React , {useState} from 'react'
import "./Style.css"
import Navbar from './components/Navbar'
import AllocateStudentToClass from './pages/AllocateStudentToClass'
import StudentCard from './components/StudentCard'
import StudentsList from './pages/StudentsList'
import CountBoxPage from './pages/CountBoxPage'

// function App() {
  
//   return (<>
//       <Navbar /> 
//       <AllocateStudentToClass />
//       {/* <StudentCard /> */}
//       {/* <StudentsList /> */}
//   </>)
// }

// export default App

const CardList = () => {
  const [rows, setRows] = useState([1]); // Initial row
// dfddgdrgg
  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, prevRows.length + 1]);
  };

  const handleRemoveRow = (rowIndex) => {
    setRows((prevRows) => prevRows.filter((_ , index) => index !== rowIndex));
  };

  return (
    <div>
      {rows.map((rowIndex) => (
        <div key={rowIndex} className="card">
          {/* Your card content here */}
          <p>Card {rowIndex}</p>
          <button onClick={() => handleRemoveRow(rowIndex)}>Remove Row</button>
        </div>
      ))}
      <button onClick={handleAddRow}>Add New Row</button>
    </div>
  );
};

export default CardList;