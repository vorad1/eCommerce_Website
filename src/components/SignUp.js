import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {

    // const [fullName, setFullname]=useState('');
    // const [email, setEmail]=useState('');
    // const [password, setPassword]=useState('');

    // const [errorMsg, setErrorMsg]=useState('');
    // const [successMsg, setSuccessMsg]=useState('');

    // const handleSignup=(e)=>{
    //     e.preventDefault();
    //     console.log(fullName, email, password);
    // }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Sign Up</h1>
            <hr></hr>
            <form className='form-group' autoComplete="off" >
                <label>Full Name</label>
                <input type="text" className='form-control' required
               ></input>
                <br></br>
                <label>Email</label>
                <input type="email" className='form-control' required
                 ></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                ></input>
                <br></br>
                {/* Redirect to login page if account already exists */}
                <div className='btn-box'>
                    <span>Already have an account Login
                    <Link to="login" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
