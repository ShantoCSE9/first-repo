import React, { useState } from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import NavHeading from './NavHeading';

const Second = () => {
  const [state,set]=useState(false);



  return (
    <div>
         <div className='lg:flex lg:h-[100px] 2xsm:hidden z-40  2xl:mx-[15.2rem] 3xl:mx-[20%]
          bg-black lg:px-8 relative lg:justify-start  2xsm:justify-between'>
                    <div>
                      <img src={logo} className={` 2xsm:w-[50px]  sm:w-16 roun`} alt=''/>
                    </div>
                   <NavHeading/>
                   
                    <div className='lg:block hidden lg:absolute right-0'> 
                       <ul className='flex  items-center font-bold text-[#ffff] '>
                        <li className='p-4'>HOME</li>
                        <li className='p-4 flex leading-tight items-center'>ABOUT US  <RiArrowDropDownLine className=' hover:text-[#AD6334]
                                         text-[2.8rem]  2xsm:hidden lg:block '/> </li>
                        <li className='p-4'>EVENT</li>
                        <li className='p-4'>CONTACT</li>
                        <li className='p-4'>DONET</li>
                       </ul>
          
                    </div>
         </div>

        

    </div>
  )
}

export default Second