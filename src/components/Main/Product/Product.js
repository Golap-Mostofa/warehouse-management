import React from 'react';

const Product = ({ pd }) => {
    console.log(pd);
    const { name, price, img, guantity, discription } = pd
    return (
        <div className='border shadow-sm '>
            <div >
                <img className='rounded-sm p-1' src={img} alt="" />
               <div className='p-3'>
               <p className='text-center font-semibold text-green-700 text-2xl'>{name}</p>
                <p>{discription}</p>
               </div>

               <div className='text-center mt-4 pb-3'>
               <button className='uppercase bg-lime-600 py-3 px-5 font-semibold text-white rounded'>
                    Buy Now</button>
               </div>
            </div>
        </div>
    );
};

export default Product;