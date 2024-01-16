import React, { useRef, useState } from 'react';
import useCourses from '../../Hooks/useCourses';
import { Tab } from '@headlessui/react';
import CourseSkeleton from '../../Components/Skeleton/CourseSkeleton';
import { Link } from 'react-router-dom';

const StudyAbroadTabs = () => {
    let { courses, isCoursesLoading, refetch, } = useCourses();

    let usaCourses = courses?.filter(course => course.country_name === "usa");
    let chinaCourses = courses?.filter(course => course.country_name === "china");
    let canadaCourses = courses?.filter(course => course.country_name === "canada");
    let australiaCourses = courses?.filter(course => course.country_name === "australia");
    let malaysiaCourses = courses?.filter(course => course.country_name === "malaysia");
    let ukCourses = courses?.filter(course => course.country_name === "uk");
    let germanyCourses = courses?.filter(course => course.country_name === "germany");
    let franceCourses = courses?.filter(course => course.country_name === "france");
    let indiaCourses = courses?.filter(course => course.country_name === "india");

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div>
            <div className='mt-6 space-y-8'>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-lg text-[#0e2b45] text-center">Available Courses in different Countries</h1>
                    <p className="text-xl font-semibold text-[#0e2b45] text-center">See the courses that are available and choose course that suits you
                    </p>
                </div>

                <div className='mt-6'>
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                USA
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                China
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Canada
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                UK
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Malaysia
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Australia
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Germany
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                India 
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                France
                            </Tab>
                            
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                {
                                    usaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {usaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className='mt-auto inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#0e2b45] bg-white rounded-lg hover:bg-[#ed4747] hover:text-white'>
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
                                            <CourseSkeleton></CourseSkeleton>
                                        )
                                }
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    chinaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {chinaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className='mt-auto inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#0e2b45] bg-white rounded-lg hover:bg-[#ed4747] hover:text-white'>
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
                                            <CourseSkeleton></CourseSkeleton>
                                        )
                                }
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    canadaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {canadaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className='mt-auto inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#0e2b45] bg-white rounded-lg hover:bg-[#ed4747] hover:text-white'>
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
                                            <CourseSkeleton></CourseSkeleton>
                                        )
                                }
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroadTabs;