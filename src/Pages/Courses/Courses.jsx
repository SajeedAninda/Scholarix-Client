import React, { useState } from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Courses = () => {
    let axiosInstance = useAxiosInstance();

    let [tuitionMin, setTuitionMin] = useState(0);
    let [tuitionMax, setTuitionMax] = useState(30000);

    const { data: courseDetails } = useQuery({
        queryKey: ['assetList'],
        queryFn: async () => {
            const response = await axiosInstance("/courseDetails");
            return response.data;
        }
    })

    console.log(tuitionMin, tuitionMax);


    return (
        <div>
            <div className='w-[90%] mx-auto py-8'>
                <div>
                    <div className="max-w-3xl mx-auto text-center pb-8">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Find Available Courses</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Explore our diverse range of courses. Find the ideal academic path by browsing through Courses, Universities, Countries, Available Scholarships, Degrees, and Tuition fees.
                        </p>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div className='filters w-[30%] border-2 border-[#ed4747] px-4 pt-4 pb-8 rounded-md h-fit'>
                        <div className='FilterHeader border-b-2 border-[#ed4747] flex justify-center items-center gap-2 py-2'>
                            <h2 className='text-xl font-bold text-center'>Filter Courses</h2>
                            <TbFilterSearch className='text-3xl' />
                        </div>

                        <div className='TuitionRange pt-4 '>
                            <h2 className='text-lg font-semibold'>Tuition Range Per Semester:</h2>
                            <div className='flex gap-3 py-2'>
                                <div className='w-full'>
                                    <input onChange={(e) => { setTuitionMin(parseFloat(e.target.value)) }} className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={0} />
                                </div>
                                <div className='w-full'>
                                    <input onChange={(e) => { setTuitionMax(parseFloat(e.target.value)) }} className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={30000} />
                                </div>
                            </div>
                        </div>

                        <div className='Countries pt-2'>
                            <div>
                                <label className='text-lg font-semibold' htmlFor="country">
                                    Country:
                                </label>
                                <br />
                                <select className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-md' name="country" id="country">
                                    <option className='font-semibold' value="allCountry" selected>All Countries</option>
                                    <option className='font-semibold' value="usa">USA</option>
                                    <option className='font-semibold' value="china">China</option>
                                    <option className='font-semibold' value="canada">Canada</option>
                                    <option className='font-semibold' value="uk">UK</option>
                                    <option className='font-semibold' value="malaysia">Malaysia</option>
                                    <option className='font-semibold' value="australia">Australia</option>
                                    <option className='font-semibold' value="germany">Germany</option>
                                    <option className='font-semibold' value="india">India</option>
                                    <option className='font-semibold' value="france">France</option>
                                </select>
                            </div>
                        </div>

                        <div className='Degrees pt-2'>
                            <div>
                                <label className='text-lg font-semibold' htmlFor="degree">
                                    Degree:
                                </label>
                                <br />
                                <select className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-md' name="field" id="field" >
                                    <option className='font-semibold' value="allDegree" selected>All Degrees</option>
                                    <option className='font-semibold' value="engineering">Engineering</option>
                                    <option className='font-semibold' value="management">Management</option>
                                    <option className='font-semibold' value="economics">Economics</option>
                                    <option className='font-semibold' value="medicine">Medicine</option>
                                    <option className='font-semibold' value="law">Law</option>
                                </select>
                            </div>
                        </div>

                        <div className='AvailableScholarships pt-2'>
                            <div>
                                <label className='text-lg font-semibold' htmlFor="degree">
                                    Scholarship:
                                </label>
                                <br />
                                <select className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-md' name="scholarship" id="scholarship" >
                                    <option className='font-semibold' value="allScholarship" selected>All Courses</option>
                                    <option className='font-semibold' value="yes">Courses with Available Scholarship</option>
                                    <option className='font-semibold' value="no">Courses without Scholarship</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='search&card w-[70%]'>
                        <div className='SearchBar relative'>
                            <input className='w-full border-2 border-[#ed4747] rounded-lg py-3 px-4 text-[#0e2b45] font-semibold placeholder:font-semibold' type="text" placeholder='Search By Course or University Name' />
                            <FaSearch className='text-xl absolute right-5 bottom-4 text-[#ed4747] cursor-pointer' />
                        </div>

                        <div className='Cards'>
                            {
                                courseDetails ?
                                    (
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
                                            {courseDetails.map(course => (
                                                <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col">
                                                    <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                    <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                        <p className="mb-3 font-normal text-white">
                                                            {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                        </p>




                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                        <Link className='mt-auto inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#0e2b45] bg-white rounded-lg hover:bg-[#ed4747] hover:text-white' to={`/servicesDetails/${course?._id}`}>
                                                            See Details
                                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                    :
                                    (
                                        <div>Loading...</div>
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;