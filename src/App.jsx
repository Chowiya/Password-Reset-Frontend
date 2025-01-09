import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotComponent from './components/ForgotComponent'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/forgotPassword' element={<ForgotComponent />}></Route>
    <Route path='/resetPassword/:token' element={<ResetPassword />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
   {/* Wildcard route for 404 */}
   <Route path="*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
