import React, { useState } from 'react'
import './Login.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/user.png'

export const Login = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className="text-connection">Connection</div>
                <div className="text-signup">{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                {action==="Sign Up"?
                <div className="input">
                    <img src={user_icon} alt="" className="" />
                    <input type="text" placeholder="Name" name="" id="" />
                </div>
                : 
                <div></div>}
                <div className="input">
                    <img src={email_icon} alt="" className="" />
                    <input type="email" placeholder="Email" name="" id="" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" className="" />
                    <input type="password" placeholder="Password" name="" id="" />
                </div>
            </div>
            {action==="Login"?
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            : 
            <div></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
