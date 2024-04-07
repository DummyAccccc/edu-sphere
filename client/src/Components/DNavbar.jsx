import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';

const DNavbar = () => {

    const user = useSelector(state => state.role);
    const company = useSelector(state => state.company);

    return (
        <>
            <div className="navbar bg-slate-900 text-white shadow-lg px-6 flex">
                <div className="flex-1">
                    <Link to="/dashboard" className="btn btn-ghost text-xl"> Dashboard</Link>
                </div>



                {
                    user == "Administrator" ? <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-lg hidden md:flex">
                            <li><Link to="/dashboard/courses" >Courses</Link></li>
                            <li><Link to="/dashboard/instructor">Instructor</Link></li>
                            <li><Link to="/dashboard/student">Students</Link></li>
                            <li><a>Payments</a></li>
                            <li><a>Profile</a></li>
                            <li><Link to="/">Logout</Link></li>

                        </ul>
                    </div> : ""
                }

                {
                    user == "Student" ? <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-lg hidden md:flex">
                            <li><Link to="/dashboard/courses" >Courses</Link></li>
                            <li><Link>Progress</Link></li>
                            <li><a>Payments</a></li>
                            <li><a>Profile</a></li>
                            <li><Link to="/">Logout</Link></li>

                        </ul>
                    </div> : ""
                }
                {
                    user == "Instructor" ? <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-lg hidden md:flex">
                            <li><Link to="/dashboard/courses" >Courses</Link></li>
                            <li><Link to="/dashboard/student">Student</Link></li>
                            <li><a>Payments</a></li>
                            <li><a>Profile</a></li>
                            <li><Link to="/">Logout</Link></li>

                        </ul>
                    </div> : ""
                }


            </div>

        </>
    )
}

export default DNavbar
