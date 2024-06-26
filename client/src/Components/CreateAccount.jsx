import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateRole } from '../actions/roleActions';
import { updateCompany } from '../actions/companyActions';
import { updateEmail } from '../actions/emailActions';

const CreateAccount = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const successAlert = () => {
        toast.success(`new ${user} account Created Successfully! `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const myTimeout = setTimeout(() => (navigate('/dashboard')), 3000);

    };
    const RoleSubmitHandler = (e) => {
        e.preventDefault()
    }

    const SignInHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user != "Instructor" ? { user, name, email, mobile, company, password } : { user, name, email, mobile, password })
        });

        if (response.ok) {
            // Handle success
            console.log('User registered successfully');
            dispatch(updateRole(user)); // Dispatch the updateMessage action
            dispatch(updateCompany(company)); // Dispatch the updateMessage action
            dispatch(updateEmail(email)); // Dispatch the updateMessage action
            successAlert();

        } else {
            // Handle error
            console.error('Failed to register user');
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

            {user ? <div className='w-full flex items-center justify-center shadow-lg '>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-gray-100 rounded-lg mb-10'>
                    <h1 className='text-2xl md:text-4xl text-black text-center'>Create {user} Account </h1>

                    <form onSubmit={SignInHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Full Name</label>
                            <input type="name" placeholder='Enter Full Name' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Email Address</label>
                            <input type="email" placeholder='Enter email address' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Mobile No.</label>
                            <input type="text" placeholder='Enter mobile No.' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setMobile(e.target.value)} value={mobile} />
                        </div>
                        {user == "Administrator" ? <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Company Name</label>
                            <input type="text" placeholder='Enter Company Name' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setCompany(e.target.value)} value={company} />
                        </div> : <div></div>}
                        {user == "Student" ? <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Github Username</label>
                            <input type="text" placeholder='Enter Github Username' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setCompany(e.target.value)} value={company} />
                        </div> : <div></div>}
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>Password</label>
                            <input type="password" placeholder='Enter Password' className='border-b-4 border-none p-3 bg-gray-200 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>Create Account</button>
                        </div>
                    </form>
                </div>
            </div> : <div className='w-full h-3/4 flex items-start justify-center mt-24'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-gray-100 rounded-lg shadow-lg'>
                    <h1 className='text-2xl md:text-4xl text-center'>Which best describes your role?</h1>

                    <form className='text-xl' onSubmit={RoleSubmitHandler}>

                        <div className='w-full my-6 flex flex-col lg:flex-row gap-3 justify-between items-center'>
                            <button className='w-full py-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-md  text-md md:text-xl' value="Administrator" onClick={(e) => setUser(e.target.value)}>Administrator</button>
                            <button className='w-full py-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-md  text-md md:text-xl' value="Instructor" onClick={(e) => setUser(e.target.value)}>Instructor</button>
                            <button className='w-full py-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-md text text-md md:text-xl' value="Student" onClick={(e) => setUser(e.target.value)}>Student</button>
                        </div>
                    </form>
                </div>
            </div>}
        </>
    )
}

export default CreateAccount
