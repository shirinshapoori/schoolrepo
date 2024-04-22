import React, { useState } from 'react'
import ClassFilter from './ClassFilter';
  
const SearchBar = ({onClick, moveModeClick,search, onSearch}) => {
  const [filter,onFilter] = useState(false); 
  if(search) {
    return (
     <div className='search'> 
    <div className='icon-container'>
    <div style={{marginLeft:"0%"}}  onClick={() => onSearch(!search)}  className={search ? 'box-icon border-blue' :'box-icon'}>
     <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="21px" viewBox="0 0 24 24"><path fill="none" stroke="#1472ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
     </div>    
     </div>   
      <input className='txt-searchbar' style={{height:"20px", alignContent:"center"}}></input>
     </div>
     );
     }
   function filterHandler() {
    onFilter(!filter);
   }

  return (
    
    <div className='search'> 
    
    <div className='icon-container'>
    <div className='box-icon' style={{marginLeft:"0%"}} onClick={() => onSearch(!search)} >
     <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="21px" viewBox="0 0 24 24"><path fill="none" stroke="#1472ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
     </div>
    <div onClick={()=> filterHandler()} className={filter ? 'box-icon border-blue' :'box-icon'} >
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="20px" viewBox="-2 -2 24 24"><path fill="#1472ff" d="m2.08 2l6.482 8.101A2 2 0 0 1 9 11.351V18l2-1.5v-5.15a2 2 0 0 1 .438-1.249L17.92 2zm0-2h15.84a2 2 0 0 1 1.561 3.25L13 11.35v5.15a2 2 0 0 1-.8 1.6l-2 1.5A2 2 0 0 1 7 18v-6.65L.519 3.25A2 2 0 0 1 2.08 0"/></svg>
     </div>
    
     <div  onClick={() => onClick(!moveModeClick)}  className={moveModeClick ? 'box-icon border-blue' :'box-icon'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="38px" viewBox="0 0 24 24"><path fill="#1472FF" d="M5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h12.77q.23 0 .423-.192q.192-.193.192-.423V7.154H5v3.038H4V5.615q0-.69.463-1.152Q4.925 4 5.615 4h12.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463zm5.5-3.135l-.688-.688l2.556-2.6H4v-1h8.983l-2.556-2.6l.688-.689l3.789 3.789z"/></svg>
    </div> 
     </div>
      {filter ? <ClassFilter /> : <></>}
     <p className='txt-searchbar'>لیست دانش‌آموزان  ۷۰۱</p>
     </div>
  );
}

export default SearchBar
