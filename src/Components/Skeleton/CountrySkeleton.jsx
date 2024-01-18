import React from 'react';

const CountrySkeleton = () => {
    let mappingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-8'>
            {mappingArray.map(arr =>

                <div className='w-full h-[250px] rounded-lg bg-gray-400 animate-pulse'>

                </div>

            )}
        </div>
    );
};

export default CountrySkeleton;