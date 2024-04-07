import React, { useEffect, useState } from 'react'
import DNavbar from './DNavbar'
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import PublishedCourses from './PublishedCourses';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const StudentDashboard = () => {

    const [courses, setCourses] = useState([]);
    const [coursesCount, setCoursesCount] = useState([]);
    const [assignInstructor, setAssignInstructor] = useState([]);
    const role = useSelector(state => state.role);
    const [users, setUsers] = useState([]);
    const [instructor, setInstructors] = useState([]);

    useEffect(() => {

        fetchData()
        fetchAssign()
        fetchUsers()
        fetchInst()


    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchCourse'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setCourses(data);
            await setCoursesCount(data.length)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAssign = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchassign'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setAssignInstructor(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchUsers'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setUsers(data.length);
            // console.log(userData)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchInst = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchinstructor'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setInstructors(data.length);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };
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
                        return <CourseCard data={val} assign={assignInstructor} display="false" key={index} />
                    })}

                </div>

            </div>
        </>
    )
}

export default StudentDashboard
