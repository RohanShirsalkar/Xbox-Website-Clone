import React, { useEffect, useState } from 'react'
import "./signinPage.scss"
import { useLocation, useNavigate } from 'react-router-dom';

export default function SigninPage() {
    const [signinForm, setSigninForm] = useState({});
    const [registerForm, setRegisterForm] = useState({});
    const [isPathSignin, setIsPathSignin] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(pathname);
        if (pathname === "/signin") {
            setIsPathSignin(true)
        } else {
            setIsPathSignin(false)
        }
    }, [pathname])


    return (
        <div id='signin-page-component'>
            <div className="overlay">
                <div className='mb-3'>
                    <img src="src/assets/login-page-logo.png" alt="" />
                </div>
                <div className="form-box">
                    {
                        isPathSignin ?
                            <div className='form signin-from'>
                                <h3>Sign in</h3>
                                <input type="text" name="" id="" placeholder='Email' />
                                <input type="text" name="" id="" placeholder='Password' />
                                <span>No account? <a onClick={() => navigate("/register")}>Create one!</a></span>
                                <div className='d-flex justify-end'>
                                    <button className='next-btn'>Sign in</button>
                                </div>
                            </div>
                            :
                            <div className="form register-form">
                                <h3>Create account</h3>
                                <input type="text" name="" id="" placeholder='Name' />
                                <input type="text" name="" id="" placeholder='Email' />
                                <input type="text" name="" id="" placeholder='Password' />
                                <span><a onClick={() => navigate("/signin")}>Sign in</a></span>
                                <div className='d-flex justify-end'>
                                    <button className='next-btn'>Create</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
