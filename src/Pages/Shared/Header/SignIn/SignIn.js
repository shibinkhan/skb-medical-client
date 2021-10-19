import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './SignIn.css';

const Login = () => {
    const { handleSignIn, googleSignIn, handleEmailInput, handlePasswordInput, error } = useAuth()
    return (
        <div className="signinBody">
            <div className="signin-main mx-auto pt-5 mt-5">
                <h1 className="login-title">Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <input className="input-field" onBlur={handleEmailInput} type="email" placeholder="Email..." required /><br />
                    <input className="input-field" onBlur={handlePasswordInput} type="password" placeholder="Password..." required /><br /><br />
                    <div className="text-danger">{error}</div>
                    <button className="button">Sign In</button><br />
                </form><br />
                <p>Don't have account? <NavLink className="toggle" to="/resister">Create Now</NavLink></p>
                <p>Or</p>
                <button className="button" onClick={googleSignIn}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;