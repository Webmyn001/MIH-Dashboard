import React from 'react'
import {Link, useLocation} from "react-router-dom"
import { useState } from 'react'


function Fulldetails(props) {

    const location = useLocation()
    const data = location.state
    console.log(data)
    
   



  return (
    <div>
            <div className=" flex items-center  justify-center ">
              
               <div className="flex flex-col items-center  max-w-[400px] sm:max-w-[500px] md:max-w-[800px] shadow-2xl justify-center">
             <h1 className="font-bold text-2xl p-5"> Name: {data.Name}</h1>
               {/* Id card image */}
        <div>
         <img src={data.IDcardImage.url} alt="..." className='object-cover object-fit
           shadow-sm w-[350px] sm:h-[500px] sm:w-[600px]'/>
        </div>
             
             
             <h1 className="font-bold text-2xl p-5"> School :{data.School}</h1>
             {/* image jamb */}
         <div>
         <div>
         <img src={data.IDcardImage.url} alt="..." className='object-cover
           shadow-sm w-[350px] sm:h-[500px] sm:w-[600px]'/>
        </div>
        </div>
             <h1 className=" text-xl font-normal text-gray-700  px-5">Bank Name: {data.BankName}</h1>
             <h1 className=" text-xl font-normal text-gray-700  px-5">Account Name: {data.AcctName}</h1>
             <h1 className=" text-xl font-normal text-gray-700  px-5">Account Number: {data.AcctNo}</h1>
             <h1 className=" text-xl font-normal text-gray-700  px-5">Whatsapp Number: {data.Whatsapp}</h1>
             <h1 className=" text-xl font-normal text-gray-700  px-5"> Short Note:{data.Shortnote}</h1>


                
             <div className="flex flex-col items-start pl-5 pb-3 pt-4 text-gray-700 font-semibold w-full justify-center">
                              
                              <p> Submitted at : {data.createdAt}</p>

                   </div>
                
            <div className="flex flex-col  items-center max-w-[400px] mb-5 justify-">
                 
                   <div>
                   <Link to="/">
                   <button className="bg-blue-500 border-2 border-blue-500 px-2 mt-4 py-1 text-white font-bold font-mono
                   tracking-wide hover:bg-gray-300 hover:text-black rounded-full">Back</button>
                   </Link>

                   </div>
                  
                </div>

                   

                </div>
                
                  
                   

                 
             </div>
    

            </div>
  )
}

export default Fulldetails