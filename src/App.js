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
import Alarm from './components/Alarm'
import AlarmPage from './pages/AlarmPage'
import PersonalInfoPage from './pages/PersonalInfoPage'
import HomeWork from './components/HomeWork'
import PeresentAbsent from './components/PeresentAbsent'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PeresentAbsentButton } from './components/PeresentAbsentButton'


function App() {
  return (<>
      <Navbar />  
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomeWork />}></Route>
         <Route path="/InfoCard" element={<InfoCard />}></Route>
       </Routes>
      </BrowserRouter>

      {/* <AllocateStudentToClass /> */}
      {/* <HomeWork /> */}
      {/* <PeresentAbsent /> */}
      {/* <AlarmPage /> */}
      {/* <PersonalInfoPage /> */}
     
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