import React from 'react'
import NavBar from '../Navbar'
import ConnectionsPage from './ConnectionsPage'
import LeftSection from '../LeftSection'

const MyConnections = () => {
  return (
    <div className='bg-custom-gray min-h-screen'>
        <NavBar/>
        <div className='mt-17 flex flex-col lg:flex-row relative'>
            <LeftSection/>
            <ConnectionsPage/>
        </div>
    </div>
  )
}

export default MyConnections
