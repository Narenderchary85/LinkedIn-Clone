import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar'
import Chat from './Chat'
import LeftSection from '../LeftSection';
import RightSection from '../RightSection';

const Messages = () => {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
      
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div className='bg-custom-gray'>
      <NavBar/>
      <div className="flex flex-col lg:flex-row w-full mt-17">
      <LeftSection />
        <Chat/>
        {!isMobile && <RightSection />}
      </div>
    </div>
  )
}

export default Messages
