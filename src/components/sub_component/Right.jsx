import React from 'react'
import Cart from './icon-cart.svg'

function Right() {
  return (
    <div className='w-60 p-6'>
        <h4 className='text-sm text-gray-300 text-left tracking-widest'>PERFUME</h4>
        <h1 className='text-xl font-bold text-left pr-14'>Gabrielle <br /> Essence Eau <br /> De Parfum </h1>
        <p className='text-xs text-left text-gray-300 pt-2'>A floral, solar and voluptous <br /> interpretation composed by <br /> Olivier Polgier, Perfumer-Creator <br /> for the House of CHANEL</p>
        <div>$149.99  <span>$169.99</span></div>
        <div>
            <img src={Cart} alt="" />
            <p><button>Add to Cart</button></p>
        </div>

    </div>
  )
}

export default Right