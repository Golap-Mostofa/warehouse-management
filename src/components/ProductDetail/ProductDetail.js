import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams()
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const url = `http://localhost:4000/product/${productId}`

        fetch(url)
        .then(res=> res.json())
        .then(data =>setProduct(data))

    },[])


    
    return (
        <div className='w-48 text-center'>
            <img className='w-60' src={product.img} alt="" />
            <h2 className=' text-4xl text-fuchsia-900 mt-8'>:{product.name}</h2>
            <p>{product.guantity}</p>
            
        </div>
    );
};

export default ProductDetail;