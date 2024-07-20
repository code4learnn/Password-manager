import React from 'react'

const Navbar = () => {
  return (
    
    <nav className='bg-slate-800  text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        
       
        <button className='text-white bg-green-700 my-5 rounded-full flex gap-2 justify-center item-center'>
            <img className='invert  w-10 p-1'  src="/icons/github.svg" alt="github logo" />
            <span className='font-bold py-1'>GitHub</span>
         </button>
        </div>
    </nav>
  )
} 

export default Navbar
