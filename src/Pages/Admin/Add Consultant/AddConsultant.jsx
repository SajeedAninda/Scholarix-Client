import React from 'react';

const AddConsultant = () => {
    return (
        <div className='py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Add Consultants</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    Expand Your Team of Experts
                </h2>
            </div>

            <div className='w-[90%] my-4 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg'>
                <div className='py-4 px-8'>
                    <form>
                        <div className='flex gap-6 w-full'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="fullName">
                                    Full Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: John Doe' type="text" name='fullName' id='fullName' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="qualification">
                                    Educational Qualification:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Bachelors in Educational Psychology' type="text" name='qualification' id='qualification' required />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddConsultant;