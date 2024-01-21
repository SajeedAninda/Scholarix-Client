import React from 'react';
import useConsultants from '../../../Hooks/useConsultants';
import CourseListSkeleton from '../../../Components/Skeleton/CourseListSkeleton';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ConsultantList = () => {
    let { consultants } = useConsultants();

    return (
        <div className='mx-auto w-[90%] py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Consultant List</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    See all the consultants that you have added, Update their details or Delete their profile
                </h2>
            </div>

            <div>
                <div className='mt-4'>
                    <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-11 px-6 py-4'>
                        <div className='text-white font-bold text-xl col-span-1 text-center'>
                            Image
                        </div>
                        <div className='text-white font-bold text-xl col-span-3 text-center'>
                            Full Name
                        </div>
                        <div className='text-white font-bold text-xl col-span-3 text-center'>
                            Email
                        </div>
                        <div className='text-white font-bold text-xl col-span-2 text-center'>
                            Expertise
                        </div>
                        <div className='text-white font-bold text-xl col-span-1 text-center'>
                            Update
                        </div>
                        <div className='text-white font-bold text-xl col-span-1 text-center'>
                            Delete
                        </div>
                    </div>
                </div>

                {
                    consultants ?
                        (
                            consultants?.map(consultant =>
                                <div className=''>
                                    <div className='bg-[#F7FFF7] border-b-2 border-[#ed4747] grid grid-cols-11 px-6 py-4 items-center'>
                                        <div className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center'>
                                            <img className='w-[50px] h-[50px] rounded-full object-cover' src={consultant?.imageUrl} alt="" />
                                        </div>
                                        <div className='text-[#0e2b45] font-bold text-lg col-span-3 text-center'>
                                            {consultant?.fullName}
                                        </div>
                                        <div className='text-[#0e2b45] font-bold text-lg col-span-3 text-center'>
                                            {consultant?.email}
                                        </div>
                                        <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center capitalize'>
                                            {consultant?.expertise}
                                        </div>

                                        <Link to={`updateCourse/${consultant?._id}`} className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center'>
                                            <MdEditSquare className='text-3xl cursor-pointer font-bold text-[#0e2b45]' />
                                        </Link>

                                        <div onClick={() => handleDeleteCourse(consultant?._id)} className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center'>
                                            <RiDeleteBinFill className='text-3xl cursor-pointer font-bold text-[#ed4747]' />
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                        :
                        (
                            <CourseListSkeleton></CourseListSkeleton>
                        )
                }
            </div>
        </div>
    );
};

export default ConsultantList;