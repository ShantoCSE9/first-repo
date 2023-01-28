import React from 'react'
import Footer from '../Footer/Footer';
import About from '../About/About';
import Event from '../Events/Event';
import Navbar from '../Navbar/Navbar';
import OurMembers from '../OurMembers/OurMembers';
import SlideBar from '../SlideBar/SlideBar';
import Bar from '../Bars/Bar';
import Contact from '../Contact/Contact';
import Donet from '../Donet/Donet';
import Join from '../Join/Join';
const Home = () => {
  return (
    <div className=' overflow-hidden'>

      <SlideBar/>
      <Bar/>
      <About/>
      <Event/>
      <OurMembers/>
      <Join/>
      <Contact/>

    </div>
  )
}

export default Home