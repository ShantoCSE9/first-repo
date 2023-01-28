import React from 'react'
import {BiCopyright} from 'react-icons/bi'
const Footer = () => {

  return (
    <div className='flex justify-center items-center h-[80px] bg-black'>
       <div className='w-52 text-white flex '>
       <BiCopyright className=' w-8 h-8 px-1'/> <span className='pt-1'>SHWAPNOPHEERI.COM</span>
       </div>
   
    </div>
  )
}

export default Footer