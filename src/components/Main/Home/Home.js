import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';


const Home = () => {
    const [products, setProducts] = useProducts()
    return (
    <div className='mt-16'>
        <h2 className='text-4xl text-center text-indigo-600'>Our Products</h2>
        <div className='md:grid grid-cols-3 container mx-auto gap-12 '>
            
            {
            products.map(product=><Product
            
            product={product}
            key={product._id}
            ></Product>)
            
            }
            
        </div>
    </div>
        
    );
};

export default Home;