import React from 'react'
import NavSideBar from '../components/NavSideBar'
import Dashboard from '../components/Dashboard'

const AdminHomePage = () => {
  return (
    <div>
      <NavSideBar></NavSideBar>
      <div className='flex items-center h-24 max-w-[1240px] mx-auto px-4 text-3xl text-bold font-bold'>Dashboard</div>
      <Dashboard />
    </div>
  )
}

export default AdminHomePage
