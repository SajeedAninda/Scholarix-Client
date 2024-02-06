import React from 'react';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import CourseListSkeleton from '../../../Components/Skeleton/CourseListSkeleton';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

    let availabilityCategory = (data) => {
        if (data === "virtual") {
            return "Virtual"
        }
        if (data === "inPerson") {
            return "In Person"
        }
        if (data === "virtualInPerson") {
            return "Virtual Or In Person"
        }
    }

    let formatDate = (dateString) => {
        let dateObj = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(dateObj);
    };

    let calculateDaysLeft = (dateString) => {
        let dateObj = new Date(dateString);
        let currentDate = new Date();
        let timeDifference = dateObj.getTime() - currentDate.getTime();
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    };

    return (
        <div className='w-[99%] md:w-[95%] mx-auto py-8'>
            <Helmet>
                <title>User | User Appointments</title>
            </Helmet>
            <div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[9px] md:text-base lg:text-xl text-[#0e2b45] text-center">User Appointments</h1>
                    <p className="text-[9px] md:text-base lg:text-xl font-semibold text-[#0e2b45] text-center">
                        See the appointments that you have made and paid for
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <div className='bg-gradient-to-r from-[#ed4747] to-[#920707] rounded-tl-xl rounded-tr-xl grid grid-cols-12 px-2 md:px-6 py-4'>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center items-center'>
                        Consultant Name
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-3 text-center flex justify-center items-center'>
                        Consultant <br /> Email
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center flex justify-center items-center'>
                        Consultant <br /> Phone
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center items-center'>
                        Appointment <br /> Date
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center flex justify-center items-center'>
                        Appointment <br /> Type
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center flex justify-center items-center'>
                        Charges
                    </div>
                    <div className='text-white font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center'>
                        Transaction <br /> ID
                    </div>
                </div>
            </div>

            {isAppointmentLoading ? (
                <CourseListSkeleton />
            ) : (
                <>
                    {appointments && appointments.length > 0 ? (
                        appointments.map(appointment => (
                            <div key={appointment.id} className=''>
                                <div className='bg-[#F7FFF7] border-b-2 border-[#ed4747] grid grid-cols-12 px-6 py-4 items-center overflow-x-auto'>
                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center'>
                                        {appointment?.bookingDetails?.fullName}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-3 text-center'>
                                        {appointment?.bookingDetails?.email}
                                    </div>
                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center'>
                                        {appointment?.bookingDetails?.phoneNumber}
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center capitalize'>
                                        {formatDate(appointment?.bookingDetails?.selectedDate)}
                                        {new Date(appointment?.bookingDetails?.selectedDate) < new Date() ?
                                            ' (Date has passed)' :
                                            ` (${calculateDaysLeft(appointment?.bookingDetails?.selectedDate)} days left)`
                                        }
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center capitalize'>
                                        {availabilityCategory(appointment?.bookingDetails?.availability)}
                                    </div>

                                    <div className='text-[#0e2b45] font-bold text-[9px] md:text-base lg:text-xl col-span-1 text-center capitalize'>
                                        {appointment?.bookingDetails?.charge} $
                                    </div>

                                    <div className='text-[#0e2b45] bg-green-400 p-1 rounded-lg font-bold text-[9px] md:text-base lg:text-xl col-span-2 text-center capitalize  whitespace-normal'>
                                        {(appointment?.transaction_id).slice(6)}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-[#0e2b45] text-3xl font-bold text-center mt-4">
                            No Appointments made yet
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserAppointments;
