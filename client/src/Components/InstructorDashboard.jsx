import React, { useEffect, useState } from 'react'
import DNavbar from './DNavbar'
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import PublishedCourses from './PublishedCourses';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
const InstructorDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [coursesCount, setCoursesCount] = useState([]);
    const [assignInstructor, setAssignInstructor] = useState([]);
    const role = useSelector(state => state.role);
    const [users, setUsers] = useState([]);
    const [instructor, setInstructors] = useState([]);

    return (
        <>

            <DNavbar />
            <div className="flex-1 p-4">
                <div className="flex items-center mb-4 px-6">
                    <FaUser className="mr-2" />
                    <h2 className="text-lg font-bold">{role}</h2>
                </div>

            </div>
            <div className='w-full flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 flex justify-between w-full px-10'>
                    <p>Courses</p>
                    {/* <button className='btn btn-success rounded-lg text-lg'>
<Link to="/dashboard/newcourse">Add + </Link>
</button> */}
                </h1>

                <div className='w-full grid grid-cols-1 lg:grid-cols-3 px-8 py-4 gap-4'>
                    {courses.map((val, index) => {
                        return <CourseCard data={val} assign={assignInstructor} display="true" status="true" key={index} />
                    })}

                </div>

            </div>

        </>
    )
}

export default InstructorDashboard
