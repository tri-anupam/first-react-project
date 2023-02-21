import React from "react";
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className="bg-[#2699fb] py-[100px] w-full mx-auto text-center font-bold">
      <div className=" text-xl md:text-3xl mb-4 md:p-[24px]">
        Learn with Us
      </div>
      <h2 className="text-white text-[40px] md:text-[80px] md:p-[24px]">
        Grow With Us
      </h2>
      <div className="font-bold text-black text-[30px] md:text-[50px] md:p-[24px]">
        Learn 
        <Typed className="text-white p-2"
                    strings={['Web Developement','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
            
      </div>
      <button className='bg-black text-white rounded p-3'>Get Started</button>
    </div>
  );
}
