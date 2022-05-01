import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-16 bg-slate-400 '>
            <div className='flex items-center justify-around '>
                <div className='mt-4'>
                <h2>Navbar</h2> 
                </div>
                <div className='flex items-center mt-4 justify-around '>
                    <Link className='ml-4 text-indigo-700 font-semibold' to={'/'}>Home</Link>
                    <Link className='ml-4 text-indigo-700 font-semibold' to={'/Orders'}>Orders</Link>
                    <Link className='ml-4 text-indigo-700 font-semibold' to={'/'}>deatil</Link>
                    <Link className='ml-4 text-indigo-700 font-semibold' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;