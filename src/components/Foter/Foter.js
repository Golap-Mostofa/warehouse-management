import React from 'react';
import { BackspaceIcon, BeakerIcon, MailIcon, PhoneIcon, ShoppingCartIcon } from '@heroicons/react/solid'
const Foter = () => {

    return (
        <footer>
            <div className='w-full h-44 bg-slate-800 grid grid-cols-3 text-yellow-50 font-mono p-6 mt-12'>
                <div>
                    <h4 className='text-2xl text-orange-300'>our informetion</h4>
                    <MailIcon className="h-5 w-5 text-blue-50"></MailIcon>
                    <p className='text-indigo-500'>mostofa6410@gmail.com</p>
                    <PhoneIcon className="h-5 w-5 text-cyan-300"></PhoneIcon>
                    <a className='text-indigo-200'>01796206410</a>
                    <p>BsFacebook</p>
                </div>
                <div>

                    <h4 className='text-2xl text-orange-300'>stock is incredibly important</h4>
                    <ShoppingCartIcon className="h-5 w-5 text-orange-500"></ShoppingCartIcon>
                    <p>SHORCE
                        OF INTERSEPTOR</p>
                    <a>she all</a>
                </div>
                <div>
               
                    <h4 className='text-2xl text-orange-500'>Lorem, ipsum dolor.</h4>
                    <ShoppingCartIcon className="h-5 w-5 text-orange-500"></ShoppingCartIcon>
                    <p>Lorem ipsum, dolor expedita!</p>
                    <a>she all</a>

                </div>




            </div>
        </footer>
    );
};

export default Foter;