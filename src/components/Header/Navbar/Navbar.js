import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navbar = () => {

    const[user] = useAuthState(auth)
    const hendelLogout = () =>{
        signOut(auth)
    }

    return (
        <div className='h-16 bg-slate-400 '>
            <div className='flex items-center justify-around '>
                <div className='mt-4'>
                <h2>Navbar</h2> 
                </div>
                <div className='flex items-center mt-4 justify-around '>
                    <Link className='ml-4 text-red-50 font-semibold' to={'/'}>Home</Link>
                   
                    {user?
                        <Link className='ml-4 text-red-50 font-semibold' to={'/maneg'}>Manege </Link>
                        : ''
                    }
                    
                    {
                        user
                        ?
                        <Link className='ml-4 text-red-50 font-semibold' to={'/additem'}>Add</Link>
                        : ''
                    }
                   
                    {user?
                    <button className='ml-4 text-red-50 font-semibold' onClick={hendelLogout}>Log Out</button>

                       : <Link className='ml-4 text-red-50 font-semibold' to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;