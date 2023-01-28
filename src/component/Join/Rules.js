import React from 'react'
import { UserContext } from '../../App';
import {  useContext } from "react";
import { Link } from 'react-router-dom'
const Rules = () => {
    const user = useContext(UserContext);
    const spinning=()=>{
     user.setLoading(!user.loading);
     setTimeout(()=>{
       
      user.setLoading(false)
     },2000)
  
    }
  return (
    <div className=' md:flex justify-center flex-col  xl:h-[35rem] items-center'>

   <div className='lg:w-full text-white text-justify lg:px-12 xl:px-12 2xsm:px-4 '>
   <p className=' 2xsm:text-[20px] font-semibold lg:text-[30px] py-4'> সদস্যপদ লাভঃ </p> 
    <p className='text-[17px] leading-tight'>(ক) উচ্চমাধ্যমিক ও স্নাতক ও স্নাতকোত্তর পর্যায়ের শিক্ষার্থী হতে হবে।</p>
    <p className='text-[17px] leading-tight'>(খ) সাংগঠনিক ব্যাপারে আগ্রহী হতে হবে।   </p>
    <p className='text-[17px] leading-tight'>(গ) নির্ধারিত ফি প্রদান প্রদানপূর্বক সদস্য আবেদন ফরম পূরণ করতে হবে।  </p>
    <p className='text-[17px] leading-tight'>(ঘ) লক্ষ্য, আদর্শ ও উদ্দেশ্য মেনে উন্নয়নমূলক কর্মকান্ডের মানসিকতা সম্পন্ন হতে হবে।</p>
    <p className='text-[17px] leading-tight'>(ঙ) সংগঠনের অর্পিত দায়িত্ব সক্রিয়ভাবে পালন করতে হবে।  </p>
    <p className='text-[17px] leading-tight'>(ক) প্রতিমাসের শেষ শুক্রবার মাসিক সভায় নিয়মিত উপস্থিত থাকতে হবে। </p>
    <p className='text-[17px] leading-tight'>(খ) সংগঠনের মূলমন্ত্র , শ্লোগান , পথ এবং লক্ষ্য ও উদ্দেশ্য যেন প্রতিফলিত হয় সেদিকে লক্ষ্য থাকতে হবে।  </p>
    <p className='text-[17px] leading-tight'>(গ) প্রতিবছর নির্ধারিত সদস্য নবায়ন ফি প্রদান করতে হবে।   </p>
    <p className='text-[17px] leading-tight'>(ঘ) সংগঠনের সদস্যদের উপর অর্পিত দায়িত্ব যথাযথভাবে পালন করা।</p>

    <div className=' '>
                 <Link to='/intro' >
                    <button className='text-xs  w-[100px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[30px] rounded- font-bold text-white' onClick={spinning}>
                       READ MORE
                    </button>
                 </Link>
                 <Link to='/join' >
                    <button className='text-xs lg:hidden ml-4 w-[100px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[30px] rounded- font-bold text-white' onClick={spinning}>
                       JOIN WITH US
                    </button>
                 </Link>
                 </div>
   </div>
    

  </div>
  )
}

export default Rules