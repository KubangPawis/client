import React from 'react'
import { Link } from 'react-router-dom'

const SelectLogin = () => {
  return (
    <section className='flex justify-center pt-64 bg-[url("/images/login-slide-1.jpg")] bg-cover bg-center w-full h-screen'>
      <div className='w-96 h-60 bg-white rounded-md shadow-md'>
            <div className="text-center text-3xl text-bold font-bold pt-16">Hi!</div>
            <div className="text-center text-sm pt-2 text-gray-600">Please select login type.</div>
            <div className='w-full flex justify-center pt-4 space-x-4'>
                <Link to='login-admin' className='px-4 py-2 m-2 bg-[#E28413] text-sm hover:bg-[#ffbc6b] text-white rounded-sm'>Admin</Link>
                <Link to='login-user' className='px-4 py-2 m-2 bg-[#E28413] text-sm hover:bg-[#ffbc6b] text-white rounded-sm'>User</Link>

            </div>
      </div>
    </section>
  )
}

export default SelectLogin
