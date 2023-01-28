import React from 'react'
import EventCard from './EventCard'
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide4 from '../../images/slide4.jpg'

const Event = () => {
  return (
   <div className='2xl:px-[15rem] my-20 bg-[#181A1B] 3xl:px-[18%]  '>
   <div className=' 2xsm:text-[40px] pt-12  text-[#ffffff]  flex flex-col items-center mb-12   '>
                RECENT EVENTS
            <hr className='border-b-2 w-40 rounded-sm border-orange-400'></hr>
            </div>
    <div  className='2xsm:px-4 lg:px-12 md:grid-cols-3 grid gap-3 2xsm:grid-cols-1 md:grid-rows-1 
    xsm:grid-rows-2 sm:grid-cols-2 2xsm:w-full'>
      <div >
      <EventCard slide={slide1}/>
      <div className=''>
        
      </div>
      </div>
      <div >
      <EventCard slide={slide2}/>
      </div>
      <div >
      <EventCard slide={slide4}/>
      </div>

    </div>
   </div>
  )
}

export default Event