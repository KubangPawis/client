import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavSideBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = ()=> {
      setNav(!nav)
    }

  return (
    <div className='flex items-center content-center h-24 max-w-[1280px] mx-auto px-4 border-b border-gray-300'>
      <h1 className='w-full text-3xl font-bold text-[#E28413]'>LALOGYAN</h1>
      <ul className='flex'>
        <Link to='/admin' className='px-4 py-2 m-2 bg-[#E28413] text-sm hover:bg-[#ffbc6b] text-white rounded-sm'>Home</Link>
        <Link to='/' className='px-4 py-2 m-2 bg-[#E28413] text-sm hover:bg-[#ffbc6b] text-white rounded-sm'>Logout</Link>
      </ul>
      <div onClick={handleNav} className='m-3'>
          {!nav ? <AiOutlineClose className='cursor-pointer' size={20}/> : <AiOutlineMenu className='cursor-pointer' size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r-2 border-gray-600 bg-[#000022] ease-in-out duration-500 text-white' : 'fixed left-[-100%] '}>
      <h1 className='w-full text-3xl font-bold text-[#E28413] m-8'>LALOGYAN</h1>

        <div className='flex flex-col uppercase p-4'>
          <Link to='/edit-info' className='p-4 border-b-2 border-gray-600 bg-[#000022] hover:bg-[#030345]'>Edit Account Information</Link>
          <Link to='/permissions' className='p-4 border-b-2 border-gray-600 bg-[#000022] hover:bg-[#030345]'>Permissions Management</Link>
          <Link className='p-4 border-b-2 border-gray-600 bg-[#000022] hover:bg-[#030345]'>Log File Management</Link>
          <Link to='/user-logs' className='p-4 bg-[#000022] hover:bg-[#030345]'>User Activity Logs</Link>
        </div>
      </div>
    </div>
  )
}

export default NavSideBar
