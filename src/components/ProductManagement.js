// ProductManagement.js
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/product';
// import Fab from '@mui/material/Fab';
// console.log(products)

const ProductManagement = () => {
    return (
        <div>
        {/* <dl className="dictionary">{emojipedia.map(createEntry)}</dl    > */}
            <h1>Product Management</h1>
            <button >Add Product</button>
            <dl className="dictionary">{products.map((product)=>{
                return <ProductCard 
                    id={product.id}
                    key={product.id}
                    image={product.images[0]}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    />
            })}</dl>
        </div>
    );
};

export default ProductManagement;