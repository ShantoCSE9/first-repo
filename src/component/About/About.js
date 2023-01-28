import React from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import SidePic from './SidePic'
import { UserContext } from '../../App';
import {  useContext } from "react";
const About = () => {
    const user = useContext(UserContext);
    const spinning=()=>{
     user.setLoading(!user.loading);
     setTimeout(()=>{
       
      user.setLoading(false)
     },2000)
  
    }
    return (
        <div className='2xl:px-[18rem] mt-20 3xl:px-[20%] bg-[#181A1B] '>
            <div className=' 2xsm:text-[40px] pt-12  text-[#ffffff]  flex flex-col items-center mb-12   '>
                ABOUT US
            <hr className='border-b-2 w-28 rounded-sm border-orange-400'></hr>
            </div>
            
          
         <div className='grid 2xsm:grid-cols-1 lg:grid-cols-2 gap-4'>
                <SidePic/>
                <div className=' w-[100%] 2xsm:text-md flex flex-col lg:justify-center font-serif xl:text-md py-3  text-[#000000b9] tracking-tight 
                2xsm:px-4  lg:px-12 2xl:px-0 text-justify '>
            
                <Details/>
                  <div className=' '>
                 <Link to='/intro' >
                    <button className='text-xs  w-[100px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[30px] rounded- font-bold text-white' onClick={spinning}>
                       READ MORE
                    </button>
                 </Link>
                 </div>
                </div>
                
         </div>
          
        </div>
    )
}

export default About