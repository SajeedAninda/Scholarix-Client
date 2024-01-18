import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdLocationCity } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookReader } from "react-icons/fa";



const CountryDetails = () => {
    let countryDetails = useLoaderData();
    let { _id, country_name, country_db_name, country_img_url, country_brief_details, country_overview_details, why_students_study_here, best_cities_to_study, top_universities, best_scholarships, best_courses } = countryDetails

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='flex gap-10 items-center'>
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

            <div className='flex justify-between items-center'>
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
                <div className='flex justify-center mt-4 space-x-4'>
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

        </div>
    );
};

export default CountryDetails;