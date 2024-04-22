import React from 'react'

const SelectFilter = ({item, id, onClick, isSelected}) => {
   
  return (
    <div onClick={onClick} id={id}  className="checkbox-item">
        {isSelected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
            >
              <path
                fill="#1472ff"
                d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#7C7C7C"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2" />
                <path d="m7.5 10.5l2 2l4-4" />
              </g>
            </svg>
          )}

          <p>{item.name}</p>
        </div>
  )
}

export default SelectFilter