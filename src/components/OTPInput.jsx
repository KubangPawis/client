import React from 'react'
import { useNavigate } from 'react-router-dom';

const OTPInput = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        navigate("/admin");
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex w-full justify-center gap-3'>
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 autofocus required'} />
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 required'} />
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 required'} />
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 required'} />
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 required'} />
                <input type='text' maxLength={1} className={'w-24 h-24 text-4xl text-center bg-white border-2 border-solid border-slate-500 focus:border-blue-600 required'} />
            </div>
            <div className='flex w-full justify-center pt-12'>
                <span className='text-xl text-center text-gray-600'>Did you receive the OTP? </span>
                <a className='text-xl text-center text-gray-600 pl-1'>Resend</a>
            </div>
            <div className='flex w-full justify-center pt-4'>
                <button type='submit' className='text-white text-sm border-2 rounded-full w-1/2 h-12 bg-[#E28413] hover:bg-[#ffbc6b]'>VERIFY</button>
            </div>
        </form>
    </div>
  )
}

export default OTPInput
