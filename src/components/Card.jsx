import React from 'react'
import Left from './sub_component/Left'
import Right from './sub_component/Right'

function Card() {
  return (
    <div className='md:flex flex-auto'>
        <Left />
        <Right />
    </div>
    
  )
}

export default Card