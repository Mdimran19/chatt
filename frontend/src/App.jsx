import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from "lucide-react"
import { Toaster } from 'react-hot-toast'
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-between h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App



// <Route path='/' element={ authUser ? <Home/> : <Navigate to="login" />} />
// <Route path='/signup' element={ !authUser ? <SignUpPage/>: <Navigate to="/" />} />
// <Route path='/login' element={ !authUser ? <LoginPage/> : <Navigate to="/" />} />
// <Route path='/settings' element={ <SettingsPage/> } />
// <Route path='/profile' element={ authUser ?<ProfilePage/> : <Navigate to="login" />} />
// </Routes> 

