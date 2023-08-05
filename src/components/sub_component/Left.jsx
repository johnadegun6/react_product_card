import React from 'react'
import LeftImage from './image-product-desktop.jpg'


function Left() {
  return (
    <div className='w-60'>
        <img src={LeftImage} alt="left" className='rounded-md' />
    </div>
  )
}

export default Left