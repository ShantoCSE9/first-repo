import React from 'react'
import Typewriter from "typewriter-effect";
const NavHeading = () => {
  return (
    <div>
         <div className='2xsm:text-[15px]   xsm:text-[20px]  
                                    2xsm:mt-4  text-center lg:w-44 xsm:w-[170px] 2xsm:w-[140px]
                                    text-[#fff0c7]   font-bold font-[SolaimanLipi]'>
                                      <Typewriter className=""
                              options={{
                                strings: `মানব প্রেমে উদ্ভাসিত হোক তৃষিত এই ধরণী`,
                                autoStart: true,
                                loop: true,
                                delay: 75,
                              }}
                            />
                       
                    </div>
    </div>
  )
}

export default NavHeading