import {React, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Toaster, toast} from 'sonner'

const UserLoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        toast('You have succesfully signed in!', {
            onAutoClose: (t) => navigate('/otp'),
            duration: 1500,
        })
      };

  return (
    <section className='flex justify-center w-screen h-screen'>
        <Toaster richColors />
        <div className='bg-[url("/images/login-slide-1.jpg")] bg-cover bg-center w-[50%] h-full' />
        <div className='bg-white w-[50%]'>
            <div className='bg-[url("/images/web-logo.jpg")] bg-center w-full h-48 bg-no-repeat' />
            <div className='px-12 pt-16 text-4xl font-semibold'>Welcome User!</div>
            <div className='px-12 pt-3 text-sm font-semibold text-gray-400'>Welcome Back. Please enter your details</div>

            <form onSubmit={handleSubmit} className='px-12 py-16 space-y-3 align-text-top'>
                <div className='flex justify-center h-10'>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className='border-2 rounded-full w-5/6 h-full p-2' 
                    />
                    <svg className="w-6 h-6 mt-2 -ml-10 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                    </svg>
                </div>
                <div className='flex justify-center h-10'>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border-2 rounded-full w-5/6 h-full p-2'   
                    />
                    <svg className="w-6 h-6 mt-2 -ml-10 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
                    </svg>

                </div>
                <div className="flex justify-center pt-8">
                    <button type='submit' className='border-2 rounded-full w-1/2 h-12 bg-[#E28413] text-white text-sm hover:bg-[#ffbc6b]'>Login</button>
                </div>
                <div className='flex text-sm justify-center px-12'>
                    <Link className="" to="">Forgot Password?</Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default UserLoginPage
