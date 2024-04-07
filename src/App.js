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



function App() {
  
  return (<>
      <Navbar /> 
      {/* <AllocateStudentToClass /> */}
      {/* <StudentCard /> */}
      {/* <StudentsList /> */}
      <SearchBar />
      {/* <InfoCard /> */}
      {/* <DecIncPage /> */}
      <ClassFilter />
      {/* <FilteredItem /> */}
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