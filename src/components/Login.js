import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(email, password);
    }

    return (
        // Login Form 
        <div>
            <br></br>
            <br></br>
            <h1>LOGIN</h1>
            <hr></hr>
            <form className='form-group' autoComplete="off" >
                <label>Email</label>
                <input type="email" className='form-control' required
                 ></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                ></input>
                <br></br>
                {/* Redirect to sign up page if account doesnt exist*/}
                <div className='btn-box'>
                    <span>Don't have an account Sign Up
                    <Link to="/signup" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
