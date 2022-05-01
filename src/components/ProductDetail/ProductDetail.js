import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams()
    return (
        <div>
            <h2 className='text-center text-4xl text-fuchsia-900 mt-8'>this is product:{productId}</h2>
        </div>
    );
};

export default ProductDetail;