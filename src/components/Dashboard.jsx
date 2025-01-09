import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
      // Clear any user session (if applicable) and navigate to the Home page
      navigate('/');

    };
  return (
   <>

<div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center ">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MyAppLogo
          </Link>

          {/* Navigation Links */}
          <div className="space-x-6">
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/new-feature" className="hover:text-gray-300">New Feature</Link>
            <Link to="/support" className="hover:text-gray-300">Support</Link>
          </div>
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome Back!</h1>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-md">
          Hello! You’re successfully logged in. This is your personal dashboard where you can manage your account and access all the features of our app.
        </p>
        <p className="text-md text-gray-600 text-center mb-8">
          Take control of your online experience with seamless password management, secure login, and peace of mind.
        </p>
      </div>
    </div>

    
   
   </>
  )
}

export default Dashboard