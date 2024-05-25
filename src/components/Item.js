import React from 'react'

function Item({item, id , isSelected , onClick}) {
  return (
     <div className={isSelected ? 'item-btn border-blue' : 'item-btn'} id={id} onClick={onClick}>
     <img src="./book.png" alt='' className='img-small' />
     <p className='txt'>{item.gradeTitle}</p>
     </div>
  )
}
export default Item