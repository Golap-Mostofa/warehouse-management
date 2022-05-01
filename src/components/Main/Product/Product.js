import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, img, guantity, discription } = product
    const navigate = useNavigate()
    const navigateToDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='border shadow-sm '>
            <div >
                <img className='rounded-sm p-1' src={img} alt="" />
                <div className='p-3'>
                    <p className='text-center font-semibold text-green-700 text-2xl'>{name}</p>
                    <p>{discription}</p>
                    <p className='text-center text-indigo-700'>price:{price}</p>
                </div>

                <div className='text-center mt-4 pb-3'>
                    <button onClick={() => navigateToDetail(_id)} className='uppercase bg-lime-600 py-3 px-5 font-semibold text-white rounded'>
                        Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;