import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AdminDashboard from './AdminDashboard';
import { useNavigate } from 'react-router-dom';


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
            <div className='w-full bg-gray-300 h-screen'>

                {role == "Administrator" ? <AdminDashboard /> : ""}

            </div>
        </>
    )
}

export default Dashboard
