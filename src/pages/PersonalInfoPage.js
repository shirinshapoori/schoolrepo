import React, { useState } from 'react'
import PersonalInfo from '../components/PersonalInfo';

const PersonalInfoPage = () => {
  
   const items = ([
    { name: "مشخصات فردی" ,isSelected:false },
    { name: "سوابق تحصيلی و شغلی" ,isSelected:false  },
    { name: "امنیت" ,isSelected:false  },
    { name: "سمت شغلی" ,isSelected:false  },
  ]);
         
      // function getOnClick({index}) {
      //             if(index === 0) {
      //                 <MorePersonalInfo />
      //             }
      //             else if(index === 1) {
      //                 <EducationalInfo />
      //             }  
      //            else if(index === 2) {
      //                 <SecurityInfo />
      //             }
      //             else
      //               return( <RoleInfo /> 
      //               )
                  // switch(index) {
                  // case 0:
                  //  return console.log("fffffffffff");
                  // case 1:
                  //   return <EducationalInfo />;
                  // case 2:
                  //   return <SecurityInfo />;
                  // default:
                  //   return <RoleInfo />;  
                  //    }
                  

  return (
    <div className='profile-border'>
       {items.map((item, index) => (
        <PersonalInfo item={item} id={index}  />
     ))}
      
       {/* let isOpen= items.map((item,i) => {
            if(i === index) {
                return  {...item, isSelected : !item.isSelected}
            }
            return item;
            <PersonalInfo item={item} onClick={setItems()}/>
        );} */}
    </div>
  )
}
export default PersonalInfoPage 

// function profilleIcon(index) {
//     switch (index) {
//       case 0:
//         return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#FF5CAE" fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M3.751 20.105a8.25 8.25 0 0 1 16.498 0a.75.75 0 0 1-.437.695A18.7 18.7 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695" clip-rule="evenodd"/></svg>;
//       case 1:
//         return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#FF842C" d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3" opacity="0.5"/><path fill="#FF842C" d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14z"/></svg>;
//       case 2:
//         return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="#FF3D4F" stroke-linecap="round" stroke-linejoin="round" d="M24 25.28a3.26 3.26 0 0 0-1.64 6.07V36h3.32v-4.65a3.28 3.28 0 0 0 1.61-2.8v0A3.27 3.27 0 0 0 24 25.28"/><rect width="33.23" height="25.73" x="7.38" y="17.77" fill="none" stroke="#FF3D4F" stroke-linecap="round" stroke-linejoin="round" rx="4.32"/><path fill="none" stroke="#FF3D4F" stroke-linecap="round" stroke-linejoin="round" d="M13.35 17.77v-2.61a10.66 10.66 0 0 1 21.32 0v2.61"/></svg>;
//       default:
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#3BBFDC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4"/></g></svg>        return ;
//     }
//    }