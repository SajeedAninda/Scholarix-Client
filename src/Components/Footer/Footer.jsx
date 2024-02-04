import React from 'react';
import logo from "../../assets/Logo/logo.png"
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useCountries from '../../Hooks/useCountries';

const Footer = () => {
    let { countries } = useCountries();
    let currentYear = new Date().getFullYear();


    return (
        <div className="relative mt-16 bg-gradient-to-r from-[#ed4747] to-[#920707]">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#ed4747", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#920707", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient)"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>

            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex justify-between items-center pb-8">
                    <div className="md:max-w-md lg:col-span-2">
                        <Link to={"/"}>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[80px]' src={logo} alt="" />
                                <h2 className='text-white text-4xl font-bold'>Scholarix</h2>
                            </div>
                        </Link>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                As you embark on this exciting journey of knowledge with Scholarix, we extend our heartfelt gratitude. This platform is not just about education; it's about nurturing dreams, fostering growth, and celebrating every achievement. Your aspirations are our mission, and we look forward to witnessing the incredible journey that lies ahead.
                            </p>
                            <p className="mt-4 text-sm text-white">
                                Thank you for choosing Scholarix – where every educational endeavor is a step towards a brighter future."
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div>
                            <p className="font-bold tracking-wide text-white">
                                Links
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link
                                        to={"/"}
                                        className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/studyAbroad"}
                                        className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                    >
                                        Study Abroad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/courses"}
                                        className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                    >
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/scholarships"}
                                        className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                    >
                                        Scholarships
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/consultant"}
                                        className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                    >
                                        Consultants
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold tracking-wide text-white">
                                Countries
                            </p>
                            <ul className="mt-4 space-y-2">
                                <div className="grid grid-cols-2 gap-x-6">
                                    {
                                        countries?.map(country =>
                                            <div key={country?._id} className="mb-4">
                                                <Link
                                                    to={`/countryDetails/${country?._id}`}
                                                    className="transition-colors duration-300 text-purple-50 hover:text-white hover:underline"
                                                >
                                                    {country?.country_name}
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-purple-200 sm:flex-row">
                    <p className="text-sm text-gray-100">
                        © Copyright {currentYear} Scholarix. Created By Sajeed Aninda.
                    </p>
                    <div className='flex items-center gap-3 text-[#F7FFF7]'>
                        <a href={"https://www.facebook.com/sajeedaninda/"} target="_blank">
                            <FaFacebook className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                        </a>

                        <a href={"https://www.instagram.com/_a.n.i.n.d.a_"} target="_blank">
                            <FaInstagram className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                        </a>
                        <a href={"https://github.com/SajeedAninda"} target="_blank">
                            <FaGithub className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                        </a>

                        <a href={"https://www.linkedin.com/in/sajeed-aninda/"} target="_blank">
                            <FaLinkedin className='text-2xl text-[#F7FFF7] hover:opacity-70' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;