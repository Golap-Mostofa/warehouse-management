import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])



    return (
        <div className=' w-96 mx-auto mt-8 border p-3'>
            <div className='text-center '>
                <img className='w-100' src={product.img} alt="" />
                <h2 className=' text-4xl text-fuchsia-900 mt-8'>{product.name}</h2>
                <p className='text-2xl text- '>quantity:{product.guantity}</p>
                <button className='uppercase bg-lime-600 py-2 px-4 font-semibold text-white rounded mt-4'>
                        Update quantity
                    </button>
            </div>

           

        </div>
    );
};

export default ProductDetail;