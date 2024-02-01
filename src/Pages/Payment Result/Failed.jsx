import React from 'react';
import { Link } from 'react-router-dom';

const Failed = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] p-8 rounded-lg shadow-2xl space-y-4'>
                <h1 className='text-white font-bold text-4xl text-center'>Payment Failed.</h1>
                
                <h2 className='text-white font-bold text-2xl text-center'>Please try again to book consultant from <Link className='underline hover:opacity-50' to={"/consultant"}>Consultant</Link> page</h2>
            </div>
        </div>
    );
};

export default Failed;