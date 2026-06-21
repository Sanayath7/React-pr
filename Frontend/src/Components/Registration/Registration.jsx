import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { Link } from 'react-router';

const Registration = () => {

    const [user, setUser] = useState(null)

    const [error, setError] = useState('')

    const handlemailPasswordRegister = (e) => {


        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)


            })
            .catch((error) => {
               setError(error.message)
            });




        e.preventDefault()



    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlemailPasswordRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>

                                     <p>Already have an Account? Please </p>

                                    <Link to={'/login'}>Login</Link>
                                </fieldset>
                            </form>

                            {
                                user&& <div>{user.email}</div>
                            }

                            {
                                error&& <div>{error}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;