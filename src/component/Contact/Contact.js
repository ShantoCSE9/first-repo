import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7fmt04a', 'template_31odsoc', form.current, 't1DwtJRPnqID_c0_u')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex flex-col 2xl:px-[15rem] 3xl:px-[18%] py-12'>
        <div className=' 2xsm:text-[40px]  mb-12 text-[#ffffff]  flex flex-col items-center   '>
                CONTACT
            <hr className='border-b-2 w-28 rounded-md border-orange-400'></hr>
            </div>
                <div className=' flex justify-center  '> 

                <form className='flex flex-col xsm:w-[80%] shadow-lg  bg-[#181A1B] justify-start  rounded-md shadow-gray-600  md:p-12 2xsm:w-full lg:mt-8 lg:w-[40%] p-4' ref={form} onSubmit={sendEmail}>
                <label className=' text-sm text-[#ffffff]  py-2'>Name</label>
                <input className=' border-[#949090] rounded-xl bg-[#ffff]  h-[50px] border-[1px] p-3 ' type="text" name="user_name" />
                <label className=' text-md text-[#ffffff] pt-2'>Email</label>
                <input className=' border-[#949090] rounded-xl bg-[#ffff]  h-[50px] border-[1px] p-3  ' type="email" name="user_email" />
                <label className=' text-md text-[#ffffff] pt-2'>Message</label>
                <textarea className=' border-[#949090] rounded-xl bg-[#ffff]  border-[1px] p-3  ' rows="8" name="message" />
                <input className='text-xs  w-[100px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[30px] rounded- font-bold text-white cursor-pointer' type="submit" value="Send" />
                </form>

</div>
    </div>
   
  )
}

export default Contact