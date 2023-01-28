import React from 'react'
import volunteer from '../../images/volunteer.jpeg'
import Rules from './Rules'

const Join = () => {
  return (
    <div className='w-full lg:h-[95rem] bg-[#181A1B] mt-20  lg:relative  pt-12'>
        <div className='text-center flex flex-col pt-12 text-[#ffff] justify-center items-center pb-12 text-[40px] '>
             JOIN WITH US
             <hr className='border-b-2 w-44 rounded-md border-orange-400'></hr>
        </div>
        <div className=''>
            <img src={volunteer} alt='' className='w-full 2xsm:h-[300px] lg:h-[600px] object-cover object-bottom'/>

        </div>
    <div className='flex items-center justify-center 2xsm:flex-col md:flex-row 2xl:px-[15rem] 3xl:px-[18%]'>
    <div className='  md:h-[25rem] lg:w-full  '>
            <Rules/>
        </div>
        <div className='md:w-[90%] 2xsm:px-4 shadow-lg 2xsm:bg-[#3c3e3f] 2xsm:w-[100%] xsm:w-[80%] '>
        <div className='lg:w-1/3   lg:absolute xl:right-[200px] 3xl:right-[300px] lg:right-[50px]  top-[600px] '> 

            <form className='flex flex-col justify-start shadow-2xl 2xsm:hidden lg:bg-[#3c3e3f] rounded-md     
            2xsm:w-full lg:mt-8 lg:w-[100%] lg:p-8 2xsm: ' >
            <label className=' text-md  text-[#ffffff]  pt-2'>Name</label>
            <input className='  border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="text" name="user_name" />
            <label className=' text-md  text-[#ffffff] pt-2'>User Id</label>
            <input className=' border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="text" name="user_id" />
            <label className=' text-md  text-[#ffffff] pt-2'>Password</label>
            <input className='border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="password" name="user_passwprd" />
            <label className=' text-md  text-[#ffffff] pt-2'>University</label>
            <input className='border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="text" name="user_passwprd" />
            <label className=' text-md  text-[#ffffff] pt-2'>Phone</label>
            <input className='border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="text" name="user_phone" />
            <label className=' text-md  text-[#ffffff] pt-2'>Email</label>
            <input className='border-[#949090] rounded-xl bg-[#181A1B]  h-[50px] border-[1px] p-3 ' type="email" name="user_email" />
            <label className=' text-md  text-[#ffffff] pt-2'>Message</label>
            <textarea className=' border-[#949090] rounded-xl bg-[#181A1B]  border-[1px] p-3' rows="4"  name="user_t_id" />
            <input className='text-xs  w-[120px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[40px]  font-bold text-white' type="submit" value="JOIN WITH US" />
            </form>

</div>

        </div>
    </div>
    </div>
  )
}

export default Join