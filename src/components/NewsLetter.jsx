import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-[#2699fb] p-4' >
      <div className="max-w-[1240px] md:flex justify-between py-[50px] px-[20px]">
        <div className='md:mb-0 mb-3'>
          <h1 className='text-[40px] font-bold text-white'>Want to learn latest I.T skills</h1>
          <span className='text-white'>Sign up to our newsletter and stay up to date</span>
        </div>
        <div>
          <input type="text" className='p-3 mr-2 w-[100%] md:w-[190px] text-slate-600 rounded' placeholder='Email' />
          <button className='bg-black text-white rounded p-3 md:mt-0 my-[10px]'>Notify Me</button>
          <br />
          <p className='text-white'>
            We care about the protection of your data.
          </p>
          <p className='text-[blue] underline cursor-pointer'>
            Read our privacy and Policy
          </p>
        </div>
      </div>
    </div>
  )
}
