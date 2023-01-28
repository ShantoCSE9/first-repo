import React from 'react'
const Slide = (props) => {
 
  return (
   
    <div  className='w-full relative   bg-black'>
       <img src={props.slide3}  className='object-cover   opacity-70
                                                   bg-center md:h-[600px]  sm:h-[500px] 2xsm:h-[100vh] lg:h-[700px] w-[100%]' alt=''/>
       
      
    </div>
  )
}

export default Slide