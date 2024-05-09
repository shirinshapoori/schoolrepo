import React from 'react'

const PersonalInfo = ({item , id}) => {
    const info=[{id:0, type:"نام و نام‌خانوادگی", name:"شیرین"},]
  return (<>
    <div className='personal-info' >
        {id === 0 ? 
         (<div onClick={()=> openFiled(id)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#FF5CAE" fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M3.751 20.105a8.25 8.25 0 0 1 16.498 0a.75.75 0 0 1-.437.695A18.7 18.7 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695" clip-rule="evenodd"/></svg>
         </div>): null
        } 
        {id === 1 ? (<div onClick={()=> openFiled(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#FF842C" d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3" opacity="0.5"/><path fill="#FF842C" d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14z"/></svg>
       </div> ): null
        } 
        {id === 2 ?
        (<div onClick={()=> openFiled(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff3d4f" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"/></svg>
       </div> ): null
        }  
        {id === 3 ?
        (<div onClick={()=> openFiled(id)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#3BBFDC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4"/></g></svg>
        </div>) : null
          }    
        <p className='long-txt'>{item.name}</p>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="#000" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>
      </div>
  </>)
}
export default PersonalInfo

function openFiled({id}){
  return(
    <>
    {id === 0 ? (<div className='more-info'>00000</div>) : null}
    {id === 1 ? (<div className='more-info'>11111</div>) : null}
    {id === 2 ? (<div className='more-info'>2222222</div>) : null}
    {id === 3 ? (<div className='more-info'>33333333</div>) : null}
    </>
  )
 }
//     const MorePersonalInfo= () => {
//          return(
//            <div className='more-info'>
//             <p>wwwwwwwwwwwwwww</p>
//            </div>
//          )
//        }
//         const EducationalInfo= () => {
//          return(
//            <div className='more-info'>
//          f
//            </div>
//          )
//        } 
//        const SecurityInfo= () => {
//          return(
//            <div className='more-info'>
//             ssss
//            </div>
//          )
//        } 
//        const RoleInfo= () => {
//          return(
//            <div className='more-info'>
//           naqsh
//            </div>
//          )
//        }
 