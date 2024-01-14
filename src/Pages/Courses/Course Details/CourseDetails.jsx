import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    let courseDetails = useLoaderData();
    let { _id, imageUrl, application_deadline, intake_time, scholarship_amount, available_scholarship, tuition_fees, city_name, country_name, field_name, degree_name, university_name, course_name } = courseDetails;

    const intakeTimeToDisplay = (intakeTime) => {
        switch (intakeTime) {
            case 'aut2024':
                return 'Autumn, 2024';
            case 'win2025':
                return 'Winter, 2025';
            case 'aut2025':
                return 'Autumn, 2025';
            case 'win2025':
                return 'Winter, 2025';
            default:
                return intakeTime;
        }
    };

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='flex gap-8'>
                <div className='w-[40%]'>
                    <img className='w-full h-[350px] object-cover border-8 border-[#ed4747] rounded-md' src={imageUrl} alt="" />
                </div>

                <div className='space-y-2 w-[60%]'>
                    <h1 className='text-4xl font-bold text-[#0e2b45]'>{course_name}</h1>
                    <h2 className='text-2xl font-semibold text-[#0e2b45]'>{university_name}</h2>
                    <div className='flex gap-3'>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Program ID: {_id}</h3>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Scholarship: {available_scholarship === "yes" ? "Available" : "Unavailable"}
                        </h3>
                    </div>
                    <h2 className='text-3xl font-bold text-[#0e2b45]'>Tuition Fee:
                        {available_scholarship === "yes" ?
                            <span className='space-x-2'>
                                <span className='text-4xl text-[#ed4747] ml-2'>
                                    {tuition_fees - scholarship_amount} $/Semester
                                </span>
                                <span className='line-through'>
                                    {tuition_fees}$/ Semester
                                </span>
                            </span>
                            :
                            <span className='text-4xl text-[#ed4747] ml-2'>
                                {tuition_fees}$/ Semester
                            </span>
                        }
                    </h2>
                    <div className='bg-[#ed474736] rounded-md p-6'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-semibold text-[#0e2b45]'>
                                Application Fee: 100$
                            </h3>
                            <h3 className='text-xl font-semibold text-[#0e2b45]'>
                                Service Fee: 500$
                            </h3>
                            <h3 className='text-xl font-semibold text-[#0e2b45]'>
                                Intake: {intakeTimeToDisplay(intake_time)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;