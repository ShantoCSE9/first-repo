import React, { useState } from 'react'
import {BsFacebook} from 'react-icons/bs'

const AllMembers = (props) => {

  const [state,set]=useState(false);
  const colorDiv=()=>{
    set(!state);
  }
  return (
    <div className='h-auto  shadow-xl relative border-2  border-yellow-900 transfrom duration-300 bg-[#ffffff] ' onMouseEnter={colorDiv}  onMouseLeave={colorDiv}> 
        <div className={`${state?' 2xsm:h-full z-20 visible':"2xsm:h-0  top-0"} absolute   md:block 2xsm:hidden
        duration-300  w-full bg-[#EC5C1C] opacity-50 ` }>
        
      </div>
     
           <div className='flex justify-center relative '>
                <img src={props.rana} className=' object-cover w-full bg-center ' alt=""/>
                <div className={`${state?' md:visible z-20':"md:invisible"} absolute  flex flex-col bottom-0  justify-center  `}>
                <BsFacebook className='mx-auto rounded-full w-12 hover:cursor-pointer text-stone-50 h-12 bg-blue-600'/>
      </div>
            </div>
     <div className='flex flex-col p-4 text-black  2xsm:text-sm items-center text-center'>
          
            <div className=''>
            মোঃ রনি ইসলাম,সভাপতি
            </div>
            <div>
            ইংরেজি বিভাগ, সেশন(২০১৭-১৮)
            </div>
            <div>
            বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও
             প্রযুক্তি বিশ্ববিদ্যালয়
            </div>
    </div>
    </div>
                       
  )
}

export default AllMembers