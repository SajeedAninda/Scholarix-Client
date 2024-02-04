import React from 'react';
import service1 from "../../assets/HowWeHelpImG/service1.jpg"
import service2 from "../../assets/HowWeHelpImG/service2.jpg"
import service3 from "../../assets/HowWeHelpImG/service3.jpg"
import service4 from "../../assets/HowWeHelpImG/service4.jpg"
import { Link } from 'react-router-dom';
import "./service.css"

const HowWeHelp = () => {
    return (
        <div className='bg-[#F7FFF7]'>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">How we help You</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Your Education, Our Expertise: Unveiling the Multifaceted Ways We Foster Academic Triumph, Inspire Learning, and Provide Comprehensive Support at Every Turn, Ensuring a Holistic Approach to Personal and Academic Excellence.
                        </p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between service1 py-8 px-12 rounded-full mb-6'>
                        <div className='w-[30%] flex '>
                            <img className='w-[250px] h-[250px] rounded-full object-cover' src={service1} alt="" />
                        </div>
                        <div className='flex flex-col gap-3 w-[70%]'>
                            <h2 className='text-[#0e2b45] font-bold text-2xl'>Admissions Assistance</h2>
                            <p className='text-[#0e2b45] font-semibold text-md leading-7'>Unlock the doors to your dream institution with our holistic admissions support. Our experienced team assists you in crafting compelling applications, refining impactful personal statements, and preparing for interviews. We go beyond the conventional approach, ensuring your application stands out, increasing your likelihood of securing admission to the institution that aligns with your aspirations.</p>
                            <Link to={"/studyAbroad"} className="relative w-fit px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse items-center justify-between service2 py-8 px-12 rounded-full mb-6'>
                        <div className='w-[30%] flex justify-end'>
                            <img className='w-[250px] h-[250px] rounded-full object-cover' src={service2} alt="" />
                        </div>
                        <div className='flex flex-col gap-3 w-[70%]'>
                            <h2 className='text-[#0e2b45] font-bold text-2xl'>Academic Counseling and Planning</h2>
                            <p className='text-[#0e2b45] font-semibold text-md leading-7'> Embark on a transformative educational journey with our seasoned academic counselors who offer comprehensive guidance. Through in-depth consultations, we help you identify your academic and career goals, strategize a personalized academic plan, and make informed decisions. Our commitment is to empower you with the knowledge and insights needed to thrive in your chosen field.</p>
                            <Link to={"/consultant"} className="relative w-fit px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className='flex items-center justify-between service1 py-8 px-12 rounded-full mb-6'>
                        <div className='w-[30%] flex '>
                            <img className='w-[250px] h-[250px] rounded-full object-cover' src={service3} alt="" />
                        </div>
                        <div className='flex flex-col gap-3 w-[70%]'>
                            <h2 className='text-[#0e2b45] font-bold text-2xl'>Test Preparation Support</h2>
                            <p className='text-[#0e2b45] font-semibold text-md leading-7'>Elevate your test-taking performance with our specialized test preparation programs. Our expert instructors provide targeted content review, personalized strategies, and ample practice materials to enhance your confidence and proficiency. Whether you're tackling standardized tests or entrance exams, we equip you with the tools needed to excel and achieve your academic goals.</p>
                            <Link to={"/courses"} className="relative w-fit px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse items-center justify-between service2 py-8 px-12 rounded-full mb-6'>
                        <div className='w-[30%] flex justify-end'>
                            <img className='w-[250px] h-[250px] rounded-full object-cover' src={service4} alt="" />
                        </div>
                        <div className='flex flex-col gap-3 w-[70%]'>
                            <h2 className='text-[#0e2b45] font-bold text-2xl'>Educational Workshops and Seminars</h2>
                            <p className='text-[#0e2b45] font-semibold text-md leading-7'> Stay ahead of the curve with our engaging educational workshops and seminars. We bring in industry experts and seasoned educators to share valuable insights and real-world experiences. These sessions go beyond traditional learning, fostering an environment where knowledge is dynamic and continuously evolving.</p>
                            <Link to={"/scholarships"} className="relative w-fit px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeHelp;