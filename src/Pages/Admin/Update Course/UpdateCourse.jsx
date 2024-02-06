import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateCourse = () => {
    let courseDetails = useLoaderData();
    let { _id, application_deadline, intake_time, scholarship_amount, available_scholarship, tuition_fees, city_name, country_name, field_name, degree_name, university_name, course_name } = courseDetails;

    let axiosInstance = useAxiosInstance();
    let [selectedDegree, setSelectedDegree] = useState(degree_name);
    let [selectedField, setSelectedField] = useState(field_name);
    let [selectedCountry, setSelectedCountry] = useState(country_name);
    let [selectedScholarship, setSelectedScholarship] = useState(available_scholarship);
    let [selectedIntake, setSelectedIntake] = useState(intake_time);
    let [selectedApplicationDeadline, setSelectedApplicationDeadline] = useState(application_deadline);

    let navigate = useNavigate();

    let currentTime = new Date();

    let handleAddCourses = async (e) => {
        e.preventDefault();
        let course_name = e.target.courseName.value;
        let university_name = e.target.universityName.value;
        let degree_name = selectedDegree;
        let field_name = selectedField;
        let country_name = selectedCountry;
        let city_name = e.target.city.value;
        let tuition_fees = parseFloat(e.target.tuitionFees.value);
        let available_scholarship = selectedScholarship;
        let scholarship_amount = parseFloat(e.target.scholarshipAmount.value);
        let intake_time = selectedIntake;
        let application_deadline = selectedApplicationDeadline;
        let posted_time = currentTime;

        let loadingToast = toast.loading('Updating Course...');

        let courseDetails = { course_name, university_name, degree_name, field_name, country_name, city_name, tuition_fees, available_scholarship, scholarship_amount, intake_time, application_deadline, posted_time };

        axiosInstance.patch(`/updateCourse/${_id}`, courseDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.dismiss(loadingToast);
                    toast.success("Updated Course Successfully");
                    navigate("/admin/courseList");
                }
            })
    }



    return (
        <div className='py-8'>
            <Helmet>
                <title>Admin | Update Course</title>
            </Helmet>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Update Courses</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    Make updates to the Courses with full descriptions that you have added
                </h2>
            </div>
            <div className='w-[90%] my-4 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg'>
                <div className='py-4 px-8'>
                    <form onSubmit={handleAddCourses}>
                        {/* 1st row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="courseName">
                                    Course Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Computer Science & Engineering' type="text" name='courseName' id='courseName' required defaultValue={course_name} />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="universityName">
                                    University Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Harvard University' type="text" name='universityName' id='universityName' required defaultValue={university_name} />
                            </div>
                        </div>

                        {/* 2nd row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="degree">
                                    Degree:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedDegree(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="degree" id="degree" value={degree_name} required>
                                    <option value="">Select The Related Degree</option>
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
                                <select onChange={(e) => { setSelectedField(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="field" id="field" value={field_name} required>
                                    <option value="">Select The Related Field</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="management">Management</option>
                                    <option value="economics">Economics</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="law">Law</option>
                                </select>
                            </div>
                        </div>

                        {/* 3rd row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="country">
                                    Country:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedCountry(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="country" id="country" required value={country_name}>
                                    <option value="">Select The Related Country</option>
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

                                <div className='flex-1'>
                                    <label className='text-white text-2xl font-bold text-center' htmlFor="city">
                                        City:
                                    </label>
                                    <br />
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: London' type="text" name='city' id='city' required defaultValue={city_name} />
                                </div>
                            </div>
                        </div>

                        {/* 4th row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <div className='flex-1'>
                                    <label className='text-white text-2xl font-bold text-center' htmlFor="tuitionFees">
                                        Tuition Fees:
                                    </label>
                                    <br />
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 8000/semester' type="number" name='tuitionFees' id='tuitionFees' required defaultValue={tuition_fees} />
                                </div>
                            </div>
                        </div>

                        {/* 5th row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="scholarship">
                                    Scholarship:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedScholarship(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="scholarship" id="scholarship" required value={available_scholarship}>
                                    <option value="">Select if Scholarship is Available</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className='flex-1'>
                                <div className='flex-1'>
                                    <label className='text-white text-2xl font-bold text-center' htmlFor="scholarshipAmount">
                                        Scholarship Amount:
                                    </label>
                                    <br />
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 2000' type="number" name='scholarshipAmount' id='scholarshipAmount' required defaultValue={scholarship_amount} disabled={selectedScholarship === "no"} />
                                </div>
                            </div>
                        </div>

                        {/* 6th row */}
                        <div className='flex flex-col md:flex-row gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="intake">
                                    Intake:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedIntake(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="intake" id="intake" required value={intake_time}>
                                    <option value="">Select Intake Time</option>
                                    <option value="aut2024">Autumn 2024</option>
                                    <option value="win2025">Winter 2025</option>
                                    <option value="aut2025">Autumn 2025</option>
                                    <option value="win2026">Winter 2026</option>
                                </select>
                            </div>

                            <div className='flex-1'>
                                <div className='flex-1'>
                                    <label className='text-white text-2xl font-bold text-center' htmlFor="applicationDeadline">
                                        Application Deadline:
                                    </label>
                                    <br />
                                    <input onChange={(e) => { setSelectedApplicationDeadline(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 2000' type="date" name='applicationDeadline' id='applicationDeadline' required value={selectedApplicationDeadline} />
                                </div>
                            </div>
                        </div>

                        {/* BUTTON  */}
                        <button className='w-full mt-6 rounded-lg bg-transparent py-2 text-2xl font-bold border-2 border-white text-white hover:bg-white hover:border-white hover:text-[#0e2b45] transition ease-in-out delay-50'>
                            Update Course
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCourse;