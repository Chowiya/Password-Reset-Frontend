import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

function Home() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`)
    .then((res)=>{
      if(res.data.status){
        navigate('/login')
      }
    }).catch((err)=>{
      console.log(err)
    })
   
  }
  return (
    <>
     <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MyApp
          </Link>

          {/* Navigation Links */}
          <div className="space-x-4">
            <Link to="/signup" className="hover:text-gray-300">
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to My App!</h1>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-lg">
          Your one-stop solution for secure and seamless account management. Whether you're signing up for the first time, logging in to access your account, or resetting your password, we've got you covered.
        </p>
        <div className="flex space-x-4">
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-800 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home