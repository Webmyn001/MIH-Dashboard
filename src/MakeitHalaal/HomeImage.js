import React from 'react'
import image from "./Images/ui.jpg"

function HomeImage() {
  return (
    <div className='px-5 flex items-center justify-center'>
        <img src={image} alt='make it Halaal' className='object-cover  w-[400px] h-[400px] sm:w-[500px] sm:h-[400px] rounded-md'/>
    </div>
  )
}

export default HomeImage