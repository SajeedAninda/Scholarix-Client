import React from 'react';
import { FaFilter } from "react-icons/fa";


const Courses = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto py-8'>
                <div>
                    <div className="max-w-3xl mx-auto text-center pb-12">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Find Available Courses</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Explore our diverse range of courses. Find the ideal academic path by browsing through Course names, Countries, Available Scholarships, Degrees, and Tuition fees.
                        </p>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div className='filters w-[30%] border-2 border-[#ed4747] p-4 rounded-md'>
                        <div className='border-b-2 border-[#ed4747] flex justify-center items-center gap-2 py-2'>
                            <h2 className='text-xl font-bold text-center'>Filter Courses</h2>
                            <FaFilter className='text-2xl' />
                        </div>

                        <div className='py-4'>
                            <h2 className='text-lg font-semibold'>Tuition Range Per Semester:</h2>
                            <div className='flex gap-4 py-2'>
                                <input className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={0} />
                                <input className='w-full border-2 border-[#ed4747] rounded-xl py-2 px-4 font-semibold text-xl' type="number" defaultValue={30000} />
                            </div>
                        </div>
                    </div>

                    <div className='search&card w-[70%] border-2 border-[#ed4747] rounded-md'>
                        course Names
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;