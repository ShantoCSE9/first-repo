import React from 'react'
import {FcDonate} from 'react-icons/fc'
import {MdVolunteerActivism} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';
import {  useContext } from "react";

const Bar = () => {
  const user = useContext(UserContext);
  const spinning=()=>{
   user.setLoading(!user.loading);
   setTimeout(()=>{
     
    user.setLoading(false)
   },2000)

  }
  return (
    <div className='grid bg-[#181A1B] 2xsm:grid-cols-1 2xsm:gap-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-3 '>
        <div className=' bg-[#ac3d09] hover:opacity-90 flex 2xsm:flex-col xxsm:flex-row 2xsm:justify-center 2xsm:items-center 2xl:p-20 p-5'>
            <div className=''>
               <FcDonate className='w-24 h-24 text-[#fff]'/>
            </div>
            <div className='px-4 2xsm:text-center xxsm:text-left'>
                 <p className='text-[25px] font-semibold text-white'> DONATION   </p>
                 <p  className='text-[14px] opacity-70 2xsm:pt-3 text-justify text-white'> There are many variations of lorem
                   passagei of Lorem Ipsum availabl</p>
                   <Link to="/donet">
                   <button className='text-sm w-[130px] hover:bg-white hover:text-black duration-500 rounded-3xl outline-2
                    outline h-[40px] rounded- font-bold mt-3 text-white ' onClick={spinning}>
                     DONATE NOW
             </button>
                   </Link>
            </div>
        </div>
        <div className='bg-[#EA5918] hover:opacity-90 flex 2xl:p-20 p-5 2xsm:flex-col xxsm:flex-row 2xsm:justify-center 2xsm:items-center'>
            <div className=''>
               <MdVolunteerActivism className='w-24 h-24 text-[#fff]'/>
            </div>
            <div className='px-4 text-center  xxsm:text-left'>
                 <p className='text-[25px] font-semibold text-white'> VOLUNTEER </p>
                 <p  className='text-[14px] mt-3 opacity-70 text-justify text-white'> There are many variations of lorem
                   passagei of Lorem Ipsum availabl</p>
                   <Link to="/join">
                   <button className='text-sm w-[130px] hover:bg-white hover:text-black duration-500 rounded-3xl outline-2
                    outline h-[40px] rounded- font-bold mt-3 text-white ' onClick={spinning}>
                     JOIN NOW
             </button>
                   </Link>
            </div>
        </div>
        <div className='bg-[#7c2706] hover:opacity-90 md:bg-[#7a2d0a] 2xsm:flex-col 2xsm:justify-center xxsm:flex-row 2xsm:items-center flex 2xl:p-20 p-5'>
            <div className=''>
               <FcDonate className='w-24 h-24 text-[#fff]'/>
            </div>
            <div className='px-4 text-center  xxsm:text-left'>
                 <p className='text-[25px] font-semibold text-white'> DONATION   </p>
                 <p  className='text-[14px] opacity-70 mt-3 text-justify text-white'> There are many variations of lorem
                   passagei of Lorem Ipsum availabl</p>
                   <Link to="/donet">
                   <button className='text-sm w-[130px] hover:bg-white hover:text-black duration-500 rounded-3xl outline-2
                    outline h-[40px] rounded- font-bold mt-3 text-white ' onClick={spinning}>
                     DONATE NOW
             </button>
                   </Link>
            </div>
        </div>
    </div>
  )
}

export default Bar