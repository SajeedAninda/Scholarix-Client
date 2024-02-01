import React from 'react';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import CourseListSkeleton from '../../../Components/Skeleton/CourseListSkeleton';
import { Link } from 'react-router-dom';

const UserAppointments = () => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: appointments, isLoading: isAppointmentLoading, refetch } = useQuery({
        queryKey: ['userAppointments', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/userAppointments/${currentUserEmail}`);
            return response.data;
        }
    })

    return (
        <div className='w-[95%] mx-auto py-8'>
            <div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-lg text-[#0e2b45] text-center">User Appointments</h1>
                    <p className="text-xl font-semibold text-[#0e2b45] text-center">See the appointments that you have made and paid for
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-12 px-6 py-4'>
                    <div className='text-white font-bold text-xl col-span-1 text-center flex justify-center items-center'>
                        Consultant Name
                    </div>
                    <div className='text-white font-bold text-xl col-span-2 text-center flex justify-center items-center'>
                        Consultant <br /> Email
                    </div>
                    <div className='text-white font-bold text-xl col-span-2 text-center flex justify-center items-center'>
                        Consultant <br /> Phone
                    </div>
                    <div className='text-white font-bold text-xl col-span-2 text-center flex justify-center items-center'>
                        Appointment <br /> Date
                    </div>
                    <div className='text-white font-bold text-xl col-span-2 text-center flex justify-center items-center'>
                        Appointment <br /> Type
                    </div>
                    <div className='text-white font-bold text-xl col-span-1 text-center flex justify-center items-center'>
                        Charges
                    </div>
                    <div className='text-white font-bold text-xl col-span-2 text-center'>
                        Transaction <br /> ID
                    </div>
                </div>
            </div>

            {
                appointments ?
                    (
                        appointments?.map(appointment =>
                            <div className=''>
                                <div className='bg-[#F7FFF7] border-b-2 border-[#ed4747] grid grid-cols-12 px-6 py-4 items-center'>
                                    <div className='text-[#0e2b45] font-bold text-lg col-span-1 text-center'>
                                        {appointment?.bookingDetails?.fullName}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center'>
                                        {appointment?.bookingDetails?.email}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center'>
                                        {appointment?.bookingDetails?.phoneNumber}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center capitalize'>
                                        {appointment?.bookingDetails?.selectedDate}
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center capitalize'>
                                        {appointment?.bookingDetails?.availability}
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-lg col-span-1 text-center capitalize'>
                                        {appointment?.bookingDetails?.charge} $
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-lg col-span-2 text-center capitalize  whitespace-normal'>
                                        {appointment?.transaction_id}
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    :
                    (
                        <CourseListSkeleton></CourseListSkeleton>
                    )
            }
        </div>
    );
};

export default UserAppointments;