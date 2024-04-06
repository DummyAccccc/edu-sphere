import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateRole } from '../actions/roleActions';
import { updateCompany } from '../actions/companyActions';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const [invalidUser, setInvalidUser] = useState(false);
    const dispatch = useDispatch();

    const loginSuccess = () => {
        toast.success(`Login Successful! `, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const myTimeout = setTimeout(() => (navigate('/dashboard')), 3000);
    }

    const loginError = () => {
        toast.error('Invalid Credentials!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchUsers'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setUserData(data);
            // console.log(userData)
        } catch (error) {
            console.error(error);
        }
    };

    const loginHandler = (e) => {
        e.preventDefault();

        userData.map((val, index) => {
            if (val.email == email && val.password == password) {
                dispatch(updateRole(val.role)); // Dispatch the updateMessage action
                dispatch(updateCompany(val.company)); // Dispatch the updateMessage action
                setInvalidUser(false)
                loginSuccess()

            } else {
                setInvalidUser(true)
            }
        })

        if (invalidUser) {
            loginError()
            console.log("invalid credentials")
        }
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Slide
            />
            <div className='w-full flex items-center justify-center'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-gray-100 rounded-lg'>
                    <h1 className='text-2xl md:text-4xl text-black text-center'>Login </h1>

                    <form onSubmit={loginHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Email Address</label>
                            <input type="email" placeholder='Enter email address' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Password</label>
                            <input type="password" placeholder='Enter Password' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
