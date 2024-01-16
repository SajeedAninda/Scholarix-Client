import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../assets/Logo/logo.png"
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useAuth from '../../Hooks/useAuth';


const Navbar = () => {
    let { loggedInUser, logOut } = useAuth();
    const [isMenuHidden, setIsMenuHidden] = useState(false);
    const toggleMenu = () => {
        setIsMenuHidden(!isMenuHidden);
    };

    let handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const clipCustomStyle = {
        '@media (min-width: 992px)': {
            clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
        },
    };

    return (
        <nav className="text-[#F7FFF7] bg-gradient-to-r from-[#ed4747] to-[#920707] py-2">
            <div className="flex flex-wrap items-center justify-between px-2 lg:px-8 ">
                <div className="flex justify-center items-center lg:w-[10%]">
                    <div className="text-2xl lg:pl-0">
                        <img className='w-[85px]' src={logo} alt="" />
                    </div>
                </div>

                <div className="w-[10%] block lg:hidden">
                    <div className="flex items-center justify-center">
                        <Link to={"/login"} className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg'>
                            Login
                        </Link>
                    </div>
                </div>

                <div className="m-5 lg:hidden" id="menu-button" onClick={toggleMenu}>
                    <FaBarsStaggered className='text-2xl' />
                </div>


                <div className={`h-20 w-screen lg:w-[80%] mt-4 ${isMenuHidden ? 'hidden lg:block' : ''}`} style={clipCustomStyle}>
                    <div className="bg-[#A42D25] rounded-2xl">
                        <div className="flex items-center justify-center h-8 bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-2xl py-2">
                            <div className='flex items-center gap-3 text-[#F7FFF7]'>
                                <a href={"https://www.facebook.com/sajeedaninda/"} target="_blank">
                                    <FaFacebook className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>

                                <a href={"https://www.instagram.com/_a.n.i.n.d.a_"} target="_blank">
                                    <FaInstagram className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>
                                <h2 className='text-2xl border-l-2 border-r-2 px-3 border-[#F7FFF7] font-bold mx-4'>Scholarix</h2>
                                <a href={"https://github.com/SajeedAninda"} target="_blank">
                                    <FaGithub className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>

                                <a href={"https://www.linkedin.com/in/sajeed-aninda/"} target="_blank">
                                    <FaLinkedin className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <ul className="flex items-center py-2 gap-2 lg:gap-10 md:pt-[0.7rem] capitalize text-sm md:text-lg font-bold">
                                <li className='relative group'>
                                    <Link to={"/"} className=" transition-all duration-300">
                                        Home
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 "></span>
                                    </Link>
                                </li>
                                <li className='relative group'>
                                    <Link to={"/studyAbroad"} className=" transition-all duration-300">
                                        Study Abroad
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </li>
                                <li className='relative group'>
                                    <Link to={"courses"} className=" transition-all duration-300">
                                        Courses
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </li>
                                <li className='relative group'>
                                    <a href="#" className=" transition-all duration-300">
                                        Scholarships
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </a>
                                </li>
                                <li className='relative group'>
                                    <a href="#" className=" transition-all duration-300">
                                        Consultant
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </a>
                                </li>
                                {
                                    loggedInUser &&
                                    <li className='relative group'>
                                        <Link to="/admin" className=" transition-all duration-300">
                                            Admin Panel
                                            <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="w-[10%] hidden lg:block">
                    {
                        loggedInUser ?
                            <div className="flex items-center justify-center">
                                <button onClick={handleLogOut} className='bg-[#ed4747] px-5 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg'>
                                    Log Out
                                </button>
                            </div>
                            :
                            <div className="flex items-center justify-center">
                                <Link to={"/login"} className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg'>
                                    Login
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;