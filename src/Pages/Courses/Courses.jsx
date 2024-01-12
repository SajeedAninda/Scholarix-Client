import React from 'react';
import { FaFilter } from "react-icons/fa";


const Courses = () => {
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
                    <div className='filters w-[30%] border-2 border-[#ed4747] p-4 rounded-md'>
                        <div className='FilterHeader border-b-2 border-[#ed4747] flex justify-center items-center gap-2 py-2'>
                            <h2 className='text-xl font-bold text-center'>Filter Courses</h2>
                            <FaFilter className='text-2xl' />
                        </div>

                        <div className='TuitionRange pt-4 '>
                            <h2 className='text-lg font-semibold'>Tuition Range Per Semester:</h2>
                            <div className='flex gap-4 py-2'>
                                <input className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={0} />
                                <input className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={30000} />
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

                    <div className='search&card w-[70%] border-2 border-[#ed4747] rounded-md'>
                        Course Names
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;