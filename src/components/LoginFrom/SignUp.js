import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-96 mx-auto text-center bg-slate-200 p-12 mt-12 rounded-md'>
            <div className=''>
                <h2 className='text-4xl text-semibold text-sky-600'>Login</h2>
                <form >
                    <div className=" m-3">
                        <label className='block' htmlFor="email">Email</label>
                        <input className='w-64 h-8' type="email" name="email" id="" required/>
                    </div>
                    <div className="m-3">
                        <label className='block' htmlFor="password">Password</label>
                        <input className='w-64 h-8'  type="password" name="password" id=""  required/>
                    </div>
                    <div className="m-3">
                        <label className='block' htmlFor="confrom-password">confrom-password</label>
                        <input className='w-64 h-8'  type="password" name="password" id=""  required/>
                    </div>

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