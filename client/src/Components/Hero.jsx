import React from 'react';


const Hero = () => {
    return (
        <>
            <div className=" text-slate-800 py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-6xl md:text-6xl font-bold mb-4">Streamline Your Education Platform</h1>
                            <p className="text-lg md:text-xl mb-8 mt-5">Empower your students and instructors with our comprehensive CRM solution.</p>
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-4 md:mb-0 md:mr-4">
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700">Get Started</button>
                                </div>

                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://via.placeholder.com/500" alt="CRM Image" className="mx-auto md:ml-auto md:mr-0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
