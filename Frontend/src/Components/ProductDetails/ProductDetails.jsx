import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {

    const product = useLoaderData()

    console.log(product)


    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product.image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <p className="py-6">
                            {product.description}
                        </p>
                        <p className="py-6">
                           $ {product.price}
                        </p>
                        
                        
                       
                        <Link to={`/products/order/${product._id}`}><button className="btn btn-primary">Order Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;