import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function ResetPassword() {


 const [password,setPassword] = useState('')
 const {token}=useParams()


 const navigate = useNavigate()

 const handelSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/reset-password/`+token,{
       password,
    
    }).then((res)=>{
      if(res.data.status){
        navigate('/login')
      }
    
    }).catch((err)=>{
        console.log(err)
    })
 }




  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="borer-2 bg-gradient-to-br from-blue-200 to-purple-400 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handelSubmit}>
          

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New  Password
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
            className="w-full px-6 sm:px-0 bg-gradient-to-br from-blue-400 to-purple-600 p-2 rounded-md hover:bg-indigo-700 transition"
          >
            Reset
          </button>
          <p>Have an Account? <Link to={'/login'}  className='text-blue-600 underline'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword