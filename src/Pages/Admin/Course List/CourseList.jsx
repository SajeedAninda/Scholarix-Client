import React, { useState } from 'react';
import useCourses from '../../../Hooks/useCourses';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import CourseListSkeleton from '../../../Components/Skeleton/CourseListSkeleton';
import { Helmet } from 'react-helmet-async';


const CourseList = () => {
    let { courses, isCoursesLoading, refetch } = useCourses();
    let [searchText, setSearchText] = useState('');
    let axiosInstance = useAxiosInstance();

    let filteredCourses;

    if (searchText == '') {
        filteredCourses = courses;
    }
    else {
        filteredCourses = courses?.filter(course =>
            course?.university_name.toLowerCase().includes(searchText.toLowerCase()) ||
            course?.course_name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    let handleDeleteCourse = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Deleted, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0e2b45',
            cancelButtonColor: '#ed4747',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/deleteCourse/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            console.log(res.data);
                            toast.success("Course Deleted Succesfully")
                        }
                    })
                    .catch(error => {
                        console.error("Error :", error);
                        toast.error('Error', 'Failed to delete Course');
                    });
            }
        });
    }

    return (
        <div className='mx-auto w-[98%] md:w-[90%] py-8'>
            <Helmet>
                <title>Admin | Course List</title>
            </Helmet>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Course List</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    See All the courses that you have added and take actions according to that
                </h2>
            </div>

            <div className='mt-8'>
                <h1 className='text-3xl text-[#0e2b45] font-bold'>
                    Total Courses: {filteredCourses?.length}
                </h1>
            </div>

            <div className='SearchBar relative mt-4'>
                <input onChange={(e) => { setSearchText(e.target.value) }} className='w-full border-2 border-[#ed4747] rounded-lg py-3 px-4 text-[#0e2b45] font-semibold placeholder:font-semibold' type="text" placeholder='Search By Course or University Name' />
                <FaSearch className='text-xl absolute right-5 bottom-4 text-[#ed4747] cursor-pointer' />
            </div>

            <div className='mt-4'>
                <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-11 px-2 md:px-6 py-4'>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center'>
                        Image
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-3 text-center'>
                        Course
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-4 text-center'>
                        University
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center'>
                        Degree
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center'>
                        Update
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center'>
                        Delete
                    </div>
                </div>
            </div>

            {
                filteredCourses ?
                    (
                        filteredCourses?.map(course =>
                            <div className=''>
                                <div className='bg-[#F7FFF7] border-b-2 border-[#ed4747] grid grid-cols-11  px-2 md:px-6 py-4 items-center'>
                                    <div className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center'>
                                        <img className='w-[50px] h-[50px] rounded-full object-cover' src={course?.imageUrl} alt="" />
                                    </div>
                                    <div className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-3 text-center'>
                                        {course?.course_name}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-4 text-center'>
                                        {course?.university_name}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-1 text-center capitalize'>
                                        {course?.degree_name}
                                    </div>

                                    <Link to={`updateCourse/${course?._id}`} className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center'>
                                        <MdEditSquare className='text-[12px] md:text-base lg:text-3xl cursor-pointer font-bold text-[#0e2b45]' />
                                    </Link>

                                    <div onClick={() => handleDeleteCourse(course?._id)} className='text-[#0e2b45] font-bold  text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center'>
                                        <RiDeleteBinFill className='text-[12px] md:text-base lg:text-3xl cursor-pointer font-bold text-[#ed4747]' />
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
    );
};

export default CourseList;