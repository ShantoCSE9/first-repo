import React, { useState,useRef,useEffect } from 'react'
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg'
import slide4 from '../../images/slide4.jpg'
import Slide from './Slide'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { EffectFade,Autoplay } from "swiper";
import SlideText from '../SlideText/SlideText'
export const store=[
  {
    firstTitle:'Lorem ipsum dolor sit amet, consectetur',
    secondTitle:'  Error totam eveniet recusandae cor.',
    btnText:'JOIN NOW',
    image:slide2
  },
  {
    firstTitle:'Lorem ipsum dolor sit amet, consectetur.',
    secondTitle:'  Error totam eveniet recusandae cor.',
    btnText:'DONET NOW',
    image:slide3
  },
   {
    firstTitle:'Lorem ipsum dolor sit amet, consectetur.',
    secondTitle:'  Error totam eveniet recusandae cor.',
    btnText:'CONTACT',
    image:slide1
  }

]

const SlideBar = () =>{
  const [state,set]=useState(0)
  const count=useRef(-1)
  useEffect(() => {
    const interval = setInterval(() => {
      count.current=0; 
      set2(2) 
    }, 100);
    return () => clearInterval(interval);
  }, []);
  const [state2,set2]=useState(0)

return (
    <div>
      <Swiper
         spaceBetween={10}
         effect={"fade"}
         autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}

         rewind={true}
         modules={[EffectFade,Autoplay]}
         onSlideChange={(swiper) => {
          set(swiper.activeIndex)           
         }}
     >
        
    {
      store.map((items)=>{
       return  <SwiperSlide  className='relative md:mt-2 mb-[3px]'>        
                    {state===0&&  <Slide slide3={items.image}/>}
                    {state===1&& <Slide slide3={items.image}/>}
                    {state===2&& <Slide slide3={items.image}/>}
                    <div  className={`${state2==0&&'-top-40'} w-full duration-700 absolute 
                                  ${count.current==0&&state==0 ? '2xsm:top-[50%] ':'-top-40'}`}>
                                  {state===0&& <SlideText value={items}/>}
                    </div>
                              
                    <div className={`${state==1? 'm 2xsm:top-[50%]':' -top-40'} absolute  duration-700 w-full`}>       
                                {state===1&& <SlideText value={items}/>}
                    </div>
                    <div className={`${state==2? '2xsm:top-[50%]':' -top-40'} absolute  duration-700 w-full`}>       
                                {state===2&& <SlideText value={items}/>}
                    </div>
                 
                </SwiperSlide >        
            })
          }
             
      </Swiper>
    </div>
  );
}






export default SlideBar