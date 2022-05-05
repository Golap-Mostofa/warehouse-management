import React from 'react';

const AddProduct = () => {

    // const hendelonsubmit = event =>{
    //     event.preventDefault()
    //     const name = event.target.name.value
    //     const email = event.target.email.value
    //     const user = {name,email}
    //     //send data to the user
    //     fetch('http://localhost:4000/additem',{
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log('success',data);
    //     })


    // }

    return (
        <div>
            <h2 className='mt-3 text-center text-5xl text-indigo-600'>Pleash Add a new item ?</h2>
            <form className='text-center' >
                <input className='bg-indigo-200' type="text" name='name' placeholder='Name' required/><br /><br />
                <input className='bg-indigo-200' type="email" name='email' placeholder='Email' required/><br />
                <input type="submit" value="add item" />
            </form>
        </div>
    );
};

export default AddProduct;