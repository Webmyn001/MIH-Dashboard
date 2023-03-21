I port React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Update() {
const navigate = useNavigate();

  const [Text, setText]= useState("")

  const submit = (e) => {
    e.preventDefault()
   
    
    axios.post("https://repulsive-threads-foal.cyclic.app/api/updates/addupdate", {Text: Text})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    alert("form submitted succesfully")
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form Or refresh the page")
    })
 }


  const OnchangeUpdate = (e) => {
    setText(e.target.value)
  }

  const [getupdate, setgetUpdate] =useState([])
  console.log(getupdate)
  const getUpdate = async ()=> {
    axios.get("https://repulsive-threads-foal.cyclic.app/api/updates/getupdates")
    .then((res)=> setgetUpdate(res.data) )
    .catch((err)=> console.log(err))
    
  }
  const deleteUser = async (id) => {
    try{
      await axios.delete(`https://repulsive-threads-foal.cyclic.app/api/updates/deleteupdate/${id}`);
      alert("Data deleted.")
        }catch (err) 
    {
    console.log(err);
    alert("Unable to delete, Kindly refresh this page")
     }
     getUpdate();
  }

  useEffect(()=>{
    getUpdate()
  },[])
  return (
    <div className='bg-gradient-to-t min-h-screen from-[#25c5d5] to-[#3360b4] flex flex-col items-center '>
      <h1 className='font-bold text-xl pt-6 text-[#fff8ea] text-center'>Post Latest Update</h1>
      <form onSubmit={submit} className="flex flex-col justify-center items-center gap-3">
      <textarea placeholder="Latest Update ... " value={Text} onChange={OnchangeUpdate} 
     className= " border-[#130e0e] pt-3 focus:outline w-[300px] h-[100px] border-2 rounded-lg px-3 text-[#594545]"/>

         <button className='bg-[#061329] px-2 py-2 rounded-md text-white'>Post</button>
      </form>

      <h1 className='font-bold text-xl pt-5 text-white text-center'> Latest Updates </h1>
      {
        getupdate.map((update)=>(
          <div key={update._id} className=" w-[300px] border border-black mb-3 rounded-md px-3 py-3 shadow-2xl flex flex-col justify-center items-center">
      <h1 className='font-semibold text-sm px-3 '>{update.Text}</h1>
      <button onClick={()=>deleteUser(update._id)}
      className="bg-red-600 text-white mt-3 rounded-md px-2 py-1">Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Update
