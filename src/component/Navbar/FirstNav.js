import React from 'react'
import {MdPhoneInTalk} from 'react-icons/md'
const FirstNav = () => {
  return (
   
      <div className='flex h-[90px] 2xsm:px-4 z-40  relative justify-between bg-[#aa3e0d]'>
            <div className='flex w-full justify-center pt-4 items-center space-x-1 '>
            <div className="text-[#ffffff] 2xsm:text-sm xsm:text-lg ">
                <h1 className='pt-1'>SHWAPNOPHEERI</h1>
              </div>
       
           <div className='flex space-x-1 2xsm:text-sm xsm:text-lg text-[#ffffff]'>
           <MdPhoneInTalk className=' 2xsm:text-[30px]  mt-1'/>
               <h1 className='2xsm:pt-2 xsm:pt-1'>01307362599</h1>
            </div>
            </div>

            <div className='absolute right-2 top-2  h-[30px] '>
            <button >
                      <MdPhoneInTalk className='2xsm:text-[25px] text-gray-400 '/>
            </button>
            </div>
        </div> 
  )
}

export default FirstNav