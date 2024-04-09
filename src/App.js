import React , {useState} from 'react'
import "./Style.css"
import Navbar from './components/Navbar'
import AllocateStudentToClass from './pages/AllocateStudentToClass'
import StudentCard from './components/StudentCard'
import StudentsList from './pages/StudentsList'
import CountBoxPage from './pages/CountBoxPage'
import SearchBar from './components/SearchBar'
import InfoCard from './components/InfoCard'
import { Pattern } from './components/Pattern'
import DecreaseIncrease from './components/DecreaseIncrease'
import DecIncPage from './pages/DecIncPage'
import CountBox from './components/CountBox'
import ClassFilter from './components/ClassFilter'
import FilteredItem from './components/FilteredItem'
import Cancelbutton from './components/Cancelbutton'
import SaveButton from './components/Savebutton'
import StudentCardBack from './components/StudentCardBack'
import ClassCostomizePattern from './components/ClassCostomizePattern'




function App() {
  
  return (<>
      <Navbar /> 
      {/* <ClassCostomizePattern /> */}
      <AllocateStudentToClass />
      {/* <StudentCard /> */}
      {/* <StudentsList /> */}
      {/* <SearchBar /> */}
      {/* <InfoCard /> */}
      {/* <DecIncPage /> */}
      {/* <ClassFilter /> */}
      {/* <FilteredItem /> */}
      {/* <CountBoxPage /> */}
      {/* <SaveButton saveText={'انتقال'} /> */}
      {/* <Cancelbutton cancelText={'لغو'}/> */}
  </>)
}

export default App

// const CardList = () => {
//   const [rows, setRows] = useState([1]); // Initial row
// // dfddgdrgg
//   const handleAddRow = () => {
//     setRows((prevRows) => [...prevRows, prevRows.length + 1]);
//   };

//   const handleRemoveRow = (rowIndex) => {
//     setRows((prevRows) => prevRows.filter((_ , index) => index !== rowIndex));
//   };

//   return (
//     <div>
//       {rows.map((rowIndex) => (
//         <div key={rowIndex} className="card">
//           {/* Your card content here */}
//           <p>Card {rowIndex}</p>
//           <button onClick={() => handleRemoveRow(rowIndex)}>Remove Row</button>
//         </div>
      // ))}
//       <button onClick={handleAddRow}>Add New Row</button>
//     </div>
//   );
// };

// export default CardList;


{/* <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="#1472ff" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity="0.3"/><path fill="#1472ff" d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"/></svg>  */}
          