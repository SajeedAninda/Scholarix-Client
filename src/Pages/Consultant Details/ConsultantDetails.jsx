import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ConsultantDetails = () => {
    let consultantDetails = useLoaderData();
    let { _id, fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization, imageUrl } = consultantDetails

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
                    <h2 className='text-2xl font-bold text-[#0e2b45]'>Charges:
                        {charge}$
                    </h2>

                    <button className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                        Make Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsultantDetails;