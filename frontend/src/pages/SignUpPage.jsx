import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { MessageSquare, User, Mail, Lock, EyeOff, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthImagePattern from '../components/AuthImagePattern';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSignUp } = useAuthStore();
  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required!")
    if (!formData.email.trim()) return toast.error("Email is required!")
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Valid email is required!")
    if (!formData.password) return toast.error("password is required!")
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters!")

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm()

    if (success === true) signup(formData);
    navigate('/login')
  }
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/*left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:0-12">
        <div className="w-full max-w-md space-y-8">
          {/* logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className="text-base-content/60">Get started with your account</p>

            </div>
          </div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="form-control">
              <label className='label'>
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className='size-5 text-base-content/40' />

                </div>
                <input type="text" className={`input input-bordered w-full pl-10 bg-slate-300`}
                  placeholder='Imran'
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>
            {/* mail */}
            <div className="form-control">
              <label className='label'>
                <span className="label-text font-medium">Enter Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className='size-5 text-base-content/40' />

                </div>
                <input type="email" className={`input input-bordered w-full pl-10`}
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            {/* password */}
            <div className="form-control">
              <label className='label'>
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className='size-5 text-base-content/40' />

                </div>
                <input type={showPassword ? "text" : "password"} className={`input input-bordered w-full pl-10 bg-slate-500`}
                  placeholder='* * *'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {/* <button className="btn btn-dash btn-accent " onClick={() => setShowPassword(!showPassword)}>{showPassword ? (<EyeOff className='text-5 text-base-content/40' />) :
            (<Eye className='text-5 text-base-content/40' />)
            }</button> */}
              </div>
            </div>
            <div className='items-center text-center'>
              <button type='submit' className="btn btn-dash btn-accent ">Account</button>
            </div>
            <div className='items-center text-center'><p>Already have an account ? <Link className='cursor-pointer' to='/login'>signin</Link></p></div>

          </form>
        </div>
      </div>
      {/* right side */}
      <AuthImagePattern
        title="Join Our Community"
        subtitle="Connect with friends, share moments, and stay in touch with you" />
    </div>
  )
}

export default SignUpPage
