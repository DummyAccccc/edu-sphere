import React, { useEffect, useState } from 'react'
import axios from "axios";
function UserGithub(props) {
    const [userData, setUserData] = useState([]);
    // const username = props.id;
    useEffect(() => {
        const token = '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'; 
        const username = props.id;

        const api = axios.create({
            baseURL: 'https://api.github.com',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

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
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={userData.avatar_url} alt="avatar" className="w-full h-full object-cover object-center" />
            <div className="p-4" >
                <h1 className=' text-center font-bold text-black'>Github Profile</h1>
                <div className='flex justify-around '>

                    <h1 className="text-xl font-semibold text-gray-800"> Account Name: </h1><span> {userData.login}</span>
                </div>
                <p className="text-gray-600 mt-2">Followers: {userData.followers}</p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded cursor-pointer">View Repositories</a>
            </div>
        </div>
    )
}

export default UserGithub
