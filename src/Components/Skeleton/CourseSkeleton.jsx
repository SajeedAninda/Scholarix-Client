import React from 'react';

const CourseSkeleton = () => {
    let mappingArray = [1, 2, 3, 4, 5, 6]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
            {
                mappingArray.map(courseCards =>
                    <div className="bg-gray-300 animate-pulse rounded-lg shadow-lg flex flex-col">
                        <img className="rounded-t-lg w-full h-[200px] object-cover bg-gray-400 animate-pulse" alt="" />
                        <div className="p-5 flex flex-col flex-grow bg-gray-300 animate-pulse rounded-b-lg">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white bg-gray-400 w-full h-[14px] animate-pulse">
                            </h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white bg-gray-400 w-full h-[14px] animate-pulse">
                            </h5>
                            <p className="mb-3 font-normal text-white bg-gray-400 w-[80%] h-[14px] animate-pulse">
                            </p>
                            <p className="mb-3 font-normal text-white bg-gray-400 w-[80%] h-[14px] animate-pulse">
                            </p>
                            <h5 className="mb-2 mt-4 text-xl font-bold tracking-tight text-white bg-gray-400 w-[60%] h-[16px] animate-pulse">
                            </h5>
                            <button className='inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#0e2b45] rounded-lg bg-gray-400 w-full h-[28px] animate-pulse mt-3'>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CourseSkeleton;