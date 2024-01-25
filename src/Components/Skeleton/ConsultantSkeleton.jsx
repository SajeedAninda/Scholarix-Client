import React from 'react';

const ConsultantSkeleton = () => {
    let mappingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                mappingArray.map(arr =>
                    <div className="w-80 h-72 relative bg-gray-300 animate-pulse flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-2xl">
                        <div className="w-28 h-28 mt-8 rounded-full border-4 border-gray-300 bg-gray-300 animate-pulse">
                            <img className='w-28 h-28 object-cover rounded-full bg-gray-400 animate-pulse' alt="" />
                        </div>
                        <div className='mt-3 font-bold text-lg col-span-3 text-center bg-gray-400 w-[80%] h-[18px] animate-pulse'>
                        </div><div className='mt-3 font-bold text-lg col-span-3 text-center bg-gray-400 w-[60%] h-[28px] animate-pulse'>
                        </div>
                        <button className="relative px-5 py-1 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-gray-300 animate-pulse rounded-md" href="#"></button>
                    </div>
                )
            }

        </div>
    );
};

export default ConsultantSkeleton;