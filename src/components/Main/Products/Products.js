import React from 'react';

const Products = ({pds}) => {
    const {name,price,} = pds
    console.log(pds);
    return (
        <div>
            <h2>products</h2>
        </div>
    );
};

export default Products;