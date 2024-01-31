import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import useAuth from '../../Hooks/useAuth';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import toast from 'react-hot-toast';

const ConsultantDetails = () => {
    let { loggedInUser } = useAuth();
    let bookingUserEmail = loggedInUser?.email;
    let axiosInstance = useAxiosInstance();
    let navigate = useNavigate();

    let consultantDetails = useLoaderData();

    let [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');


    let { _id, fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization, imageUrl } = consultantDetails

    let availabilityCategory = (data) => {
        if (data === "virtual") {
            return "Virtual"
        }
        if (data === "inPerson") {
            return "In Person"
        }
        if (data === "virtualInPerson") {
            return "Virtual & In Person"
        }
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    let consultantId = _id;


    let handleBookConsultant = (e) => {
        e.preventDefault();
        let bookingCollection = { bookingUserEmail, consultantId, selectedDate, fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization, imageUrl };

        // let loadingToast = toast.loading('Booking Consultant...');
        axiosInstance
            .post(`/addBooking`, bookingCollection)
            .then((res) => {
                console.log(res.data);
                window.location.replace(res.data.url);
                // if (res.data.insertedId) {
                //     toast.dismiss(loadingToast);
                //     toast.success('Consultant Booked Successfully. See from Profile');
                //     closeModal();
                // }
            })
            .catch((error) => {
                // toast.dismiss(loadingToast);
                console.error('Error while Booking:', error);

                // if (error.response && error.response.status === 400) {
                //     // Consultant is already booked on the specified date
                //     toast.error('This consultant is already booked on the selected date.');
                // } else {
                //     // Other errors (e.g., server error)
                //     toast.error('Failed to book. Please try again later.');
                // }
            });
    };



    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='flex gap-8 space-y-2'>
                <div className='w-[40%]'>
                    <img className='w-full h-[350px] object-cover border-8 border-[#ed4747] rounded-md' src={imageUrl} alt="" />
                </div>

                <div className='space-y-2 w-[60%]'>
                    <h1 className='text-4xl font-bold text-[#0e2b45]'>{fullName}</h1>
                    <h2 className='text-2xl font-semibold text-[#0e2b45]'>{expertise}</h2>
                    <div className='flex gap-3'>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Consultant ID: {_id}</h3>
                    </div>
                    <h3 className='text-xl font-semibold text-[#0e2b45]'>
                        {bio}
                    </h3>
                    <h2 className='text-3xl font-bold text-[#0e2b45]'>
                        Charges: {charge}$
                    </h2>

                    <button onClick={openModal} className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                        Make Appointment
                    </button>
                </div>
            </div>

            <div className='bg-[#F7FFF7] mt-6 py-4 px-6'>
                <div>
                    <h2 className='text-[#0e2b45] text-3xl text-center font-bold'>Overview</h2>
                    <table className='w-full my-6'>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Expertise</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45]'>
                                {expertise}
                            </td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Qualifications</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{qualification}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Experience</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45]'>{experience}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Speciality In</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{specialization}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Availability</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{availabilityCategory(availability)}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Charge</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{charge}$ Per Session</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Phone Number</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] capitalize'>{phoneNumber}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Email</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-8 text-lg font-bold text-[#0e2b45] lowercase'>{email}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <form onSubmit={handleBookConsultant} className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gradient-to-r from-[#ed4747] to-[#920707] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl space-y-3 text-center font-bold leading-6 text-white"
                                    >
                                        <h3>Consultant Name: {fullName}</h3>
                                        <h3>Expertise: {expertise}</h3>
                                        <h3>Charge: {charge}$</h3>

                                    </Dialog.Title>
                                    <div className="mt-5 flex gap-6 items-center justify-center">
                                        <p className="text-lg text-white">
                                            Please Select a date for Appointment
                                        </p>

                                        <input value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className='p-2 border-2 border-white bg-transparent text-white rounded-md' type="date" min={new Date().toISOString().split('T')[0]} required />
                                    </div>

                                    <div className="mt-8 flex justify-center items-center gap-6">
                                        <button type='submit' className="relative flex-1 py-2 text-[#F7FFF7] border-2 border-white text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                            Make Appointment
                                        </button>

                                        <button type='button' onClick={closeModal} className="relative flex-1 py-2 text-[#F7FFF7] border-2 border-white text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </form>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ConsultantDetails;