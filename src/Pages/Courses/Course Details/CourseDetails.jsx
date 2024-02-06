import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';

const CourseDetails = () => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let courseDetails = useLoaderData();
    let { _id, imageUrl, application_deadline, intake_time, scholarship_amount, available_scholarship, tuition_fees, city_name, country_name, field_name, degree_name, university_name, course_name } = courseDetails;

    let intakeTimeToDisplay = (intakeTime) => {
        switch (intakeTime) {
            case 'aut2024':
                return 'Autumn, 2024';
            case 'win2025':
                return 'Winter, 2025';
            case 'aut2025':
                return 'Autumn, 2025';
            case 'win2026':
                return 'Winter, 2026';
            default:
                return intakeTime;
        }
    };

    let courseDuration = (degreeName) => {
        switch (degreeName) {
            case 'bachelors':
                return '4 Years Bachelors Course';
            case 'masters':
                return '2 Years Masters Course';
            case 'phd':
                return '4 Years PHD Course';
            case 'diploma':
                return '3 Years Diploma Course';
            default:
                return degreeName;
        }
    };

    let formatDate = (inputDate) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const [year, month, day] = inputDate.split('-');
        const monthName = months[parseInt(month, 10) - 1];

        return `${parseInt(day, 10)} ${monthName}, ${year}`;
    }

    let courseId= _id;

    let bookmarkData = { courseId, imageUrl, field_name, degree_name, university_name, course_name, tuition_fees, currentUserEmail }

    let handleBookmark = () => {
        let loadingToast = toast.loading('Adding to Bookmarks...');
        axiosInstance.post(`/bookmarks`, bookmarkData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.dismiss(loadingToast);
                    toast.success("Added To Bookmarks. See from Profile");
                }
            })
            .catch(error => {
                toast.dismiss(loadingToast);
                console.error("Error adding bookmark:", error);
                if (error.response && error.response.status === 400) {
                    toast.error("This course is already Bookmarked");
                } else {
                    toast.error("Failed to add bookmark. Please try again later.");
                }
            });
    }
    

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='w-full lg:w-[40%]'>
                    <img className='w-full h-[350px] object-cover border-8 border-[#ed4747] rounded-md' src={imageUrl} alt="" />
                </div>

                <div className='space-y-2 w-full lg:w-[60%]'>
                    <h1 className='text-4xl font-bold text-[#0e2b45]'>{course_name}</h1>
                    <h2 className='text-2xl font-semibold text-[#0e2b45]'>{university_name}</h2>
                    <div className='flex gap-3'>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Program ID: {_id}</h3>
                        <h3 className='text-xl font-semibold text-[#ed4747] bg-[#ed474736] p-1'> Scholarship: {available_scholarship === "yes" ? "Available" : "Unavailable"}
                        </h3>
                    </div>
                    <h2 className='text-2xl font-bold text-[#0e2b45]'>Tuition Fee:
                        {available_scholarship === "yes" ?
                            <span className='space-x-2 flex flex-col md:flex-row space-y-3 md:space-y-0'>
                                <span className='text-4xl text-[#ed4747] ml-2'>
                                    {tuition_fees - scholarship_amount}$/Semester
                                </span>
                                <span className='line-through'>
                                    {tuition_fees}$/Semester
                                </span>
                            </span>
                            :
                            <span className='text-4xl text-[#ed4747] ml-2'>
                                {tuition_fees}$/Semester
                            </span>
                        }
                    </h2>
                    <div className='bg-[#ed474736] rounded-md p-6 space-y-4'>
                        <div className='grid grid-cols-3'>
                            <h3 className='text-base font-semibold text-[#0e2b45]'>
                                <span className='font-bold'>Application Fee:</span> 100$
                            </h3>
                            <h3 className='text-base font-semibold text-[#0e2b45]'>
                                <span className='font-bold'>Service Fee:</span> 500$
                            </h3>
                            <h3 className='text-base font-semibold text-[#0e2b45]'>
                                <span className='font-bold'>Intake:</span> {intakeTimeToDisplay(intake_time)}
                            </h3>
                        </div>
                        <div className='grid grid-cols-3'>
                            <h3 className='text-base font-semibold text-[#0e2b45] capitalize'>
                                <span className='font-bold'>Country:</span> {country_name}
                            </h3>
                            <h3 className='text-base font-semibold text-[#0e2b45] capitalize'>
                                <span className='font-bold'>Degree:</span> {degree_name}
                            </h3>
                            <h3 className='text-base font-semibold text-[#0e2b45]'>
                                <span className='font-bold'>Teaching Language:</span> English
                            </h3>
                        </div>
                    </div>

                    <button onClick={() => { handleBookmark(_id) }} className="relative px-5 py-2 text-[#F7FFF7] text-lg font-bold overflow-hidden bg-[#ed4747] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#920707] before:to-[#ed4747] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
                        Bookmark this Course
                    </button>
                </div>
            </div>

            <div className='bg-[#F7FFF7] mt-6 py-4 px-0 md:px-6'>
                <h1 className='text-[#0e2b45] text-3xl font-bold pb-4 lg:pb-0'>Program Details</h1>
                <div>
                    <h2 className='text-[#0e2b45] text-2xl text-center font-bold'>Basic Information</h2>
                    <table className='w-full my-6'>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Course Name</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'><span className='capitalize'>{degree_name}</span> in {course_name}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Field</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{field_name}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>University Name</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>{university_name}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Country</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{country_name}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>City</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{city_name}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Duration</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{courseDuration(degree_name)}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Intake</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{intakeTimeToDisplay(intake_time)}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736] capitalize'>Application Deadline</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize '>{formatDate(application_deadline)}</td>
                        </tr>
                    </table>
                </div>

                <div className='mt-6'>
                    <h2 className='text-[#0e2b45] text-2xl text-center font-bold'>Fees Structure</h2>
                    <table className='w-full my-6'>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Basic Tuition Fees</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>{tuition_fees} Dollars</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Scholarship Availibility</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] capitalize'>{available_scholarship}</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Scholarship Amount</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>{scholarship_amount > 0 ? scholarship_amount : 0} Dollars</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Tuition Fees After Scholarship</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>{tuition_fees - scholarship_amount} Dollars</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Application Fees</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>100 Dollars</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]'>Service Fee (After Admission)</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>500 Dollars</td>
                        </tr>
                    </table>
                </div>

                <div className='mt-6'>
                    <h2 className='text-[#0e2b45] text-2xl text-center font-bold'>Application Requirements</h2>
                    <table className='w-full my-6'>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[40%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45] bg-[#ed474736]' rowSpan={11}>Documents Required</td>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Passport Sized Photographs</td>
                        </tr>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Passport ID Page</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Academic Transcripts</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Highest Degree Certificate</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Physical Examination Form</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Non-criminal Record</td>
                        </tr>


                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Language Proficiency Certificate</td>
                        </tr>

                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Bank Statement</td>
                        </tr>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Application Form</td>
                        </tr>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Study Plan</td>
                        </tr>
                        <tr className='w-full border border-gray-300'>
                            <td className='w-[60%] border border-gray-300 p-2 px-4 md:px-8 text-lg font-bold text-[#0e2b45]'>Two Letters of Recommendation</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;