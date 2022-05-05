import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <h2 className='mt-3 text-center text-5xl text-indigo-600'>Pleash Add a new item ?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;