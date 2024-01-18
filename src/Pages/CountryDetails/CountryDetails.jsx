import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
        </div>
    );
};

export default CountryDetails;