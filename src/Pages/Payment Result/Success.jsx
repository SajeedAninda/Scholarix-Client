import React from 'react';
import { useParams } from 'react-router-dom';

const Success = () => {
    let { tranId } = useParams();
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] p-8 rounded-lg shadow-2xl space-y-4'>
                <h1 className='text-white font-bold text-4xl text-center'>Your Payment is Successfull.</h1>
                <h2 className='text-white font-bold text-2xl text-center'>Payment ID:<span className='font-medium'> {tranId}</span></h2>
                <h2 className='text-white font-bold text-2xl text-center'>Please check profile page to view more details</h2>
            </div>
        </div>
    );
};

export default Success;