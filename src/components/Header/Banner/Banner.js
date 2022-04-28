import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid'
import banner3 from '../../../image/banner3.jpg'
import banner1 from '../../../image/banner1.jfif'
import banner from '../../../image/banner.jfif'
import nanner4 from '../../../image/banner4.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-violet-50 pb-16 pt-16 mb-16'>
                <div className='container mx-auto sm:grid grid-cols-2 gap-4 justify-around'>
                    <div className='space-y-5 w-full'>
                        <h2 className='text-4xl md:text-5xl uppercase font-bold my-6'>be the scil    shorce
                            <br />
                            <span className='text-yellow-400 '>of interseptor</span></h2>
                        <p className='text-gray-900 font-serif '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, beatae!</p>
                        <button className='uppercase bg-lime-600 py-4 px-7 font-semibold text-white rounded'>

                            Buy Now</button>
                    </div>
                    <div className='mt-3 md-0'>
                        <img className='w-full sm:w-full' src={banner3} alt="" />
                    </div>
                </div>

            </div>

            {/* servic section */}

            <div className=' md:grid grid-cols-3 gap-4 container mx-auto '>

                <div className='flex items-center justify-around shadow-md p-3 bg-slate-100'>
                    <div>
                        <img className='rounded-md' src={banner1} alt="" />
                    </div>
                    <div className='p-2'>
                        <h5 className='text-xl text-fuchsia-800 font-serif'>Lorem ipsum .</h5>
                        <p className='text-sm font-medium text-lime-900'>dolor sit amet consectetur Lorem, ipsum dolor. </p>
                    </div>
                </div>
                <div className=' flex items-center justify-around shadow-md bg-slate-100'>
                    <div>
                        <img className='rounded-md' src={banner} alt="" />
                    </div>
                    <div className=''>
                        <h5 className='text-xl text-fuchsia-800 font-serif'>Lorem ipsum .</h5>
                        <p className='text-sm font-medium text-lime-900'>dolor sit amet consectetur Lorem, ipsum dolor. r</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-around p-3 shadow-md bg-slate-100'>
                    <div>
                        <img className='w-64 rounded-md' src={nanner4} alt="" />
                    </div>
                    <div className='p-2'>
                        <h5 className='text-xl text-fuchsia-800 font-serif'>Lorem ipsum .</h5>
                        <p className='text-sm font-medium text-lime-900'>  dolor sit amet consectetur Lorem, ipsum dolor. </p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;