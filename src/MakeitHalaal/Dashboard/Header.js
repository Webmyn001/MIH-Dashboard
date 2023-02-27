import React from "react"
import {  useState } from "react"

import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"
import logo from "./Images/logo2.png"

 function Header () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}
    return(
        <div>
            
                     {/* large screen */}
          <div className="bg-[#1048a9]  flex justify-between items-center text-[#fff8ea] h-[60px]">
            {/* logo */}
            <div className="">
            <a href="/" className="flex items-center">
            <img src={logo} alt="..." className="h-[65px] px-5 object-fit object-contain "/>
            </a>
            </div>
          
             
            <div>
              <ul className=" hidden md:flex md:w-full md:gap-x-6 md:justify-end px-6 md:items-center">
               <Navlinks />
               </ul>
            </div>
            
          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-[#1048a9] bg-opacity-90 w-3/5 h-[300px] right-0 shadow-2xl
                  flex flex-col gap-10 text-medium p-7 pt-20 rounded-2xl ease-in-out duration-500
                   ${open ? "top-0" : "right-[-200%]"}`}>
                    <Navlinks alternative={true} handleClick={handleClick} />
                  </ul>
           
                             {/* toggling icon */}
                  <div className="z-50 md:hidden text-white cursor-pointer pr-8 flex w-full justify-end items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>
           
     </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Header