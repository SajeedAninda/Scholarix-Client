import React, { useState } from 'react';
import toast from 'react-hot-toast';
import "./addcourses.css"
import axios from 'axios';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import { useNavigate } from 'react-router-dom';

const AddCourses = () => {
    let axiosInstance = useAxiosInstance();
    let [selectedImage, setSelectedImage] = useState(null);
    let [selectedDegree, setSelectedDegree] = useState("");
    let [selectedField, setSelectedField] = useState("");
    let [selectedCountry, setSelectedCountry] = useState("");
    let [selectedScholarship, setSelectedScholarship] = useState("");
    let [selectedIntake, setSelectedIntake] = useState("");
    let [selectedApplicationDeadline, setSelectedApplicationDeadline] = useState("");

    let navigate = useNavigate();

    let currentTime = new Date();


    let handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            if (file.type.startsWith('image/')) {
                setSelectedImage(file);
            } else {
                setSelectedImage(null);
                toast.error("Please upload a valid image")
            }
        }
    };

    let data = new FormData();
    data.append("image", selectedImage);

    let handleAddCourses = async (e) => {
        e.preventDefault();
        
        if (!selectedImage) {
            toast.error("Please upload an image");
            return;
        }
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

        let loadingToast = toast.loading('Adding Course...');

        try {
            let res = await axios.post("https://api.imgbb.com/1/upload?key=cbd289d81c381c05afbab416f87e8637", data);
            let imageUrl = res.data.data.display_url;
            let courseDetails = { course_name, university_name, degree_name, field_name, country_name, city_name, tuition_fees, available_scholarship, scholarship_amount, intake_time, application_deadline, posted_time, imageUrl };

            axiosInstance.post("/courses", courseDetails)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.dismiss(loadingToast);
                        toast.success("Added Course Successfully");
                        navigate("/admin");
                    }
                })
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.dismiss(loadingToast);
            toast.error("Error uploading image");
        }
    }



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
                    <form onSubmit={handleAddCourses}>
                        {/* 1st row */}
                        <div className='flex gap-6 w-full'>
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
                        <div className='flex gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="degree">
                                    Degree:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedDegree(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="degree" id="degree" required>
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
                                <select onChange={(e) => { setSelectedField(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="field" id="field" required>
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
                        <div className='flex gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="country">
                                    Country:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedCountry(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="country" id="country" required>
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
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: London' type="text" name='city' id='city' required />
                                </div>
                            </div>
                        </div>

                        {/* 4th row */}
                        <div className='flex gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <div className='flex-1'>
                                    <label className='text-white text-2xl font-bold text-center' htmlFor="tuitionFees">
                                        Tuition Fees:
                                    </label>
                                    <br />
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 8000/semester' type="number" name='tuitionFees' id='tuitionFees' required />
                                </div>
                            </div>
                        </div>

                        {/* 5th row */}
                        <div className='flex gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="scholarship">
                                    Scholarship:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedScholarship(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="scholarship" id="scholarship" required>
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
                                    <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 2000' type="number" name='scholarshipAmount' id='scholarshipAmount' required disabled={selectedScholarship === "no"} />
                                </div>
                            </div>
                        </div>

                        {/* 6th row */}
                        <div className='flex gap-6 w-full mt-6'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="intake">
                                    Intake:
                                </label>
                                <br />
                                <select onChange={(e) => { setSelectedIntake(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="intake" id="intake" required>
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
                                    <input onChange={(e) => { setSelectedApplicationDeadline(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 2000' type="date" name='applicationDeadline' id='applicationDeadline' required />
                                </div>
                            </div>
                        </div>

                        {/* 7th row  */}
                        <div className='mt-5 bg-transparent w-full m-auto rounded-xl'>
                            <div className='px-5 py-3 relative rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                            onChange={handleImageChange}
                                        />
                                        <div className='bg-transparent border-2 border-white text-white text-2xl font-bold cursor-pointer py-2 px-7 hover:bg-[white] hover:border-[#ed4747] hover:text-[#ed4747] rounded-xl'>
                                            {selectedImage ? selectedImage.name : "Upload Relevant University Picture"}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* BUTTON  */}
                        <button className='w-full mt-3 rounded-lg bg-transparent py-2 text-2xl font-bold border-2 border-white text-white hover:bg-white hover:border-white hover:text-[#0e2b45] transition ease-in-out delay-50'>
                            Add Course
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCourses;