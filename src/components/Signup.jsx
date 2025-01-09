import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {

 const [username,setUsername] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 const navigate = useNavigate()

 const handelSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`,{
        username,
        email,
        password
    }).then((res)=>{
      if(res.data.status){
        alert(res.data.message)
        navigate('/login')
      }
    
    }).catch((err)=>{
        console.log(err)
    })
 }


//  `${import.meta.env.VITE_BACKEND_URL}/auth/signup`

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-md border-2">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

  <form onSubmit={handelSubmit}>
  {/* Username Field */}
  <div className="mb-4 relative">
    <input
      type="text"
      name="username"
      id="username"
      required
      onChange={(e) => setUsername(e.target.value)}
      className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your username"
    />
    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      account_circle
    </span>
  </div>

  {/* Email Field */}
  <div className="mb-4 relative">
    <input
      type="email"
      autoComplete="off"
      id="email"
      required
      onChange={(e) => setEmail(e.target.value)}
      className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your email"
    />
    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      mail
    </span>
  </div>

  {/* Password Field */}
  <div className="mb-6 relative">
    <input
      type="password"
      id="password"
      required
      onChange={(e) => setPassword(e.target.value)}
      className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your password"
    />
    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      lock
    </span>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-gradient-to-br from-blue-300 to-purple-500 text-black p-2 rounded-md"
  >
    Sign Up
  </button>
  <p>
    Have an Account?{' '}
    <Link to={'/login'} className="text-blue-600 underline">
      Login
    </Link>
  </p>
</form>

      </div>
    </div>
  )
}

export default Signup