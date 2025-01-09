import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 const navigate = useNavigate()

 axios.defaults.withCredentials = true;

 const handelSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,{
        email,
        password
    }).then((res)=>{
      if(res.data.status){
        navigate('/dashboard')
      }
    
    }).catch((err)=>{
        console.log(err)
    })
 }



  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="border-2 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handelSubmit}>
          
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              autoComplete='off'
              id="email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-blue-400 to-purple-600 p-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <Link to={'/forgotpassword'} className='text-blue-600 font-bold underline'>Forgot Password</Link>
          <p>Don't Have an Account? <Link to={'/signup'}  className='text-blue-600  underline'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login