import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Lottie from 'lottie-react';

const Profile = () => {
    let { loggedInUser } = useAuth();
    console.log(loggedInUser);
    const [editMode, setEditMode] = useState(false);


    const [editedValues, setEditedValues] = useState({
        fullName: loggedInUser?.displayName || '',
        email: loggedInUser?.email || '',
        dateOfBirth: loggedInUser?.date_of_birth || '',
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };


    return (
        <div>
            <div className='w-[90%] my-12 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg py-4 px-8'>
                <h1 className='text-[white] text-center font-bold text-4xl'>Profile Information</h1>
                <p className='text-[white] text-center font-bold text-lg mt-1'>
                    View Your Profile Information & Update
                </p>

                <div>
                    <form onSubmit={handleProfileUpdate} className='pb-12 gap-8 flex justify-center items-center'>
                        <div className='w-full md:w-[50%]'>
                            {/* Full Name */}
                            <div className='w-full'>
                                <label className='text-2xl text-[white] font-bold' htmlFor="fullName">
                                    Full Name:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        value={editedValues.fullName}
                                        onChange={handleInputChange}
                                        name="fullName"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Full Name'
                                        type="text"
                                        required
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{loggedInUser?.displayName}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[white] font-bold' htmlFor="email">
                                    Email:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        readOnly
                                        value={editedValues.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Email'
                                        type="email"
                                        required
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{loggedInUser?.email}</span>
                                )}
                            </div>

                            {/* Date of Birth */}
                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[white] font-bold' htmlFor="dob">
                                    Date of Birth:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        value={editedValues.dateOfBirth}
                                        onChange={handleInputChange}
                                        name="dateOfBirth"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        type="date"
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{loggedInUser?.date_of_birth}</span>
                                )}
                            </div>

                            {/* Buttons */}
                            <button
                                className={`py-3 w-full bg-[white] border-2 border-[white] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[white] hover:border-2 hover:border-[white]`}
                                type='button'
                                onClick={toggleEditMode}
                            >
                                {editMode ? 'Cancel' : 'Edit'}
                            </button>

                            {editMode && (
                                <button
                                    className='py-3 w-full bg-[white] border-2 border-[white] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[white] hover:border-2 hover:border-[white]'
                                    type='submit'
                                >
                                    Update
                                </button>
                            )}
                        </div>
                        <div className='hidden md:block w-[50%]'>
                            {/* <Lottie animationData={employeeRegisterLottie} loop={true} /> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;