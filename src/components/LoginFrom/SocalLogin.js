import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../image/google0.png';
import auth from '../Firebase.init';
const SocalLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let err;
    if (error) {
        err = <div>
            <p className='text-red-500'>try agen </p>
        </div>
    }
    if (user) {
        navigate('/')
    }

    return (
        <div>
            {err}
            {loading}
            <button onClick={() => signInWithGoogle()} className='flex pt-3  uppercase bg-lime-50 py-2 px-24 font-semibold text-1/2xl text-neutral-700 rounded mt-4'><img className='px-4' src={google} alt="" /><span>Google</span></button>
        </div>
    );
};

export default SocalLogin;