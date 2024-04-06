import React, { useState } from 'react'
import Login from './Login';
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <>
            <div className="w-full bg-gray-200 h-screen text-black bo">
                <nav className='w-full p-7 px-14 flex flex-row justify-between items-center'>
                    <h1 className='text-md md:text-3xl'>
                        <Link to="/"> Edu-Sphere</Link>
                    </h1>
                    {signIn ? <h1 className='text-sm sm:text-xl'>Already have an account?
                        <span className='text-indigo-600 px-4 cursor-pointer' onClick={() => setSignIn(false)}>
                            Create Account
                        </span>
                    </h1>
                        :
                        <h1 className='text-sm sm:text-xl'>Have an account?
                            <span className='text-indigo-500 px-4 cursor-pointer' onClick={() => setSignIn(true)}>
                                Sign In
                            </span>
                        </h1>}
                </nav>
                {
                    signIn ? <Login /> : <CreateAccount />
                }
            </div>
        </>
    )
}

export default Signin
