import React from 'react'
import { Link } from 'react-router-dom'
import ForgotPass from '../components/ForgotPass'

const SelectLogin = () => {
  return (
    <section className='flex justify-center pt-64 bg-[url("/images/login-slide-1.jpg")] bg-cover bg-center w-full h-screen'>
      {/* <div className='w-96 h-60 bg-white rounded-md shadow-md'>
      </div> */}
      <ForgotPass></ForgotPass>
    </section>
  )
}

export default SelectLogin
