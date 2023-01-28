import React, { useState } from 'react'


const EventCard = (props) => {
 
  
  return (
    <dv className={ ` relative hover:cursor-pointer `} >
    

      <div className='bg-[#181A1B] shadow-2xl border-2 text-white lg:h-[600px] md:hover:scale-95 duration-200 rounded-md'>
      <img src={props.slide} alt="" className=' object-cover rounded-t-md bg-center 2xsm:h-[250px] w-full'/>
      <p className='md:text-xl xsm:text-sm font-bold px-4 pt-4'>SPONSOR A CHILD TODAY</p>
      <p className='text-[12px] font-semibold px-4 opacity-80'>GOPALGANJ,DHAKA</p>
      <p className='p-4 text-justify xsm:text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam eveniet
         recusandae corrupti pariatur. Dolore assumenda esse ipsum necessitatibus dolores, 
         nihil laborum sunt nesciunt dignissimos. </p>
         <button className='2xsm:text-sm md:text-md 2xsm:w-[120px]   lg:w-[150px] m-4  hover:bg-orange-400 duration-500 
         rounded-3xl outline-2  outline-gray-300 outline 2xsm:h-[35px] lg:h-[50px] rounded- font-bold text-[#ffff]'>
               READ MORE
             </button>

    </div>
    </dv>
  )
}

export default EventCard