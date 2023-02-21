import React from 'react'
import laptop from '../assets/images/laptop.jpg'
export default function Experts() {
  return (
    <div className='max-w-[1240px] my-10 mx-auto md:grid grid-cols-2 p-2'>
        <div className='col-span-1 sm:w-[80%] md:w-[80%] text-center'>
            <img src={laptop} alt=""/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold m-2'>LEARN FROM EXPERTS</h1>
          <p className='m-2 text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad non corrupti quod deserunt, officia facere vitae soluta architecto reiciendis necessitatibus? Velit minus doloremque, numquam eaque autem illum nisi assumenda dolore expedita dolorem?
          </p>
          <button className='inline w-[30%] bg-black text-white rounded p-3 m-2'>Get Started</button>
        </div>
    </div>
  )
}
