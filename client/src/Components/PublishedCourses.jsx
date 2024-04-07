import React, { useEffect, useState } from 'react'
import PublishedCard from './PublishedCard';




const PublishedCourses = () => {

    const [Publish, setPublish] = useState([]);
    useEffect(() => {

        fetchPublish()

    }, []);

    const fetchPublish = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchPublish'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setPublish(data);
        } catch (error) {
            console.error(error);
        }
    };

    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetchCourse'); // Assuming your backend is running on the same host
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            await setCourses(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            {
                
                    
                
            }
        </>
    )
}

export default PublishedCourses
