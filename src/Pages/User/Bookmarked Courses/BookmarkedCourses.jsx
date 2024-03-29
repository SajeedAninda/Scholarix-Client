import React from 'react';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import TabCourseSkeleton from '../../../Components/Skeleton/TabCourseSkeleton';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const BookmarkedCourses = () => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: bookmarkedCourses, isLoading: isBookmarkedCoursesLoading, refetch } = useQuery({
        queryKey: ['bookmarkedCourses', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getBookmarkedCourses/${currentUserEmail}`);
            return response.data;
        }
    })

    let handleDeleteBookmark = (id) => {
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
                axiosInstance.delete(`/deleteBookmark/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            console.log(res.data);
                            toast.success("Bookmark Deleted Is Successful")
                        }
                    })
                    .catch(error => {
                        console.error("Error :", error);
                        toast.error('Error', 'Failed to delete Bookmark');
                    });
            }
        });
    }

    return (
        <div className='w-[90%] mx-auto py-8'>
            <Helmet>
                <title>User | Bookmarked Courses</title>
            </Helmet>
            <div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-lg text-[#0e2b45] text-center">Bookmarked Courses</h1>
                    <p className="text-xl font-semibold text-[#0e2b45] text-center">See the courses that you have Bookmarked.
                    </p>
                </div>

                <div className='mt-8'>
                    <h1 className='text-3xl text-[#0e2b45] font-bold'>
                        Total Bookmarked: {bookmarkedCourses?.length}
                    </h1>
                </div>

                <div className='Cards'>
                    {
                        bookmarkedCourses ?
                            (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                    {bookmarkedCourses?.map(course => (
                                        <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col">
                                            <div className='relative'>
                                                <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />

                                                <button onClick={() => handleDeleteBookmark(course?._id)} className='bg-gradient-to-r from-[#920707] to-[#ed4747] p-3 rounded-full absolute top-2 right-2 cursor-pointer'>
                                                    <MdDelete className='text-white text-3xl' />
                                                </button>
                                            </div>


                                            <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                <p className="mb-3 font-normal text-white">
                                                    {course?.university_name}
                                                </p>




                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                <Link to={`/courseDetails/${course?.courseId}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                                <TabCourseSkeleton></TabCourseSkeleton>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookmarkedCourses;