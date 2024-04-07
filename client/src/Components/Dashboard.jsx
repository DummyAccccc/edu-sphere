import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AdminDashboard from './AdminDashboard';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import InstructorDashboard from './InstructorDashboard';


const Dashboard = () => {

    const role = useSelector(state => state.role);
    const navigate = useNavigate();

    useEffect(() => {

        if (role == "") {
            navigate('/signin')
        }
    }, [role]);
    return (
        <>
            <div className='w-full h-screen'>

                {role == "Administrator" ? <AdminDashboard /> : ""}
                {role == "Instructor" ? <InstructorDashboard /> : ""}
                {role == "Student" ? <StudentDashboard /> : ""}

            </div>
        </>
    )
}

export default Dashboard
