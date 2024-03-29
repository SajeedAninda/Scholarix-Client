import React from 'react';
import useCourses from '../../Hooks/useCourses';
import { Tab } from '@headlessui/react';
import TabCourseSkeleton from '../../Components/Skeleton/TabCourseSkeleton';
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
                        <Tab.List className="flex overflow-x-scroll space-x-4 md:space-x-1 rounded-xl bg-[#ed4747] p-1">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                USA
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                China
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Canada
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                UK
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Malaysia
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Australia
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Germany
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                India
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-gradient-to-r from-[#ed4747] to-[#920707] text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
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
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    chinaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {chinaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    canadaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {canadaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    ukCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {ukCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    malaysiaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {malaysiaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    australiaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {australiaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    germanyCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {germanyCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    indiaCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {indiaCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                            <Tab.Panel>
                                {
                                    franceCourses ?
                                        (
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                                {franceCourses?.map(course => (
                                                    <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
                                                        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.imageUrl} alt="" />


                                                        <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#920707] to-[#ed4747] rounded-b-lg">
                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white"><span className='capitalize'>{course?.degree_name}</span> in {course?.course_name}</h5>


                                                            <p className="mb-3 font-normal text-white">
                                                                {course?.university_name} in <span className='capitalize'>{course?.country_name}</span>
                                                            </p>




                                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{course?.tuition_fees}$/Semester </h5>


                                                            <Link to={`/courseDetails/${course?._id}`} className="mt-auto inline-flex items-center relative px-3 py-1 text-[#ed4747] text-lg font-bold overflow-hidden bg-white rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
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
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroadTabs;