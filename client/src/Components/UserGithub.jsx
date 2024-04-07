import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useLocation } from 'react-router-dom';
import DNavbar from './DNavbar';


function UserGithub() {
    const [userData, setUserData] = useState([]);

    const location = useLocation();
    const data = location.state || {}
    const [username, setUsername] = useState(data.user_id);
    console.log(username)


    useEffect(() => {
        // const token = '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'; // Replace 'YOUR_TOKEN' with your actual personal access token
        // const username = 'aditya-gawali';

        // const api = axios.create({
        //     baseURL: 'https://api.github.com',
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // });

        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                setUserData(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    return (
        <>
            <DNavbar />
            <div className="max-w-sm mx-auto bg-gray-700 text-white shadow-lg rounded-lg overflow-hidden">
                <img src={userData.avatar_url} alt="avatar" className="w-full h-full object-cover object-center" />
                <div className="p-4" >
                    <h1 className=' text-center text-2xl '>Github Profile</h1>
                    <div className='flex justify-around mt-2'>

                        <h1 className="text-xl font-semibold flex flex-row gap-3"> Account Name: <span className=''> {userData.login}</span></h1>
                    </div>
                    <p className="mt-2 text-center">Followers: {userData.followers}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded cursor-pointer">View Repositories</a>
                </div>
            </div>
        </>
    )
}

export default UserGithub
