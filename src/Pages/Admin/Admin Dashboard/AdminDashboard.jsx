import React from 'react';
import adminLottie from "../../../assets/LottieFiles/adminDashboardLottie.json"
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const AdminDashboard = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Helmet>
                <title>Admin | Dashboard</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row my-12 md:my-6 lg:my-2 justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#ed4747]'>Admin</span> <br /> <span className='text-[#0e2b45]'>Dashboard</span> <br /></h1>
                    <h2 className='text-[#ed4747] text-5xl font-bold'>Control Your Site from here</h2>
                </div>

                <div className='flex-1'>
                    <Lottie animationData={adminLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;