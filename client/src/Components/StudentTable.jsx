import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentTable = (props) => {

    const data = props.data
    const navigate = useNavigate();

    const user = useSelector(state => state.role);
    const company = useSelector(state => state.company);

    const Accept = () => {
        toast.success(`Student Request Accepted! `, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const myTimeout = setTimeout(() => (navigate('/dashboard')), 2000);
    }

    const Reject = () => {
        toast.error('Student Request Rejected!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const myTimeout = setTimeout(() => (navigate('/dashboard')), 2000);

    }
    const handleStudent = (id) => {
        navigate('/dashboard/github', {
            state: {
                user_id: id
            }
        })
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
            <div className="overflow-x-auto w-full border-2 text-white border-gray-700 rounded-lg px-8 py-8 bg-gray-700">
                <h1 className='text-2xl py-2'>Student Table</h1>
                <table className="table text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-xl text-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => {

                            return <tr>
                                <th>{i + 1}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{user == "Instructor" ? <button onClick={() => handleStudent(val.company)} className='btn btn-primary'>Github</button> : <>
                                    <button onClick={() => Accept()} className='btn btn-primary'>Accept</button> <button onClick={() => Reject(val.company)} className='btn btn-error'>Reject</button></>}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default StudentTable
