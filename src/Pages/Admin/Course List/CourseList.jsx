import React from 'react';
import useCourses from '../../../Hooks/useCourses';

const CourseList = () => {
    let [courses, isCoursesLoading] = useCourses();

    console.log(courses);

    return (
        <div className='mx-auto w-[90%] py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Course List</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    See All the courses that you have added and take actions according to that
                </h2>
            </div>

            <div className='mt-8'>
                <h1 className='text-3xl text-[#0e2b45] font-bold'>
                    Total Added Courses: {courses?.length}
                </h1>
            </div>

            <div className='mt-4'>
                <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-11 px-6 py-4'>
                    <div className='text-white font-bold text-xl col-span-2 text-center'>
                        Image
                    </div>
                    <div className='text-white font-bold text-xl col-span-3 text-center'>
                        Course
                    </div>
                    <div className='text-white font-bold text-xl col-span-3 text-center'>
                        University
                    </div>
                    <div className='text-white font-bold text-xl col-span-1 text-center'>
                        Degree
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
                courses?.map(course =>
                    <div className='mt-4'>
                        <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-11 px-6 py-4'>
                            <div className='text-white font-bold text-xl col-span-2 text-center flex justify-center'>
                                <img className='w-[50px] h-[50px] rounded-full' src={course?.imageUrl} alt="" />
                            </div>
                            <div className='text-white font-bold text-xl col-span-3 text-center'>
                                {course?.course_name}
                            </div>
                            <div className='text-white font-bold text-xl col-span-3 text-center'>
                                {course?.university_name}
                            </div>
                            <div className='text-white font-bold text-xl col-span-1 text-center'>
                                {course?.degree_name}
                            </div>
                            <div className='text-white font-bold text-xl col-span-1 text-center'>
                                Update
                            </div>
                            <div className='text-white font-bold text-xl col-span-1 text-center'>
                                Delete
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CourseList;