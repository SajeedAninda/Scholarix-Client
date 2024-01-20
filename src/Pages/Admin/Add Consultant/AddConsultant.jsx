import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddConsultant = () => {
    let [selectedImage, setSelectedImage] = useState(null);
    let [availability, setAvailability] = useState("");
    let [specialization, setSpecialization] = useState("");

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

    let handleAddConsultant = async (e) => {
        if (!selectedImage) {
            toast.error("Please upload an image");
            return;
        }

        e.preventDefault();
        let fullName = e.target.fullName.value;
        let qualification = e.target.qualification.value;
        let expertise = e.target.expertise.value;
        let experience = e.target.experience.value;
        let email = e.target.email.value;
        let phoneNumber = e.target.phoneNumber.value;
        let bio = e.target.bio.value;
        let charge = e.target.charge.value;

        // let consultantData = { fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization };

        try {
            let res = await axios.post("https://api.imgbb.com/1/upload?key=cbd289d81c381c05afbab416f87e8637", data);
            let imageUrl = res.data.data.display_url;
            let consultantData = { fullName, qualification, expertise, experience, email, phoneNumber, bio, charge, availability, specialization, imageUrl };
            console.log(consultantData);
            // axiosInstance.post("/courses", courseDetails)
            //     .then(res => {
            //         console.log(res.data);
            //         if (res.data.insertedId) {
            //             toast.dismiss(loadingToast);
            //             toast.success("Added Course Successfully");
            //             navigate("/admin");
            //         }
            //     })
        } catch (error) {
            console.error("Error uploading image:", error);
            // toast.dismiss(loadingToast);
            toast.error("Error uploading image");
        }
    }

    return (
        <div className='py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#0e2b45] text-4xl font-bold text-center'>Add Consultants</h1>
                <h2 className='text-[#0e2b45] text-xl font-bold text-center'>
                    Expand Your Team of Experts
                </h2>
            </div>

            <div className='w-[90%] my-4 mx-auto bg-gradient-to-r from-[#ed4747] to-[#920707] shadow-2xl rounded-lg'>
                <div className='py-4 px-8'>
                    <form onSubmit={handleAddConsultant}>
                        <div className='flex gap-6 w-full'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="fullName">
                                    Full Name:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: John Doe' type="text" name='fullName' id='fullName' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="qualification">
                                    Educational Qualification:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Bachelors in Educational Psychology' type="text" name='qualification' id='qualification' required />
                            </div>
                        </div>

                        <div className='flex gap-6 w-full mt-4'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="expertise">
                                    Expertise:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: Study Abroad, Career Counseling etc' type="text" name='expertise' id='expertise' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="experience">
                                    Experience:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 10+ years in education consultancy' type="text" name='experience' id='experience' required />
                            </div>
                        </div>

                        <div className='flex gap-6 w-full mt-4'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="email">
                                    Email:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: johndoe@gmail.com' type="email" name='email' id='email' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="phoneNumber">
                                    Phone Number:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='+8801754334429' type="tel" name='phoneNumber' id='phoneNumber' required />
                            </div>
                        </div>

                        <div className='flex gap-6 w-full mt-4'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="bio">
                                    Bio:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: John Doe is a seasoned education consultant with a strong background in guiding students etc' type="text" name='bio' id='bio' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="availability">
                                    Availability:
                                </label>
                                <br />
                                <select onChange={(e) => { setAvailability(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="availability" id="availability" required>
                                    <option value="">Select Availability Format</option>
                                    <option value="virtual">Virtual</option>
                                    <option value="inPerson">In Person</option>
                                    <option value="virtualInPerson">Virtual and In Person</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex gap-6 w-full mt-4'>
                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="charge">
                                    Consultancy Charge:
                                </label>
                                <br />
                                <input className='mt-2 px-4 w-full rounded-lg py-2' placeholder='E.g: 50$' type="number" name='charge' id='charge' required />
                            </div>

                            <div className='flex-1'>
                                <label className='text-white text-2xl font-bold text-center' htmlFor="specialization">
                                    Specialization In:
                                </label>
                                <br />
                                <select onChange={(e) => { setSpecialization(e.target.value) }} className='mt-2 px-4 w-full rounded-lg py-2' name="specialization" id="specialization" required>
                                    <option value="">Select The Related Field</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="management">Management</option>
                                    <option value="economics">Economics</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="law">Law</option>
                                </select>
                            </div>

                        </div>

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
                                            {selectedImage ? selectedImage.name : "Add Consultants Profile Picture"}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button className='w-full mt-6 rounded-lg bg-transparent py-2 text-2xl font-bold border-2 border-white text-white hover:bg-white hover:border-white hover:text-[#0e2b45] transition ease-in-out delay-50'>
                            Add Consultant
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddConsultant;