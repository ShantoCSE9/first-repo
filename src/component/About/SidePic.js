import React from 'react'
import { Link } from 'react-router-dom'
import slide4 from '../../images/slide1.jpg'
import { UserContext } from '../../App';
import {  useContext } from "react";

const SidePic = () => {
  const user = useContext(UserContext);
  const spinning=()=>{
    user.setLoading(!user.loading);
    setTimeout(()=>{
      
     user.setLoading(false)
    },2000)
 
   }
  return (
    <div>
        <div className=' relative flex flex-col justify-center md:hover:scale-95 duration-500 pb-8  items-center '>
            
            <div className='bg-black '>
            <img src='https://upgradedpoints.com/wp-content/uploads/2019/08/Volunteering.jpg' 
            alt='' className='h-[500px] md:w-[500px] object-cover opacity-60 bg-center'/>
            </div>
          
          <div className='text-center absolute h-40 flex flex-col justify-center items-center '>
          <p className='lg:text-xl 2xsm:text-md py-2 font-bold text-white opacity-70 '>Lorem ipsum dolor sit adipisicing elit.</p>
            <Link to='/join'>
            <button className='text-md   w-[150px]  hover:bg-orange-700 
            duration-500 rounded-3xl outline-2 outline h-[50px] rounded- font-bold text-gray-300 ' onClick={spinning}>
                JOIN NOW
             </button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default SidePic