import React from 'react'
import './Login.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const Login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text-connection">Connection</div>
            <div className="text-signup">Sign In</div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" className="" />
                <input type="email" name="" id="" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" className="" />
                <input type="password" name="" id="" />
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}
