import React, { useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import {AiOutlineCloseSquare} from "react-icons/ai"
export default function Header() {

  const [toggle,setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center py-[12px]">

        {/* Title */}
        <div className="text-3xl font-bold cursor-pointer">Frozen Tech.</div>

        {/* Toggle Buttons */}
        {
          toggle?
          <AiOutlineCloseSquare className="text-white text-3xl md:hidden block cursor-pointer duration-200" onClick={()=>(setToggle(!toggle))}/>
          :<BsMenuButtonWide className="text-white text-2xl md:hidden block cursor-pointer duration-200" onClick={()=>(setToggle(!toggle))} />
          

        }
        {/* Menu Bar */}
        <ul className="hidden md:flex text-white gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Responsive Menu Bar */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#000000af] top-[92px]
        ${toggle ? 'right-[0]':'right-[-100%]'}
        `}>
          <li className="cursor-pointer p-5">Home</li>
          <li className="cursor-pointer p-5">About</li>
          <li className="cursor-pointer p-5">Resources</li>
          <li className="cursor-pointer p-5">Company</li>
          <li className="cursor-pointer p-5">Contact</li>
        </ul>

      </div>
    </div>
  );
}
