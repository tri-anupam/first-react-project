import React from 'react'
import {AiFillFacebook,AiOutlineInstagram,AiFillTwitterSquare,AiOutlineGithub} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='w-full bg-[#2699fb] mt-[-100px]'>
      <div className='md:grid grid-cols-4 px-[100px] py-[20px]'>

        <div className='m-3 w-fit'>
          <h1 className='font-bold text-3xl'>Frozen Tech.</h1>
          <p className='text-white my-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste deleniti delectus corporis, eius in reprehenderit, ullam perferendis dolore ex tenetur facilis hic.
          </p>
          <ul className='text-white list-none inline-flex text-2xl'>
            <li className='cursor-pointer w-8'><AiFillFacebook/></li>
            <li className='cursor-pointer px-7'><AiOutlineInstagram/></li>
            <li className='cursor-pointer px-7'><AiFillTwitterSquare/></li>
            <li className='cursor-pointer px-7'><AiOutlineGithub/></li>
          </ul>
        </div>

        <div className='m-3 w-fit'>
        <h1 className='font-bold text-xl'>Solutions</h1>
          <ul>
            <li className='text-white my-3'>Analytics</li>
            <li className='text-white my-3'>Marketing</li>
            <li className='text-white my-3'>Commerce</li>
            <li className='text-white my-3'>Insights</li>
          </ul>
        </div>
          
        <div className= 'm-3 w-fit'>
        <h1 className='font-bold text-xl'>Support</h1>
          <ul>
            <li className='text-white my-3'>Pricing</li>
            <li className='text-white my-3'>Documentation</li>
            <li className='text-white my-3'>Guides</li>
            <li className='text-white my-3'>API Status</li>
          </ul>
        </div>

        <div className='m-3 w-fit'>
          <h1 className='font-bold text-xl'>Company</h1>
          <ul>
            <li className='text-white my-3'>About</li>
            <li className='text-white my-3'>Investors</li>
            <li className='text-white my-3'>Jobs</li>
            <li className='text-white my-3'>Press</li>
            <li className='text-white my-3'>Carrers</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
