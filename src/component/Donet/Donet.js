import React from 'react'
const Donet = () => {
    window.scrollTo(0,0);
   
  
  return (
    <div className='flex flex-col 2xl:px-[15rem] mb-16  3xl:px-[18%]'>
    <div className=' 2xsm:text-[40px]   text-[#0c0000]  flex flex-col items-center mb-12 mt-12  '>
       DONET
        <hr className='border-b-2 w-28 rounded-sm border-orange-400'></hr>
        </div>
            <div className=' flex justify-center '> 

            <form className='flex flex-col justify-start bg-gray-300 rounded-sm
             shadow-gray-600 shadow-lg md:p-12 2xsm:w-full lg:mt-8 lg:w-[50%] p-4'>
            <label className=' text-lg font-semibold text-[#0e0000]  pt-2'>Name</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px]  p-3 ' type="text" name="user_name" />
            <label className=' text-lg font-semibold text-[#070000] pt-2'>User Id</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px]  p-3 ' type="text" name="user_id" />
            <label className=' text-lg font-semibold text-[#070000] pt-2'>Password</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px] p-3 ' type="password" name="user_passwprd" />
            <label className=' text-lg font-semibold text-[#070000] pt-2'>Phone</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px] p-3 ' type="text" name="user_phone" />
            <label className=' text-lg font-semibold text-[#070000] pt-2'>Email</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px] p-3 ' type="email" name="user_email" />
            <label className=' text-lg font-semibold text-[#070000] pt-2'>Transection Id</label>
            <input className=' border-[#5f646b] rounded-sm border-2 h-[50px] p-3 ' type="text" name="user_t_id" />
            <input className='bg-[#6b2c02]  2xsm:text-[12px] sm:text-[15px] my-4 rounded-sm 
             hover:bg-[#173875]  2xsm:px-8 2xsm:w-[100px] md:w-[150px] py-2 font-semibold text-[#ffffff]' type="submit" value="Send" />
            </form>

</div>
</div>
  )
}

export default Donet