import React from 'react'
const SlideText = (props) => {
  return (
    <div className='sm:text-center'>
      
        <div className='2xl:px-[18rem]  3xl:px-[22%] md:text-center lg:text-left 2xsm:pl-4 lg:px-12 '>
          <p className='3xl:text-[50px] lg:text-[30px] sm:text-[25px] xsm:text-[20px] xxsm:text-[17px] 2xsm:text-[15px] font-bold text-[#ffffff] font-sans '>
            {props.value.firstTitle} 
          </p>
          <p className='3xl:text-[40px] lg:text-[25px]  sm:text-[20px] xsm:text-[15px] 2xsm:text-[14px] font-bold text-[#f57d1c] font-sans '>
            {props.value.secondTitle}
          </p>
       
        
          
          <button className='md:text-sm 2xsm:text-[10px] 2xsm:w-[90px] 2xsm:h-[30px] md:w-[130px] hover:bg-white hover:text-black duration-500 rounded-3xl outline-2
                    outline md:h-[40px] rounded- font-bold mt-3 text-white '>
                     {props.value.btnText}
          </button>
        </div>
    </div>
  )
}

export default SlideText