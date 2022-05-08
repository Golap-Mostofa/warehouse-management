import { BellIcon, DesktopComputerIcon, LibraryIcon } from '@heroicons/react/solid';
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';




const Home = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className='mt-16'>

            <div className=' md:grid grid-cols-3 gap-4 container mx-auto mb-12'>

                <div className='h-96 items-center justify-around shadow-md p-3 bg-slate-100 '>
                    <div>
                      
                    </div>
                    <div className='p-3'>
                    <div className=' text-center'>
                       <BellIcon className='w-16 h-16 block text-indigo-600 ml-24 '></BellIcon>
                  
                       </div>
                        <h5 className='text-xl text-fuchsia-800 font-serif text-center'>Grab your laptops</h5>
                        <p className='text-sm font-medium text-gray-700'>Buy HP, Acer, Dell, Lenovo,laptops at your fingertips. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quis ipsam consectetur vitae facere pariatur voluptatibus iure voluptatem numquam veritatis esse adipisci minima temporibus est nisi hic ullam commodi quas, impedit nobis. Obcaecati molestiae eaque omnis aliquam ipsum, distinctio voluptas!</p>
                      
                    </div>
                   
                </div>
                <div className='  items-center justify-around shadow-md bg-blue-700 rounded  '>
                    <div>
                        
                    </div>
                    <div className='p-3'>
                    <div className=' text-center'>
                       <LibraryIcon className='w-16 h-16 block text-yellow-400 ml-28 '></LibraryIcon>
                  
                       </div>
                        <h5 className='text-xl text-fuchsia-300 font-serif text-center'>Grab your dream laptops</h5>
                        <p className='text-sm font-medium text-lime-100'>Buy HP, Acer, Dell, Lenovo,laptops at your fingertips. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quis ipsam consectetur vitae facere pariatur voluptatibus iure voluptatem numquam veritatis esse adipisci minima temporibus est nisi hic ullam commodi quas, impedit nobis. Obcaecati molestiae eaque omnis aliquam ipsum, distinctio voluptas!</p>
                        
                    </div>
                   
                </div>
                <div className='w-full items-center justify-around p-3 shadow-md bg-slate-100'>
                    <div>
                       <DesktopComputerIcon className='w-16 h-16 block text-green-400 ml-28 '></DesktopComputerIcon>
                    </div>
                    <div className='p-2'>
                        <h5 className='text-xl text-fuchsia-800 font-serif'>Grab your dream laptops</h5>
                        <p className='text-sm font-medium text-lime-900'>  dolor sit amet consectetur Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quis ipsam consectetur vitae facere pariatur voluptatibus iure voluptatem numquam veritatis esse adipisci minima temporibus est nisi hic ullam commodi quas, impedit nobis. Obcaecati molestiae eaque omnis aliquam ipsum, distinctio voluptas!</p>

                    </div>
                </div>

            </div>



            <h2 className='text-6xl text-center font-semibold mb-4  text-indigo-600'>Our Products</h2>
            <div className='md:grid grid-cols-3 container mx-auto gap-12 '>

                {
                    products.map(product => <Product

                        product={product}
                        key={product._id}
                    ></Product>)

                }

            </div>
        </div>

    );
};

export default Home;