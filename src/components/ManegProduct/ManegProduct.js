import React from 'react';
import useProducts from '../Hooks/useProducts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ManegProduct = () => {
    const [products, setProducts] = useProducts()
 
    
    const hendelDelete= id =>{
        const proceed = window.confirm('are you sure?')
        if(proceed){
            const url = `https://intense-chamber-27853.herokuapp.com/product/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = products.filter(product => product._id !==id)
                setProducts(remaining)
            })
        }
    }

    return ( 
        <div className='border-1'>
            {
                products.map(product => <div key={product._id}>
                    <div className='flex justify-around gap-4 border mt-4 p-6 container'>
                        <img className='w-36 ' src={product.img} alt="" />
                        <h5 className='font-semibold text-indigo-600 text-2xl'>{product.name} </h5>
                        
                        <Link to={'/maneg'}><button className='uppercase bg-lime-600 h-10 w-20 font-semibold text-white rounded mt-4'>update</button></Link>
                        <button onClick={()=>hendelDelete(product._id)} className='uppercase bg-red-500 h-10 w-20  font-semibold text-white rounded mt-4'>delete</button>
                    </div>
                </div>)
            }
           
        </div>
    );
};
                          
export default ManegProduct;