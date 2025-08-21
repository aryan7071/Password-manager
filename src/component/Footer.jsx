import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full ' >
      <div className="logo font-bold text-2xl ">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP&gt;</span>
          </div>
      <div className='flex items-center justify-center' >
      Createdt With <img className='w-8 mx-2 '  src="icons/heart.png" alt=""/>By Aryan Kumar
      </div>
    </div>
  )
}

export default Footer
