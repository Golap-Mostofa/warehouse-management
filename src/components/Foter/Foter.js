import React from 'react';
import { BackspaceIcon, BeakerIcon } from '@heroicons/react/solid'
const Foter = () => {

    return (
        <footer>
            <div className='w-full h-44 bg-slate-800 grid grid-cols-3 text-yellow-50 font-mono p-6'>
                <div>
                    <h4 className='text-2xl text-orange-300'>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, expedita!</p>
                    <a>she all</a>
                </div>
                <div>
                    <h4 >Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, expedita!</p>
                    <a>she all</a>
                </div>
                <div>
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, expedita!</p>
                    <a>she all</a>

                </div>
                BsFacebook
                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                <BackspaceIcon className="h-5 w-5 text-blue-500"></BackspaceIcon>
                
            </div>
        </footer>
    );
};

export default Foter;