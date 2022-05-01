import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const hendelEmail = e =>{
        setEmail(e.target.value)
    }
    const hendelPassword = e =>{
        setPassword(e.target.value)
    }
    if(user){
        navigate("/")
    }

    const LoginUser = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)

    }


    return (
        <div className='w-96 mx-auto text-center bg-slate-200 p-12 mt-12 rounded-md'>
            <div className=''>
                <h2 className='text-4xl text-semibold text-sky-600'>Login</h2>
                <form onSubmit={LoginUser}>
                    <div className=" m-3">
                        <label className='block' htmlFor="email">Email</label>
                        <input onBlur={hendelEmail} className='w-64 h-8' type="email" name="email" id="" required/>
                    </div>
                    <div className="m-3">
                        <label className='block' htmlFor="password">Password</label>
                        <input onBlur={hendelPassword} className='w-64 h-8'  type="password" name="password" id=""  required/>

                        {
                        loading ? <p className='text-gray-900'>Loding...</p>
                        : ''
                        }
                    </div>

                    <input className='mt-4 bg-lime-500 px-6 py-2 text-xl text-sky-50 font-semibold' type="submit" value="Sign Up"  required/>
                </form>
                <p className='mt-4 text-gray-700'>
                    Create a new account? <Link className='text-orange-600' to="/signup">Sign UP</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;