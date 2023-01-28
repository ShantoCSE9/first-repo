import React from 'react'
import { Link } from 'react-router-dom'
import rana from '../../images/rana.jpg'
import AllMembers from './AllMembers'
import { UserContext } from '../../App';
import {  useContext } from "react";
const OurMembers = () => {
  const user = useContext(UserContext);
  const spinning=()=>{
   user.setLoading(!user.loading);
   setTimeout(()=>{
     
    user.setLoading(false)
   },2000)
  }
  return (
    <div className='2xl:px-[15rem] 3xl:px-[18%] mt-20 relative bg-[#181A1B]'>
        
        <div className=' 2xsm:text-[40px] pt-12   text-[#ffffff]  mb-12  flex flex-col items-center   '>
                OUR MEMBERS
            <hr className='border-b-2 w-36 rounded-sm border-orange-400'></hr>
            </div>
        
     <div  className='grid 2xsm:grid-cols-1 2xsm:px-4 lg:px-12 gap-3 md:grid-cols-3 lg:grid-cols-4 xsm:grid-cols-2'>
      
      <AllMembers className='' rana='https://t4.ftcdn.net/jpg/01/84/13/49/360_F_184134945_ywKjEaXqz8ZzEWvpiXLUyy7ZwKkUNjFB.jpg'/>
      <AllMembers rana='https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?w=2000'/>
      <AllMembers rana='https://st4.depositphotos.com/1017228/20766/i/450/depositphotos_207663178-stock-photo-image-happy-young-man-standing.jpg'/>
      <AllMembers rana='https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'/>   
     </div>
     <div className='text-[#ffffff]  font-bold pb-12  2xsm:px-4 lg:px-12'>
         <Link to='/back'>  <button className='text-xs  w-[100px] my-4  hover:bg-orange-400 duration-500 
                            rounded-3xl outline-2 outline-gray-300 outline h-[30px] rounded- font-bold' onClick={spinning}>
                    SEE ALL</button> </Link> 
         </div>

    </div>
  )
}

export default OurMembers