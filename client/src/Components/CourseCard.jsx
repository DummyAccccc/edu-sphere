import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const CourseCard = (props) => {
    const cardData = props.data
    const assign = props.assign
    const display = props.display

    const user = useSelector(state => state.role);
    const navigate = useNavigate();


    const publishSuccess = () => {
        toast.success(`Course published !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // const myTimeout = setTimeout(() => (navigate('/dashboard')), 3000);
    }

    const [publishData, setPublishData] = useState("");

    const handlePublish = async (id) => {
        console.log(id)

        const response = await fetch('http://localhost:3001/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });

        if (response.ok) {
            console.log('Course Assigned Successfully');
            publishSuccess()
        } else {
            // Handle error
            console.error('Failed to register user');
        }
    }

    const handleEnroll = () => {
        navigate('/enroll')
       
    }



    return (
        <>

            <div>
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
                <div className="card card-compact w-full bg-gray-700 shadow-xl">
                    {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{cardData.title}</h2>
                        <p className='text-md'>{cardData.desc}</p>
                        <div className="divider"></div>

                        <p className='text-md'><span className="font-bold text-md">Prerequisites</span>: {cardData.pre}</p>
                        <p className='text-md'><span className="font-bold text-md">Enrollment Criteria:</span> {cardData.criteria}</p>
                        {assign.map((val) => {
                            if (cardData._id == val.course) {
                                return <p className='text-md'><span className="font-bold text-md"></span> Instructor: {val.name} </p>
                                return;
                            }
                        })}
                        <div className="card-actions justify-between items-center">
                            <div>
                                Duration: {cardData.duration}
                            </div>
                            {
                                display == "true" ? <div className='w-full flex flex-row justify-end align-end gap-3'>

                                    <button className="btn btn-success px-6 rounded-lg" onClick={() => handlePublish(cardData._id)}> Publish Course </button>

                                    <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button>
                                </div> : ""
                            }
                            {
                                user == "Student" ? <div className='w-full flex flex-row justify-end align-end gap-3'>

                                    <button className="btn btn-success px-6 rounded-lg" onClick={() => handleEnroll(cardData._id)}> Enroll Course </button>

                                    {/* <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button> */}
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default CourseCard
