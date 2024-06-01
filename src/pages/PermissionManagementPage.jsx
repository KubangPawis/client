import React from 'react'
import AdminPermissionTable from '../components/AdminPermissionTable'

const PermissionManagementPage = () => {
  return (
    <div>
        <div className='flex h-24 max-w-[1240px] mx-auto px-4 pt-12 text-3xl text-bold font-bold'>Permissions Management</div>
        <AdminPermissionTable></AdminPermissionTable>
        <button className='ml-20 mt-2 text-center border-2 rounded-sm w-48 h-10 bg-[#E28413] text-white text-sm hover:bg-[#ffbc6b]'>Commit Changes</button>
    </div>
  )
}

export default PermissionManagementPage
