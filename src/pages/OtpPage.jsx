import React from 'react'
import OTPInput from '../components/OTPInput'

const OtpPage = () => {
  return (
    <section className='flex justify-between w-screen h-screen'>
        <div className='bg-[url("/images/login-slide-1.jpg")] bg-cover bg-center w-3/12 h-full blur-sm' />

        <div>
            <h1 className='text-3xl font-semibold text-center pt-56 pb-4'>OTP Verification</h1>
            <p className='text-lg text-center text-gray-600 pb-12'>Code has been sent to ***********</p>
            <OTPInput></OTPInput>
        </div>

        <div className='bg-[url("/images/login-slide-1.jpg")] bg-cover bg-center w-3/12 h-full blur-sm' />
    </section>
  )
}

export default OtpPage
