import React from 'react'
import './HeaderItem.css'
const HeaderItem = ({title}) => {
  return (
    <div className='HeaderItem'>
        <a href="#">
          <p>{title}</p>
        </a>
    </div>
  )
}

export default HeaderItem