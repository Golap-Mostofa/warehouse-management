import React from 'react';

const ManegeProduct = ({ product }) => {
    const { _id, name, price, img, guantity, discription } = product

    const hendelDelete= id =>{
        const proseude = window.confirm('are you sure?')
        if(proseude){
            const url = `https://intense-chamber-27853.herokuapp.com/product${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
    }
    return (
        <div>
           
        </div>
    );
};

export default ManegeProduct;