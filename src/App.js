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
import CountBox from './components/CountBox'
import ClassFilter from './components/ClassFilter'
import FilteredItem from './components/FilteredItem'
import Cancelbutton from './components/Cancelbutton'
import SaveButton from './components/Savebutton'
import StudentCardBack from './components/StudentCardBack'
import ClassCostomizePattern from './components/ClassCustomizePattern'

function App() {
  
  return (<>
      <Navbar />  
      <AllocateStudentToClass />
      {/* <ClassCostomizePattern /> */}
      {/* <StudentCard /> */}
      {/* <StudentsList /> */}
      {/* <SearchBar /> */}
      {/* <InfoCard /> */}
      {/* <ClassFilter /> */}
      {/* <FilteredItem /> */}
      {/* <CountBoxPage /> */}
      {/* <SaveButton saveText={'انتقال'} /> */}
      {/* <Cancelbutton cancelText={'لغو'}/> */}
  </>)
}

export default App