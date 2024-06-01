import React from 'react'

const PermissionBoxes = ( {} ) => {
  return (
    <div className='flex space-x-3'>
      <input type='checkbox' className='read' />
      <input type='checkbox' className='write' />
      <input type='checkbox' className='update' />
      <input type='checkbox' className='delete' />

    </div>
  )
}

export default PermissionBoxes
