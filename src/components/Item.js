import React from 'react'

function Item({item, id , isSelected , onClick}) {
  return (
     <div className={isSelected ? 'item-btn border-blue' : 'item-btn'} id={id} onClick={onClick}>
     <img src={item.img} alt='' className='img-small'></img>
     <p className='txt'>{item.name}</p>
     </div>
  )
}
export default Item