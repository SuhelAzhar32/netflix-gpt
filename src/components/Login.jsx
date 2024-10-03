import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false)

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg' alt='bg-img' />
        </div>
        <form className='absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign Up' : 'Sign In'}</h1>
        {
            isSignIn && (
            <input 
            type='text' 
            placeholder='full name' 
            className='p-3 my-4 w-full bg-gray-700 rounded-lg' 
            />
            )
        }
            <input 
            type='text' 
            placeholder='email address' 
            className='p-3 my-4 w-full bg-gray-700 rounded-lg' 
            />
            <input 
            type='password' 
            placeholder='password' 
            className='p-3 my-4 w-full bg-gray-700 rounded-lg' 
            />
            <button className='p-3 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignIn ? 'Sign Un' : 'Sign In'}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignIn ? 'Already a User, Login In' : 'New to Netflix? sign up now'}
                </p>
        </form>
    </div>
  )
}

export default Login