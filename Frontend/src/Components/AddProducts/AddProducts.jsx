import React from 'react';
import { Link } from 'react-router';

const AddProducts = () => {


    const handleAddProducts = (e) => {


        const name = e.target.name.value
        const price = e.target.price.value
        const image = e.target.image.value
        const description = e.target.description.value

        const products = { name, price, image, description }

        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert(" Data Inserted Successfully")
                }

                e.target.reset()
            })
        e.preventDefault()
    }
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Products</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleAddProducts}>
                                <fieldset className="fieldset">
                                    <label className="label">Product name</label>
                                    <input type="text" className="input" placeholder="" name='name' />

                                    <label className="label">Product price</label>
                                    <input type="text" className="input" placeholder="" name='price' />

                                    <label className="label">Product Image</label>
                                    <input type="text" className="input" placeholder="" name='image' />

                                    <label className="label">Product description</label>
                                    <input type="text" className="input" placeholder="" name='description' />

                                    <button className="btn btn-neutral mt-4">Add Products</button>


                                </fieldset>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddProducts;