import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState ,createContext,React} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BsArrowUpCircleFill} from 'react-icons/bs'
import Background from './component/Background/Background';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Introduction/Intro';
import Donet from './component/Donet/Donet';
import Contact from './component/Contact/Contact';
import FadeLoader from "react-spinners/FadeLoader";
import pic from '../src/images/slide4.jpg'
import Footer from './component/Footer/Footer';
import Join from './component/Join/Join';
export const UserContext = createContext();
function App() {
  let [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     
     setLoading(false)
    },2500)
  },[])
  return (
    
    <BrowserRouter>
    <UserContext.Provider value={{
      loading,setLoading
    }}>
    {
      loading? <div className='w-full h-[100vh] flex justify-center items-center bg-[#181A1B]'>
         <FadeLoader  size={150} color={'#ea5918'} aria-label="Loading Spinner" data-testid="loader" />
      </div>
      :  
     <>
     <div className='bg-[#181A1B]  -z-50 fixed w-full h-full'>
      <img src={pic} className='w-full opacity-10 h-full object-cover ' alt=''/>
     </div>
      <BsArrowUpCircleFill onClick={()=>{
        window.scroll(0,0);
      }} className='right-5 bottom-5 fixed text-[50px] cursor-pointer  bg-slate-600 rounded-full z-40 text-[#ff780a]'/>
      <Navbar/>
       <Routes>
         <Route >
           <Route path="back" element={<Background/>} />
           <Route path="intro" element={<Intro/>} />
           <Route path="donet" element={<Donet/>} />
           <Route path="contact" element={<Contact/>} />
           <Route path="join" element={<Join/>} />
           <Route path="" element={ <Home/>} />
         
           
         </Route>
       </Routes>
       <Footer/>
     
     </>
    }
</UserContext.Provider>
   </BrowserRouter>
   
  
  );
}

export default App;
