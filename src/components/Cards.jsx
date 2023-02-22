import React from 'react'

export default function Cards(props) {
    return (
        <div className="shadow-xl h-fit-content hover:scale-105 duration-500 md:p-3 mb-[100px]">
            <div className='flex flex-col items-center'>

                <img src={props.img} className="h-[70px] rounded-lg relative top-[-20px] overflow-visible shadow-xl" alt='' />

                <h1 className='my-5 md:text-[2.3vw] text-4xl font-bold text-center'>{props.heading}</h1>

                <h1 className='mb-4 text-3xl font-bold'>{props.price}</h1>
                <p className='mb-6 tracking-wide p-3 text-center'>  {props.content}
                </p>
                <button className='bg-teal-300 px-9 py-3 rounded font-bold hover:bg-teal-500 duration-200 mb-7'>
                    Start Trial
                </button>
            </div>
        </div>
    )
}
