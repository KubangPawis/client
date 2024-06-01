import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section>
        <div className='flex justify-center w-screen'>
            <img src="/images/error-404.png" alt="" className='w-96 h-96'/>
        </div>
        <div className='flex justify-center text-4xl pt-12'>Page Not Found</div>
        <div className='flex justify-center text-gray-600 text-lg pt-2'>Sorry! The page that you are trying to access does not exist.</div>
        <div className="flex justify-center pt-12">
            <button onClick={()=> {
              navigate('/admin')
            }} className='border-2 rounded-sm w-48 h-10 bg-[#E28413] text-white text-sm hover:bg-[#ffbc6b]'>Back to Main Menu</button>
        </div>
    </section>
  )
}

export default NotFoundPage
