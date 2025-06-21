import React from 'react'
import NavBar from '../Navbar'
import LeftSection from '../LeftSection'
import Jobs from './Jobs'

const Myjobs = () => {
  return (
    <div className='bg-custom-gray min-h-screen'>
        <NavBar/>
      <div className='mt-17 flex flex-col lg:flex-row relative'>
            <LeftSection/>
            <Jobs/>
        </div>
    </div>
  )
}

export default Myjobs
