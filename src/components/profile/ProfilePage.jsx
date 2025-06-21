import React, { useEffect, useState } from 'react'
import ProfileSection from './ProfileSection'
import NavBar from '../Navbar'
import ProfileSideBar from './ProfileSideBar'

const ProfilePage = () => {
     const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
      
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth < 1024);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
  return (
    <div className='bg-custom-gray w-full min-h-screen flex sm:flex-col lg:flex-row relative pt-16 md:flex-row'>
        <NavBar/>
        <div className='flex w-full min-h-screen relative'>
        <ProfileSection/>
        {!isMobile && <ProfileSideBar />}
        </div>
    </div>
  )
}

export default ProfilePage
