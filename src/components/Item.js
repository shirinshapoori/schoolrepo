import React from 'react'

function Item({item, id}) {
  return (
     <div className='item-btn' id={id}>
     <img src={item.img} alt='' className='img-small'></img>
     <p className='txt'>{item.name}</p>
     </div>
  )
}

export default Item