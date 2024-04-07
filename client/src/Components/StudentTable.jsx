import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const StudentTable = (props) => {

    const data = props.data
    const navigate = useNavigate();


    const handleStudent = (id) => {
        navigate('/dashboard/github', {
            state: {
                user_id: id
            }
        })
    }
    return (
        <>
            <div className="overflow-x-auto w-full border-2 text-white border-gray-700 rounded-lg px-8 py-8 bg-gray-700">
                <h1 className='text-2xl py-2'>Student Table</h1>
                <table className="table text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-xl text-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Github</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => {

                            return <tr>
                                <th>{i + 1}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td><button onClick={() => handleStudent(val.company)} className='btn btn-primary'>Github</button></td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default StudentTable
