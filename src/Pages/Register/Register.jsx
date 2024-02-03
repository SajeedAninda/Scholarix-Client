import React, { useState } from 'react';
import registerLottie from "../../assets/LottieFiles/registerLottie.json"
import Lottie from 'lottie-react';
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import useAxiosInstance from '../../Hooks/useAxiosInstance';

const Register = () => {
    let [selectedImage, setSelectedImage] = useState(null);
    let { signUp, profileUpdate, googleLogin } = useAuth();
    let axiosInstance = useAxiosInstance();
    let navigate = useNavigate();

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

        if (!selectedImage) {
            toast.error("Please upload an image");
            return;
        }

        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let image = e.target.elements.image.files[0];
        let data = new FormData();
        data.append("image", image);

        if (password.length < 6) {
            return toast.error("Password Length should atleast be 6 Characters!")
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital letter!")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return toast.error("Password should contain at least one special character!")
        }
        let loadingToast = toast.loading('Registering...');

        try {
            let res = await axios.post("https://api.imgbb.com/1/upload?key=cbd289d81c381c05afbab416f87e8637", data);
            let imageUrl = res.data.data.display_url;
            // console.log(name, email, password, imageUrl);
            let userDetails = { name, email, imageUrl, role: "user" };

            signUp(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    profileUpdate(name, imageUrl)
                        .then(() => {

                            axiosInstance.post("/userRegister", userDetails)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.insertedId) {
                                        toast.dismiss(loadingToast);
                                        toast.success("Registration Successful");
                                        console.log(user);
                                        navigate("/");
                                    }
                                })
                                .catch((error) => {
                                    console.timeLog(error);
                                })
                        })
                })
                .catch((error) => {
                    let errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/email-already-in-use") {
                        toast.dismiss(loadingToast);
                        return toast.error("Email is already being used");
                    }
                });
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.dismiss(loadingToast);
            toast.error("Error uploading image");
        }
    }

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Logged In Successfully!');
                navigate("/");
            }).catch((error) => {
                console.log(error);
            });
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
                                            onClick={handleGoogleLogin}
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