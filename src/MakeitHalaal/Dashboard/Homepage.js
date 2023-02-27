import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";


function Homepage(props) {
 
 console.log(props)
 const deleteUser = async (id) => {
  try{
    await axios.delete(`http://localhost:4000/api/lessons/${id}`);
    alert("Data deleted.")
    props.getList();
      }catch (err) 
  {
  console.log(err);
  alert("Unable to delete, Kindly refresh this page")
   }
}


  return (
    <div className=' bg-gradient-to-t  from-[#25c5d5] to-[#3360b4]'>
      <div >
     <h1 className=" text-[#ffffff] text-center p-1 text-2xl font-bold">Make it Halal Dashboard</h1>
     </div>

     {
                        props.data.map((info,i) => (
                            
                          <div  key={i} className="flex  bg-gradient-to-t   from-[#25c5d5] to-[#3360b4] items-center justify-center">
                            <div  className="flex flex-col rounded-md items-center justify-center w-[400px] md:w-[500px]  shadow-2xl my-8 ">

                         
              <img src={`data:image/png;base64,${btoa(
              String.fromCharCode(...new Uint8Array(info.IDcardimage.data.data)))}`} 
              alt="..." className='rounded-md object-cover' />

                              
                            <h1 className="text-2xl font-bold p-8 pt-1 pb-0 mt-1">  {info.Name} </h1>
                            <h1 className="text-2xl font-bold p-8 pt-1 pb-0 mt-1">  {info.School} </h1>

                              
                              
                              
                              <div className="flex px-8 py-2 text-gray-700 font-semibold w-full justify-between">
                              
                             <Link to={ {pathname:`/fulldetails/${info._id}`}}  state={info}>
                              <h1 className="text-sm sm:text-xl text-[#15233d] hover:text-red-500 font-semibold pt-0 ">Full details</h1>
                              </Link>

                              <button onClick={()=>deleteUser(info._id)}
                              className="bg-red-600 text-white rounded-md px-2 py-1">Delete</button>
                            </div>   
                            </div>
                        </div>
                        ))
                    }

    </div>
  )
}

export default Homepage