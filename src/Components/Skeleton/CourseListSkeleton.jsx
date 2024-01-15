import React from 'react';

const CourseListSkeleton = () => {
    let mappingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        mappingArray.map(arr =>
            <div className='mb-2'>
                <div className='bg-gray-300 animate-pulse grid grid-cols-11 px-6 py-4 items-center'>
                    <div className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-gray-400 animate-pulse' alt="" />
                    </div>


                    <div className='text-[#0e2b45] font-bold text-lg col-span-3 text-center bg-gray-400 w-[80%] h-[20px] animate-pulse'>

                    </div>
                    <div className='text-[#0e2b45] font-bold text-lg col-span-4 text-center bg-gray-400 w-[80%] h-[20px] animate-pulse'>

                    </div>
                    <div className='text-[#0e2b45] font-bold text-lg col-span-1 text-center bg-gray-400 w-[80%] h-[20px] animate-pulse'>

                    </div>

                    <button className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center bg-gray-400 w-[30%] h-[20px] animate-pulse'>

                    </button>

                    <div onClick={() => handleDeleteCourse(course?._id)} className='text-[#0e2b45] font-bold text-lg col-span-1 text-center flex justify-center bg-gray-400 w-[30%] h-[20px] animate-pulse'>

                    </div>
                </div>
            </div>
        )
    );
};

export default CourseListSkeleton;