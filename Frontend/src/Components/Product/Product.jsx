import React from 'react';
import { Link } from 'react-router';

const Product = (props) => {
    const { _id, name, image, price, description, rating } = props.pd
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        
                    </h2>
                    <p>$ {price}</p>
                    <p>{description.slice(0, 150)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${_id}`}> <div className="badge badge-outline">See More</div></Link>
                        <div className="badge badge-outline">Add To Cart</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;