import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar';
import LeftSection from '../LeftSection';
import RightSection from '../RightSection';
import Notifications from './Notifications';

const MyNotifications = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1024);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className="bg-custom-gray w-full min-h-screen flex sm:flex-col lg:flex-row relative pt-16 md:flex-row">
    <NavBar className=''/>

    <div className="flex flex-col lg:flex-row w-full">
      <LeftSection />
      <Notifications/>
      {!isMobile && <RightSection />}
    </div>
  </div>
  )
}

export default MyNotifications
