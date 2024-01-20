import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ConsultantDetails = () => {
    let consultantDetails = useLoaderData();
    let { _id, fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization, imageUrl } = consultantDetails

    let availabilityCategory = (data) => {
        if (data === "virtual") {
            return "Virtual"
        }
        if (data === "inPerson") {
            return "In Person"
        }
        if (data === "virtualInPerson") {
            return "Virtual & In Person"
        }
    }

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='flex gap-8 space-y-2'>
                <div className='w-[40%]'>
                    <img className='w-full h-[350px] object-cover border-8 border-[#ed4747] rounded-md' src={imageUrl} alt="" />
                </div>

                <div className='space-y-2 w-[60%]'>
                    <h1 className='text-4xl font-bold text-[#0e2b45]'>{fullName}</h1>
                    <h2 className='text-2xl font-semibold text-[#0e2b45]'>{expertise}</h2>
                    <div className='flex gap-3'>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Consultant ID: {_id}</h3>
                    </div>
                    <h3 className='text-xl font-semibold text-[#0e2b45]'>
                        {bio}
                    </h3>
                    <h2 className='text-3xl font-bold text-[#0e2b45]'>
                        Charges: {charge}$
                    </h2>

                    <button className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                        Make Appointment
                    </button>
                </div>
            </div>

            <div className='bg-[#F7FFF7] mt-6 py-4 px-6'>
                <div>
                    <h2 className='text-[#0e2b45] text-3xl text-center font-bold'>Overview</h2>
                    <table className='w-full my-6'>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Expertise</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45]'>
                                {expertise}
                            </td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Qualifications</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{qualification}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Experience</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45]'>{experience}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Speciality In</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{specialization}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Availability</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{availabilityCategory(availability)}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Charge</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{charge}$ Per Session</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Phone Number</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{phoneNumber}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Email</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] lowercase'>{email}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConsultantDetails;