import React from 'react'
import AuditTrail from '../components/AuditTrail'

const UserLogPage = () => {
  return (
    <div>
        <div className='flex justify-center h-24 max-w-[1240px] mx-auto px-4 pt-12 text-3xl text-bold font-bold'>View User Activity Logs</div>
        <AuditTrail />
    </div>
  )
}

export default UserLogPage
