import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const DNavbar = () => {

    const role = useSelector(state => state.role);
    const company = useSelector(state => state.company);

    return (
        <>
            <div className="navbar bg-slate-900 text-white shadow-lg px-0">
                <div className="flex-1">
                    <Link to="/dashboard" className="btn btn-ghost text-xl">{role} Dashboard</Link>
                </div>
                {/* <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Welcome {company}</a>
                </div> */}
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg hidden md:flex">
                        <li><Link to="/dashboard/courses" >Courses</Link></li>
                        <li><Link to="/dashboard/instructor">Instructor</Link></li>
                        <li><a>Students</a></li>
                        <li><a>Payments</a></li>
                        <li><a>Profile</a></li>
                        <li><Link to="/">Logout</Link></li>
                        {/* <li>
                            <details>
                                <summary>
                                    Profile
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Settings</a></li>
                                    <li><Link to="/">Logout</Link></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default DNavbar
