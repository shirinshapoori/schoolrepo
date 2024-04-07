import React from 'react'

const StudentCard = () => {
  return (
  <>
    <div className="card-img">
    <img src="./boy1.png" alt="Shoes" className='img-large'/>
       <p style={{textAlign:"center", margin:"0%", fontSize:"18px"}}>محمد سجادی</p> 
        <div className='card-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" className='ball' viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 39.38l24.79-17.05a88.41 88.41 0 0 1 36.18 27l-8 26.94c-.2 0-.41.1-.61.17l-22.82 7.41a7.59 7.59 0 0 0-1 .4L136 88.62V64zM95.24 46.33L120 63.38v25.24l-28.56 19.67a7.59 7.59 0 0 0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94a88.41 88.41 0 0 1 36.23-27.04m-13 129.09H53.9a87.4 87.4 0 0 1-13.79-43.07l22-16.88a5.77 5.77 0 0 0 .58.22l22.83 7.42a7.83 7.83 0 0 0 .93.22l10.79 31.42c-.15.18-.3.36-.44.55l-14.1 19.41a7.8 7.8 0 0 0-.46.71M150.69 213a88.16 88.16 0 0 1-45.38 0l-10.06-28.4c.13-.16.27-.31.39-.48l14.11-19.42a7.66 7.66 0 0 0 .46-.7h35.58a7.66 7.66 0 0 0 .46.7l14.11 19.42c.12.17.26.32.39.48Zm23.07-37.61a7.8 7.8 0 0 0-.46-.71l-14.11-19.38c-.14-.19-.29-.37-.44-.55l10.79-31.42a7.83 7.83 0 0 0 .93-.22l22.83-7.42a5.77 5.77 0 0 0 .58-.22l22 16.88a87.4 87.4 0 0 1-13.79 43.07Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='medal' viewBox="0 0 32 32"><path fill="currentColor" d="m7 3l4.266 10.36C8.71 14.948 7 17.774 7 21c0 4.962 4.037 9 9 9s9-4.038 9-9c0-3.225-1.71-6.051-4.266-7.64L25 3h-2.162l-3.912 9.498a8.908 8.908 0 0 0-2.06-.453L20.587 3h-2.162l-3.752 9.11a8.909 8.909 0 0 0-1.6.388L9.162 3zm4.412 0l2.541 6.174l1.082-2.627L13.575 3zM16 14c3.859 0 7 3.14 7 7s-3.141 7-7 7s-7-3.14-7-7s3.141-7 7-7m0 3.162l-1.168 2.62l-2.832.31l2.12 1.904l-.597 2.81L16 23.378l2.477 1.43l-.596-2.81L20 20.091l-2.832-.31z"/></svg>
        </div>
    </div>
  </>)
}

export default StudentCard