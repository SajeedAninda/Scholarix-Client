import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Lottie from 'lottie-react';
import profileLottie from "../../../assets/LottieFiles/profileLottie.json";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from '../../../Components/Authentication/firebase.config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const auth = getAuth(app);

const Profile = () => {
    let navigate = useNavigate();

    let { loggedInUser } = useAuth();
    console.log(loggedInUser);
    const [editMode, setEditMode] = useState(false);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let phone = e.target.phoneNumber.value
        let imageUrl = e.target.imageurl.value;
        let loadingToast = toast.loading('Updating Profile...');

        updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: imageUrl, phoneNumber: phone
        }).then(() => {
            console.log("Profile Updated");
            toast.dismiss(loadingToast);
            toast.success("Profile Updated");
            navigate("/user");
        }).catch((error) => {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error(error);
        });
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };


    return (
        <div>
            <Helmet>
                <title>User | Profile</title>
            </Helmet>
            <div className='w-[90%] my-12 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg py-4 px-8'>
                <h1 className='text-[white] text-center font-bold text-3xl md:text-4xl'>Profile Information</h1>
                <p className='text-[white] text-center font-bold text-lg mt-1'>
                    View Your Profile Information & Update
                </p>

                <div>
                    <form onSubmit={handleProfileUpdate} className=' gap-8 flex justify-center items-center'>
                        <div className='w-full md:w-[50%] text-center'>
                            {/* Full Name */}
                            <div className='w-full'>
                                <label className='text-2xl md:text-3xl text-[white] font-semibold' htmlFor="fullName">
                                    Full Name:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        defaultValue={loggedInUser?.displayName}
                                        name="fullName"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Full Name'
                                        type="text"
                                        required
                                    />
                                ) : (
                                    <span className='text-3xl md:text-4xl text-[white] font-bold mt-1'>{loggedInUser?.displayName}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className='w-full mt-4'>
                                <label className='text-2xl md:text-3xl text-[white] font-semibold' htmlFor="email">
                                    Email:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        readOnly
                                        defaultValue={loggedInUser?.email}
                                        name="email"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Email'
                                        type="email"
                                        required
                                    />
                                ) : (
                                    <span className='text-3xl md:text-4xl text-[white] font-bold mt-1'>{loggedInUser?.email}</span>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div className='w-full mt-4'>
                                <label className='text-2xl md:text-3xl text-[white] font-semibold' htmlFor="phoneNumber">
                                    Phone Number:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        defaultValue={loggedInUser?.phoneNumber}
                                        name="phoneNumber"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Phone Number'
                                        type='text'
                                    />
                                ) : (
                                    <span className='text-3xl md:text-4xl text-[white] font-bold mt-1'>
                                        {loggedInUser?.phoneNumber ? loggedInUser.phoneNumber : 'N/A'}
                                    </span>
                                )}
                            </div>

                            {/* Image */}
                            <div className={`w-full text-center mt-4 ${editMode ? '' : 'flex flex-row items-center gap-2 justify-center'}`}>
                                <label className='text-2xl md:text-3xl text-[white] font-semibold' htmlFor="image">
                                    Image:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        defaultValue={loggedInUser?.photoURL}
                                        name="imageurl"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter an Image URL'
                                        type="text"
                                        required
                                    />
                                ) : (
                                    <span className='text-3xl md:text-4xl text-[white] font-bold mt-1'>
                                        <img className='w-[70px] mt-2 rounded-full' src={loggedInUser?.photoURL} alt="" />
                                    </span>
                                )}
                            </div>



                            {/* Buttons */}
                            <button
                                className={`py-3 w-full bg-[white] border-2 border-[white] text-[#0e2b45] font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[white] hover:border-2 hover:border-[white]`}
                                type='button'
                                onClick={toggleEditMode}
                            >
                                {editMode ? 'Cancel' : 'Edit'}
                            </button>

                            {editMode && (
                                <button
                                    className='py-3 w-full bg-[white] border-2 border-[white] text-[#0e2b45] font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[white] hover:border-2 hover:border-[white]'
                                    type='submit'
                                >
                                    Update
                                </button>
                            )}
                        </div>
                        <div className='hidden md:block w-[50%]'>
                            <Lottie animationData={profileLottie} loop={true} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;