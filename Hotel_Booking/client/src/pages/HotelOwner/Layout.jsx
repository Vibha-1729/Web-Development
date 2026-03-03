import React from 'react'
import NavBar from '../../components/Hotelowner/NavBar'
import Sidebar from '../../components/Hotelowner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <NavBar />
        <div className='flex h-full'>
            <Sidebar />
            <div className="flex-grow ml-10 pt-8 px-8">
              <Outlet />
            </div>
        </div >
    </div>
  )
}

export default Layout