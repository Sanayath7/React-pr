import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { Link } from 'react-router';

const Login = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                setUser(result.user)

            }).catch((error) => {
                setError(error.message)
            });

    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            setError(error.message)
        });
    }

    const handleGithubLogin = () => {

        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            });


    }

    const handlemailPasswordLogin = (e) => {

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(errror)
            });


        e.preventDefault();

    }
    return (
        <div className='text-center'>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlemailPasswordLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>

                                    <p>Don't have an Account? Please </p>

                                    <Link to={'/register'}>Register</Link>
                                </fieldset>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


           
           
            {
                user? <button onClick={handleLogout} className='bg-red-300 p-3 text-black text-bold rounded '>Logout</button> 
                : 
                <div>
                     <button onClick={handleGoogleLogin} >Login With Google</button>
            <button onClick={handleGithubLogin} className='bg-black-300 
            p-3 text-white text-bold rounded '>Login With Github</button>
                </div>
            }

            



            {
                user &&
                <div>
                    {user.displayName}
                    <img src={user.photoURL
                    } alt="" />

                    {user.email}
                </div>
            }
            {
                error && <div>{error}</div>
            }

        </div>
    );
};

export default Login;