// Dashboard.js
import React from 'react';
import { FaUser } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <div className="p-4 bg-gray-200">
                <nav className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Admin wala prop</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">Services</a></li>
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                <div className="flex items-center mb-4">
                    <FaUser className="mr-2" />
                    <h2 className="text-lg font-bold">Admin ka nam</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-8 ">
                        <h3 className="text-lg font-bold mb-2">Total Users</h3>
                        <p className="text-gray-500">1000</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-lg font-bold mb-2">Total Instructor</h3>
                        <p className="text-gray-500">500</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-lg font-bold mb-2">Total Courses</h3>
                        <p className="text-gray-500">$5000</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-lg font-bold mb-2">Total Publish Courses </h3>
                        <p className="text-gray-500">10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
