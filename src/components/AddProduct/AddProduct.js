import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })

    };


    return (
        <div className=''>
            <h2 className='mt-3 text-center text-5xl text-indigo-600'>Pleash Add a new item ?</h2>
            <form className='w-80 mt-8 mx-auto flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <p className='text-lime-700'>name</p>
                <input className='bg-neutral-400 mb-3 py-2 px-4 rounded' placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />
                <p className='text-lime-700'>photo url</p>
                <input className='bg-neutral-400 mb-3 py-2 px-4 rounded' placeholder='Name' {...register("img", )} />
                <p className='text-lime-700'>queantity</p>
                <input className='bg-neutral-400 mb-3 py-2 px-4 rounded' placeholder='Discription' {...register("gueantity",)} />
                <p className='text-lime-700'>discription</p>
                <textarea className='bg-neutral-400 mb-3 py-2 px-4 rounded' placeholder='Price' type="number" {...register("discription",)} />
                <input className='uppercase bg-lime-600 py-2 px-4 font-semibold text-white rounded mt-4' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;