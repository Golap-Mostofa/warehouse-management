import React from 'react';
import google from '../../image/google0.png';
const SocalLogin = () => {
    return (
        <div>
            <button className='flex pt-3  uppercase bg-lime-50 py-2 px-24 font-semibold text-1/2xl text-neutral-700 rounded mt-4'><img className='px-4' src={google} alt="" /><span>Google</span></button>
        </div>
    );
};

export default SocalLogin;