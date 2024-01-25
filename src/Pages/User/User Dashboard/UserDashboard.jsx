import React from 'react';
import userLottie from "../../../assets/LottieFiles/userLottie.json"
import Lottie from 'lottie-react';

const UserDashboard = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col md:flex-row-reverse my-12 md:my-6 lg:my-2 justify-center items-center'>
                <div className='flex-1 text-center'>
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#ed4747]'>User</span> <br /> <span className='text-[#0e2b45]'>Panel</span> <br /></h1>
                    <h2 className='text-[#ed4747] text-5xl font-bold'>Take control of your Profile </h2>
                </div>

                <div className='flex-1'>
                    <Lottie animationData={userLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;