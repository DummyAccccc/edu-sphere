import React, { useEffect, useState } from 'react'
import DNavbar from './DNavbar';
import StudentTable from './StudentTable';
const Student = () => {
    const [student, setStudent] = useState([]);
    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchStudent'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setStudent(data);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <DNavbar />

            <div className='w-full flex items-center flex-col justify-center'>

                <h1 className='text-start text-3xl p-4 flex justify-between w-full px-10'>
                    <p>Students</p>
                    {/* <button className='btn btn-success rounded-lg text-lg'>Add + </button> */}
                </h1>

                <div className='flex w-full flex-col md:flex-row px-8 py-4 gap-4'>
                    <StudentTable data={student} />
                </div>

            </div>
        </>
    )
}

export default Student
