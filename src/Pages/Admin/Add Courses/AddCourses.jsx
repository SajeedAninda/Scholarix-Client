import React from 'react';

const AddCourses = () => {
    return (
        <div className='py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Add Courses</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    Add Courses with full descriptions for your Clients to see and select
                </h2>
            </div>
            <div className='w-[90%] my-4 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg'>
                <div className='py-4 px-8'>
                    <form>
                        {/* 1st row */}
                        <div className='flex gap-4 w-full'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="courseName">
                                    Course Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Computer Science & Engineering' type="text" name='courseName' id='courseName' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="universityName">
                                    University Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Harvard University' type="text" name='universityName' id='universityName' required />
                            </div>
                        </div>

                        {/* 2nd row */}
                        <div className='flex gap-4 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="degree">
                                    Degree:
                                </label>
                                <br />
                                <select className='mt-2 px-4 w-full rounded-lg py-2' name="degree" id="degree">
                                    <option value="bachelors">Bachelors</option>
                                    <option value="masters">Masters</option>
                                    <option value="phd">PHD</option>
                                    <option value="diploma">Diploma</option>
                                </select>
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="field">
                                    Field:
                                </label>
                                <br />
                                <select className='mt-2 px-4 w-full rounded-lg py-2' name="field" id="field">
                                    <option value="engineering">Engineering</option>
                                    <option value="management">Management</option>
                                    <option value="economics">Economics</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="law">Law</option>
                                </select>
                            </div>
                        </div>

                        {/* 3rd row */}
                        <div className='flex gap-4 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="country">
                                    Country:
                                </label>
                                <br />
                                <select className='mt-2 px-4 w-full rounded-lg py-2' name="country" id="country">
                                    <option value="usa">USA</option>
                                    <option value="china">China</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">UK</option>
                                    <option value="malaysia">Malaysia</option>
                                    <option value="australia">Australia</option>
                                    <option value="germany">Germany</option>
                                    <option value="india">India</option>
                                    <option value="france">France</option>
                                </select>
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="field">
                                    Field:
                                </label>
                                <br />
                                <select className='mt-2 px-4 w-full rounded-lg py-2' name="field" id="field">
                                    <option value="engineering">Engineering</option>
                                    <option value="management">Management</option>
                                    <option value="economics">Economics</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="law">Law</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCourses;