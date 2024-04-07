import React from 'react';
import hero from '../assets/hero01.png'

const Hero = () => {
    return (
        <>
            <div className=" text-slate-800 py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-5xl md:text-5xl font-bold mb-4">Empowering Education & Training Through Innovation</h1>
                            <p className=" text-lg md:text-lg mb-8 mt-5">At Edu-Sphere, we are revolutionizing the way education is delivered and experienced. Our innovative Edutech platform seamlessly integrates CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) functionalities, offering a comprehensive solution for training institutions, companies, and employees.</p>
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-4 md:mb-0 md:mr-4">
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700">Get Started</button>
                                </div>

                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src={hero} alt="CRM Image" className="mx-auto md:ml-auto md:mr-0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
