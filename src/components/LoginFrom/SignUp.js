import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confrom,setConfrom] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        err,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
        navigate('/')
      }

      const hendelEmail = e=>{
        setEmail(e.target.value)
      }
      const hendelPassword = e=>{
        setPassword(e.target.value)
      }
      const hendelConfrom = e =>{
        setConfrom(e.target.value)
      }

      const createUser = e =>{
        e.preventDefault();
        if(password !== confrom){
            setError('password dont math')
        }
        createUserWithEmailAndPassword(email,password)
      }


    return (
        <div className='w-96 mx-auto text-center bg-slate-200 p-12 mt-12 rounded-md'>
            <div className=''>
                <h2 className='text-4xl text-semibold text-sky-600'>Login</h2>
                <form onSubmit={createUser}>
                    <div className=" m-3">
                        <label className='block' htmlFor="email">Email</label>
                        <input onBlur={hendelEmail} className='w-64 h-8' type="email" name="email" id="" required/>
                    </div>
                    <div className="m-3">
                        <label className='block' htmlFor="password">Password</label>
                        <input onBlur={hendelPassword} className='w-64 h-8'  type="password" name="password" id=""  required/>
                    </div>
                    <div className="m-3">
                        <label className='block' htmlFor="confrom-password">confrom-password</label>
                        <input onBlur={hendelConfrom} className='w-64 h-8'  type="password" name="password" id=""  required/>
                    </div>
                    <p style={{color : "red"}}>{err}</p>
                    {
                      loading 
                      ? <p>Loading...</p>
                      : ""
                    }
                   
                    <input className='mt-4 bg-lime-500 px-6 py-2 text-xl text-sky-50 font-semibold' type="submit" value="Sign Up"  required/>
                </form>
                <p className='mt-4 text-gray-700'>
                    Already Have an account? <Link className='text-orange-600' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;