import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdLocationCity } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookReader } from "react-icons/fa";
import useCourses from '../../Hooks/useCourses';
import CourseSkeleton from '../../Components/Skeleton/CourseSkeleton';
import { Helmet } from 'react-helmet-async';



const CountryDetails = () => {
    let countryDetails = useLoaderData();
    let { _id, country_name, country_db_name, country_img_url, country_brief_details, country_overview_details, why_students_study_here, best_cities_to_study, top_universities, best_scholarships, best_courses } = countryDetails

    let { courses } = useCourses();

    let scholarshipCourses = courses?.filter(course => course?.country_name === country_db_name && course?.available_scholarship === "yes");

    console.log(scholarshipCourses);

    return (
        <div className='w-[90%] mx-auto py-8'>
            <Helmet>
                <title>Scholarix | Country Details</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <div className='flex-1'>
                    <img className='w-full h-[300px] border-8 border-[#ed4747] rounded-lg object-cover' src={country_img_url} alt="" />
                </div>

                <div className='flex-1 space-y-3'>
                    <h1 className='text-5xl font-bold text-[#0e2b45]'>{country_name}</h1>
                    <h2 className='text-2xl font-bold text-[#0e2b45]'>{country_brief_details}</h2>
                </div>
            </div>

            <div className='space-y-3 mt-6'>
                <h2 className='text-3xl font-bold text-[#0e2b45]'>Overview</h2>
                <p className='text-lg font-semibold text-[#0e2b45]'>{country_overview_details}</p>
            </div>

            <div className='space-y-3 mt-6'>
                <h2 className='text-3xl font-bold text-[#0e2b45]'>Why Study in {country_name}?</h2>
                <p className='text-lg font-semibold text-[#0e2b45]'>{why_students_study_here}</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='space-y-3 mt-6 flex-1'>
                    <h2 className='text-3xl font-bold text-[#0e2b45]'>Best Cities to study in {country_name}</h2>
                    <ul className='mt-4'>
                        {
                            best_cities_to_study?.map(cities =>
                                <li className='text-2xl mt-4 font-semibold text-[#0e2b45] flex items-center gap-2 pl-6'>
                                    <MdLocationCity />
                                    {cities}
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className='space-y-3 mt-6 flex-1'>
                    <h2 className='text-3xl font-bold text-[#0e2b45]'>Top Universities in {country_name}</h2>
                    <ul className='mt-4'>
                        {
                            top_universities?.map(unis =>
                                <li className='text-2xl mt-4 font-semibold text-[#0e2b45] flex items-center gap-2 pl-6'>
                                    <LiaUniversitySolid />
                                    {unis}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className='space-y-3 mt-10'>
                <h2 className='text-3xl font-bold text-[#0e2b45] text-center'>Best Courses in {country_name}</h2>
                <div className='flex flex-col md:flex-row justify-center mt-4 space-x-4'>
                    {/* Left List */}
                    <ul className='text-center'>
                        {best_courses.slice(0, Math.ceil(best_courses.length / 2)).map((course, index) => (
                            <li key={index} className='text-2xl mt-4 font-semibold text-[#0e2b45] flex items-center gap-2 pl-6'>
                                <FaBookReader />
                                {course}
                            </li>
                        ))}
                    </ul>

                    {/* Right List */}
                    <ul className='text-center'>
                        {best_courses.slice(Math.ceil(best_courses.length / 2)).map((course, index) => (
                            <li key={index} className='text-2xl mt-4 font-semibold text-[#0e2b45] flex items-center gap-2 pl-6'>
                                <FaBookReader />
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='space-y-3 mt-10 flex-1'>
                <h2 className='text-3xl font-bold text-[#0e2b45] text-center'>Best Scholarships in {country_name}</h2>
                <ul className='mt-4'>
                    {
                        best_scholarships?.map((scholarship, index) => (
                            <li key={index} className='text-[#0e2b45] flex items-center gap-2 mt-6'>
                                <h3 className='w-[40%] font-bold text-2xl'> {scholarship.name}</h3>
                                <p className='w-[60%] font-semibold text-xl'>{scholarship.details}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='space-y-3 mt-10 flex-1'>
                <h2 className='text-3xl font-bold text-[#0e2b45] text-center'>Available Courses With Scholarships in {country_name}</h2>
                <div className='Cards'>
                    {
                        scholarshipCourses?
                            (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                                    {scholarshipCourses?.map(course => (
                                        <div key={course?._id} className="bg-whiterounded-lg shadow-lg flex flex-col" data-aos="flip-up">
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
                </div>
            </div>



        </div>
    );
};

export default CountryDetails;