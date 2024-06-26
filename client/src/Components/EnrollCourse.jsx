import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnrollCourse = () => {
    const location = useLocation();
    const data = location.state || {}
    const [email, setEmail] = useState(data.email);
    const navigate = useNavigate();

    const assignSuccess = () => {
        toast.success(`Course Assigned to Instructor !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const myTimeout = setTimeout(() => (navigate('/dashboard/instructor')), 3000);
    }

    const [student, setStudent] = useState([]);
    useEffect(() => {

        fetchStudent()

    }, []);

    const fetchStudent = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchStudent'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setCourses(data);
        } catch (error) {
            console.error(error);
        }
    };


    // const EnrollCourseHandler = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('http://localhost:3001/enrollCourse', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({  })
    //     });



    //     if (response.ok) {
    //         // Handle success
    //         console.log('Course Assigned Successfully');
    //         assignSuccess()
    //         // navigate('/dashboard/instructor')
    //     } else {
    //         // Handle error
    //         console.error('Failed to register user');
    //     }
    // }
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
            <div className='w-full flex items-center justify-center py-10 bg-slate-900'>
                <div className='w-3/4 md:w-1/2 flex flex-col gap-y-8 px-8 py-8 bg-slate-800 rounded-lg mt-12'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Assign Course To Instructor</h1>

                    <form onSubmit={EnrollCourseHandler} className='text-xl'>
                        <div className='w-full mb-4 flex flex-col gap-2'>
                            <label htmlFor="" className='px-3 text-sm md:text-lg'>GitHub Username</label>
                            <input type="text" placeholder='Enter username' className='border-b-4 border-none p-3 bg-slate-700 rounded-md outline-none focus:ring-indigo-600 focus:ring-2 text-sm md:text-lg' onChange={(e) => setName(e.target.value)} value={name} readOnly />
                        </div>

                        <div className='w-full my-6 flex flex-col gap-2'>
                            <button className='bg-indigo-600 p-3 rounded-md text-white text-md md:text-lg'>Enroll Course </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EnrollCourse
