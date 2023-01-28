import {React,useState} from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import {AiOutlineMenu} from 'react-icons/ai'
import logo from '../../images/logo.png'
import NavHeading from './NavHeading'
const ThirdNav = () => {
  const barOpen=()=>{
  set(!state);
    
}
const [state,set]=useState(false);
  return (
    <div className='bg-[#000000] h-[90px] relative flex justify-between 2xsm:w-[100%]  xsm:w-[100%]  '>
           <div className='z-40 bg-black w-[33%]'>
                      <img src={logo} className={` 2xsm:w-[50px]  sm:w-16 roun`} alt=''/>
                    </div>
                    <div className='z-40 w-[34%] bg-black flex justify-center'>
                    <NavHeading/>
                    </div>
       <div className='z-40 w-[33%] bg-black flex justify-end'>
                      <h1 className={`2xsm:text-[30px]  2xsm:p-4 w-[60px] text-center cursor-pointer `} onClick={barOpen}>
                      <AiOutlineMenu className='text-[#fff0c7]'/>
                      </h1>
                    </div>
       <div className={ `${state? 'top-[90px] duration-500 z-10':'duration-500 absolute z-10 top-[-260px]'} 
                        absolute  h-72 w-full md:w-[40%] bg-gray-800`} >
       <ul className='text-white font-semibold'>
            <li className='p-4 border-b'>HOME</li>
            <li className='px-4 border-b flex  justify-between'><span className='py-4'>ABOUT US </span>
             <RiArrowDropDownLine className=' hover:text-[#AD6334]
                                         text-[2.8rem] p-0  '/> </li>
            <li className='p-4 border-b'>EVENT</li>
            <li className='p-4 border-b'>CONTACT</li>
            <li className='p-4 '>DONET</li>
        </ul>
       </div>
    </div>
  )
}

export default ThirdNav