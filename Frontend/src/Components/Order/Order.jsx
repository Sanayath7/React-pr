import React from 'react';
import { useLoaderData } from 'react-router';

const Order = () => {

    const product = useLoaderData()
    console.log(product)

     const handleOrderConfirm=(e)=>{
        e.preventDefault();

        const name=e.target.name.value 
        const price=e.target.price.value 
        const c_name=e.target.c_name.value 
        const m_number=e.target.m_number.value 
        const address=e.target.address.value 

        const order={name,price,c_name,m_number,address}

         fetch('http://localhost:3000/products/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert(" Your Order has Been Confirmed")
                }

                e.target.reset()
            })


       


     }
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleOrderConfirm} >
                                <fieldset className="fieldset">
                                    <label className="label">Product Name</label>
                                    <input type="text" className="input" placeholder="" value={product.name} name='name' />
                                    <label className="label">Product Price</label>
                                    <input type="text" className="input" placeholder="" value={product.price}  name='price'/>
                                    <label className="label">Enter Your name</label>
                                    <input type="text" className="input" placeholder="" name='c_name' />
                                    <label className="label">Enter Mobile Number</label>
                                    <input type="text" className="input" placeholder="" name='m_number'/>
                                    <label className="label">Enter Your address</label>
                                    <input type="text" className="input" placeholder="" name='address'/>


                                    <button className="btn btn-neutral mt-4">Confirm Order</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;