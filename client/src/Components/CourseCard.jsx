import React, { useState, useEffect } from 'react'
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
    const status = props.status
    const student = props.student

    const user = useSelector(state => state.role);
    const email = useSelector(state => state.email);
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
        const myTimeout = setTimeout(() => (navigate('/dashboard')), 2000);
    }
    const enrollSuccess = () => {
        toast.success(`Enrolled successfully !`, {
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

    const [courseID, setCourseID] = useState("");
    const [userEmail, setUserEmail] = useState(email);
    const [enrollLength, setEnrollLength] = useState(0);
    const [publish, setPublish] = useState([]);
    const [publishLength, setPublishLength] = useState(0);
    const [enroll, setEnroll] = useState([
        {
            course_id: "",
            user_id: "",
            invitation: false
        }
    ]);

    const handleEnroll = async (id) => {
        await setCourseID(id)
        // console.log(courseID)

        const response = await fetch('http://localhost:3001/enrollCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, userEmail })
        });

        if (response.ok) {
            console.log('Course enrolled Successfully');
            enrollSuccess()
        } else {
            // Handle error
            console.error('Failed to register user');
        }
        // navigate('/dashboard/enroll')
    }

    useEffect(() => {

        fetchEnroll()
        fetchPublish()

    }, []);


    const fetchEnroll = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchEnroll')
            // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setEnroll(data);
            await setEnrollLength(data.length);


        } catch (error) {
            console.error(error);
        }
    };

    const fetchPublish = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchPublish')
            // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setPublish(data);
            await setPublishLength(data.length);


        } catch (error) {
            console.error(error);
        }
    };

    console.log(enroll)

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
                {
                    assign.map((val, i) => {
                        return val.course == cardData._id && user == "Instructor" ? <div className="card card-compact w-full bg-gray-700 shadow-xl">

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
                                        display == "true" && user == "Administrator" && publishLength != 0 ? <div className='w-full flex flex-row justify-end align-end gap-3'>

                                            {
                                                publish.map((val, i) => {
                                                    return cardData._id == val.course ? <h1 className='text-2xl'>Published</h1> : ""
                                                })
                                            }
                                            {
                                                publish.map((val, i) => {
                                                    return cardData._id != val.course ? <>
                                                        <button className="btn btn-success px-6 rounded-lg" onClick={() => handlePublish(cardData._id)}> Publish Course </button>

                                                        <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button>
                                                    </> : ""
                                                })
                                            }

                                        </div> : <>
                                            {status == "true" && student == "false" ? <>
                                                <button className="btn btn-success px-6 rounded-lg" onClick={() => handlePublish(cardData._id)}> Publish Course </button>

                                                <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button> </> : ""
                                            }</>
                                    }

                                    {
                                        user == "Student" && status == "true" ? <div className='w-full flex flex-row justify-end align-end gap-3'>
                                            {enrollLength != 0 ?
                                                enroll.map((val, i) => {
                                                    return cardData._id == val.course_id && val.user_email == userEmail && val.invitation == false ? <h1 className='text-2xl'>Pending</h1> : <button className="btn btn-success px-6 rounded-lg" onClick={() => handleEnroll(cardData._id)}>Enroll Course</button>
                                                })
                                                : <button className="btn btn-success px-6 rounded-lg" onClick={() => handleEnroll(cardData._id)}>Enroll Course</button>
                                            }




                                        </div> : ""
                                    }
                                </div>
                            </div>
                        </div> : ""
                    })
                }

                {
                    user != "Instructor" ? <div className="card card-compact w-full bg-gray-700 shadow-xl">

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
                                    display == "true" && user == "Administrator" && publishLength != 0 ? <div className='w-full flex flex-row justify-end align-end gap-3'>

                                        {
                                            publish.map((val, i) => {
                                                return cardData._id == val.course ? <h1 className='text-2xl'>Published</h1> : ""
                                            })
                                        }
                                        {
                                            publish.map((val, i) => {
                                                return cardData._id != val.course ? <>
                                                    <button className="btn btn-success px-6 rounded-lg" onClick={() => handlePublish(cardData._id)}> Publish Course </button>

                                                    <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button>
                                                </> : ""
                                            })
                                        }

                                    </div> : <>
                                        {status == "true" && student == "false" ? <>
                                            <button className="btn btn-success px-6 rounded-lg" onClick={() => handlePublish(cardData._id)}> Publish Course </button>

                                            <button className="btn btn-error  rounded-full"><MdDelete className='text-xl' /></button> </> : ""
                                        }</>
                                }

                                {
                                    user == "Student" && status == "true" ? <div className='w-full flex flex-row justify-end align-end gap-3'>
                                        {enrollLength != 0 ?
                                            enroll.map((val, i) => {
                                                return cardData._id == val.course_id && val.user_email == userEmail && val.invitation == false ? <h1 className='text-2xl'>Pending</h1> : <button className="btn btn-success px-6 rounded-lg" onClick={() => handleEnroll(cardData._id)}>Enroll Course</button>
                                            })
                                            : <button className="btn btn-success px-6 rounded-lg" onClick={() => handleEnroll(cardData._id)}>Enroll Course</button>
                                        }

                                    </div> : ""
                                }
                            </div>
                        </div>
                    </div> : ""
                }
            </div>


        </>

    )
}

export default CourseCard
