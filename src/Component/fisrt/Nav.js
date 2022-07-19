import React from 'react'
import logo from './Logo.svg'
export default function Nav({login}) {
  return (
    <nav className='flex items-center justify-between absolute top-0 z-20 pl-10 '>
        <img src={logo} className='w-[20%] sm:w-[13%] ' />
        {
            login != false && 
            <button className='p-2 pl-6 pr-6 text-white bg-red-600 mr-10'>Login</button>
        }
            </nav>
  )
}
