<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = isSticky ? 'nav-back shadow-md fixed w-full top-0 left-0 z-50 flex justify-between items-center' : 'bg-transparent shadow-none absolute w-full top-0 left-0 z-50 ';
  const menuClasses = isOpen ? 'block' : 'hidden';

  return (
    <>
      <nav className={navClasses}>
        <div className="container flex justify-around items-center p-4 mx-auto">
          <h1 className="text-blue-600 text-4xl font-bold">Edu-Sphere</h1>
          <div className="flex justify-around items-center">
            <ul className={`hidden md:flex text-lg mr-14`}>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Software</a></li>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Pricing</a></li>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Resources</a></li>
            </ul>
            {/* <button className="bg-slate-950 text-white px-4 py-2 rounded-md mr-4 hidden md:block">Get Demo</button> */}
            <Link to="/signin"><button className=" bg-blue-800 text-white text-bold px-4 py-2 rounded-md hidden md:block hover:bg-blue-500 hover:text-slate-950 ">Get Started Free</button></Link>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <ul className={`bg-white p-4 ${menuClasses} md:hidden transition-all duration-500`}>
          <li className="mb-2"><a href="#" className="text-blue-700">Software</a></li>
          <li className="mb-2"><a href="#" className="text-blue-700">Pricing</a></li>
          <li className="mb-2"><a href="#" className="text-blue-700">Resources</a></li>
          <li><button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4">Get Demo</button></li>
          <li><button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2">Get Started Free</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = isSticky ? 'nav-back shadow-md fixed w-full top-0 left-0 z-50 flex justify-between items-center' : 'bg-transparent shadow-none absolute w-full top-0 left-0 z-50 ';
  const menuClasses = isOpen ? 'block' : 'hidden';

  return (
    <>
      <nav className={navClasses}>
        <div className="container flex justify-around items-center p-4 mx-auto">
          <h1 className="text-blue-600 text-4xl font-bold">Edu-Sphere</h1>
          <div className="flex justify-around items-center">
            <ul className={`hidden md:flex text-lg mr-14`}>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Software</a></li>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Pricing</a></li>
              <li className="mr-4"><a href="#" className="text-white hover:text-slate-950">Resources</a></li>
            </ul>
            {/* <button className="bg-slate-950 text-white px-4 py-2 rounded-md mr-4 hidden md:block">Get Demo</button> */}
            <Link to="/signin"><button className=" bg-blue-800 text-white text-bold px-4 py-2 rounded-md hidden md:block hover:bg-blue-500 hover:text-slate-950 ">Get Started Free</button></Link>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <ul className={`bg-white p-4 ${menuClasses} md:hidden transition-all duration-500`}>
          <li className="mb-2"><a href="#" className="text-blue-700">Software</a></li>
          <li className="mb-2"><a href="#" className="text-blue-700">Pricing</a></li>
          <li className="mb-2"><a href="#" className="text-blue-700">Resources</a></li>
          <li><button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4">Get Demo</button></li>
          <li><button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2">Get Started Free</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
>>>>>>> 6ea7a5c1e14c891a3818c4300460bfaf88bf12df
