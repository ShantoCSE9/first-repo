import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {RiArrowDropDownLine} from "react-icons/ri"
import logo from '../../images/logo.png'
//importing typewriter-effect
import { UserContext } from '../../App';
import {  useContext } from "react";
import FirstNav from './FirstNav';
import Second from './Second';
import ThirdNav from './ThirdNav';
import { data } from 'autoprefixer';

const Navbar = () => {
  const user = useContext(UserContext);
  const spinning=()=>{
   user.setLoading(!user.loading);
   setTimeout(()=>{
     
    user.setLoading(false)
   },2000)

  }
const [state,set]=useState(false);
const [state2,set2]=useState(false);
const [state3,set3]=useState(false);
const [state4,set4]=useState(false);
window.onscroll=()=>{
  if(window.pageYOffset>140){
   set4(true)
  }
  else set4(false)
}
let val;

const aboutOpen=()=>{
  set2(!state2);
 
}
const insideBarOpen=()=>{
  set3(!state3);
  
}

const getData=(data)=>{
  data.set(!data.state);
  console.log(data.state);

}

  return (
    <nav className='bg-[#000] '>
     <div className='bg-[#ffff]   z-40'>
         <FirstNav/>                
     </div>

     <div className=' z-40' >
       <Second/>
     </div>
     <div className='lg:hidden'>
     <ThirdNav/>
     </div>
  
    
   
   
    </nav>
  
  )
}

export default Navbar