import React from 'react'
import Cart from './Cart'

const Header = () => {
  return (
    <div className='w-full h-16 bg-white flex items-center justify-between p-6'>
      <h1 className="text-3xl font-serif bg-black rounded-full p-2 text-white">T-Shirt Seller</h1>
      <Cart />
    </div>
  )
}

export default Header

