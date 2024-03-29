import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../assets/Logo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useAuth from '../../Hooks/useAuth';
import useCurrentUserData from '../../Hooks/useCurrentUserData';


const Navbar = () => {
    let { loggedInUser, logOut } = useAuth();
    let { userData, isUserLoading } = useCurrentUserData();

    let [isMenuHidden, setIsMenuHidden] = useState(false);
    let [showLogout, setShowLogout] = useState(false);

    let toggleLogout = () => {
        setShowLogout(!showLogout);
    }



    let toggleMenu = () => {
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

    let clipCustomStyle = {
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

                <div className="w-fit block lg:hidden">
                    {
                        loggedInUser ?
                            <div className="flex items-center justify-center">
                                <button onClick={handleLogOut} className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                    Log Out
                                </button>
                            </div>
                            :
                            <div className="flex items-center justify-center">
                                <Link to={"/login"} className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                    Login
                                </Link>
                            </div>
                    }
                </div>

                <div className="m-5 lg:hidden" id="menu-button" onClick={toggleMenu}>
                    <FaBarsStaggered className='text-2xl' />
                </div>


                <div className={`h-20 w-screen lg:w-[80%] mt-4 ${isMenuHidden ? 'hidden lg:block' : ''}`} style={clipCustomStyle}>
                    <div className="bg-[#A42D25] rounded-2xl">
                        <div className="flex items-center justify-center h-8 bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-2xl py-2">
                            <div className='flex items-center gap-3 text-[#F7FFF7]'>
                                <a href={"https://www.facebook.com/sajeedaninda/"} target="_blank">
                                    <FaFacebook className='text-xl md:text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>

                                <a href={"https://www.instagram.com/_a.n.i.n.d.a_"} target="_blank">
                                    <FaInstagram className='text-xl md:text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>
                                <h2 className='text-xl md:text-2xl border-l-2 border-r-2 px-3 border-[#F7FFF7] font-bold mx-4'>Scholarix</h2>
                                <a href={"https://github.com/SajeedAninda"} target="_blank">
                                    <FaGithub className='text-xl md:text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>

                                <a href={"https://www.linkedin.com/in/sajeed-aninda/"} target="_blank">
                                    <FaLinkedin className='text-xl md:text-2xl text-[#F7FFF7] hover:opacity-70' />
                                </a>
                            </div>
                        </div>




                        <div className="flex items-center justify-center">
                            <ul className="flex flex-wrap items-center justify-center py-2 gap-2 lg:gap-10 md:pt-[0.7rem] capitalize text-xs md:text-lg font-bold">

                                <li className='relative group'>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>


                                <li className='relative group'>
                                    <NavLink
                                        to="/studyAbroad"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                        }
                                    >
                                        Study Abroad
                                    </NavLink>
                                </li>

                                <li className='relative group'>
                                    <NavLink
                                        to="/courses"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                        }
                                    >
                                        Courses
                                    </NavLink>
                                </li>

                                <li className='relative group'>
                                    <NavLink
                                        to="/scholarships"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                        }
                                    >
                                        Scholarships
                                    </NavLink>
                                </li>

                                <li className='relative group'>
                                    <NavLink
                                        to="/consultant"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                        }
                                    >
                                        Consultants
                                    </NavLink>
                                </li>

                                {
                                    loggedInUser && (
                                        <div>
                                            {userData?.role === "user" && (
                                                <li className='relative group'>
                                                    <NavLink
                                                        to="/user"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                                        }
                                                    >
                                                        Profile
                                                    </NavLink>
                                                </li>
                                            )}

                                            {userData?.role === "admin" && (
                                                <li className='relative group'>
                                                    <NavLink
                                                        to="/admin"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "border-b-[4px] rounded-b-md border-white" : "hover:border-b-[4px] hover:border-white transform transition-all hover:rounded-b-md"
                                                        }
                                                    >
                                                        Admin Panel
                                                    </NavLink>
                                                </li>
                                            )}
                                        </div>
                                    )
                                }

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="w-[10%] hidden lg:block">
                    {
                        loggedInUser ?
                            <div onClick={toggleLogout} className='pl-4 relative z-50'>
                                <img className='w-[70px] rounded-full border-4 hover:opacity-70 border-white cursor-pointer' src={loggedInUser?.photoURL} alt="" />

                                <button onClick={handleLogOut} className={`top-20 right-5 px-5 z-50 py-3 text-[#0e2b45]  cursor-pointer text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105  hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 absolute ${showLogout ? "translate-y-0" : "hidden translate-y-[-10px]"}`}>
                                    Log Out
                                </button>
                            </div>

                            :
                            <div className="flex items-center justify-center">
                                <Link to={"/login"} className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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