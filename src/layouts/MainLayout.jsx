import {Outlet} from 'react-router-dom'
import React from 'react'
import NavSideBar from '../components/NavSideBar'

const MainLayout = () => {
  return (
    <div>
      <NavSideBar></NavSideBar>
      <Outlet />
    </div>
  )
}

export default MainLayout
