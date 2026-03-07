import React, { useEffect } from 'react'
import Navbar from '../../components/Hotelowner/Navbar'
import Sidebar from '../../components/Hotelowner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const {isOwner, navigate}= useAppContext();
   
  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[isOwner])

  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
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