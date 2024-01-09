import React, { useState } from 'react';
import registerLottie from "../../assets/LottieFiles/registerLottie.json"
import Lottie from 'lottie-react';
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {
    let [selectedImage, setSelectedImage] = useState(null);
    let [imgUrl, setImgUrl] = useState(null);

    const handleImageChange = (e) => {
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

    let handleRegister = async (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let image = e.target.elements.image.files[0];
        let data = new FormData();
        data.append("image", image);

        try {
            const res = await axios.post("https://api.imgbb.com/1/upload?key=cbd289d81c381c05afbab416f87e8637", data);
            setImgUrl(res.data.data.display_url);
            console.log(name, email, password, imgUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }


    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div
                    className="bg-white flex flex-row-reverse justify-between items-center"
                >
                    <div className="flex-1">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-[#0e2b45]">
                                Register to Scholarix
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleRegister} className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-[#0e2b45] focus:bg-white border-2 border-[#ed4747] mb-5"
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                    />
                                    <input
                                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-[#0e2b45] focus:bg-white border-2 border-[#ed4747]"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <input
                                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-[#0e2b45] focus:bg-white mt-5 border-2 border-[#ed4747]"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />

                                    <div className='mt-5 bg-gray-100 w-full m-auto rounded-xl'>
                                        <div className='px-5 py-3 relative border-2 border-[#ed4747] rounded-lg'>
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
                                                    <div className='bg-[#ed4747] text-white font-semibold cursor-pointer py-2 px-3 hover:bg-[#ed4747] rounded-xl'>
                                                        {selectedImage ? selectedImage.name : "Upload Profile Picture"}
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex justify-center mt-6'>
                                        <button
                                            type='submit'
                                            className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg flex hover:text-[#ed4747] items-center gap-2'
                                        >
                                            <span className="">
                                                Register
                                            </span>
                                            <IoIosPersonAdd className='text-2xl font-bold' />
                                        </button>
                                    </div>
                                </form>
                                <div className="flex flex-col items-center">
                                    <div className="my-6 border-b text-center">
                                        <div
                                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                                        >
                                            Or Register With
                                        </div>
                                    </div>
                                    <div className='flex gap-2 w-full justify-center mb-8'>
                                        <button
                                            className="flex justify-between items-center rounded-lg bg-[#ed4747] border-2 border-[#ed4747] py-2 px-7 text-white font-bold hover:bg-white hover:text-[#ed4747] hover:border-2 hover:border-[#ed4747]"
                                        >
                                            <div className="bg-white p-2 rounded-full">
                                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                    <path
                                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                        fill="#4285f4"
                                                    />
                                                    <path
                                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                        fill="#34a853"
                                                    />
                                                    <path
                                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                        fill="#fbbc04"
                                                    />
                                                    <path
                                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                        fill="#ea4335"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="ml-4">
                                                Google
                                            </span>
                                        </button>

                                        <button
                                            className="flex justify-between items-center rounded-lg bg-[#ed4747] border-2 border-[#ed4747] py-2 px-7 text-white font-bold hover:bg-white hover:text-[#ed4747] hover:border-2 hover:border-[#ed4747]"
                                        >
                                            <div className="bg-white p-1 rounded-full">
                                                <svg className="w-6" viewBox="0 0 32 32">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="ml-4">
                                                GitHub
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex-1 text-center hidden lg:flex">
                        <div>
                            <Lottie className='w-full' animationData={registerLottie} loop={true} />
                        </div>
                    </div>
                </div>

                <div className='text-center text-2xl font-bold text-[#0e2b45]'>
                    Already have an Account? <Link className='text-[#ed4747] hover:underline' to={"/login"}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;