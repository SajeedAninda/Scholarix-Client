import React from 'react';
import loginLottie from "../../assets/LottieFiles/loginLottie.json"
import Lottie from 'lottie-react';
import { IoIosLogIn } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import useAxiosInstance from '../../Hooks/useAxiosInstance';

const Login = () => {
    let { signIn, googleLogin } = useAuth();
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let loadingToast = toast.loading('Logging In...');
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.dismiss(loadingToast);
                toast.success('Logged In Successfully!');
                navigate('/');
            })
            .catch((error) => {
                let errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/invalid-credential") {
                    toast.dismiss(loadingToast);
                    return toast.error("Invalid Username or Password")
                }
            });
    }

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                let userDetails = { name: user?.displayName, email: user?.email, imageUrl: user?.photoURL, role: "user" }

                axiosInstance.post("/userGoogleRegister", userDetails)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            console.log(res.data);
                        }
                    })
                toast.success('Logged In Successfully!', {
                    duration: 3000,
                });
                navigate("/")
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div
                    className="bg-white flex justify-between"
                >
                    <div className="flex-1">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-[#0e2b45]">
                                Login to Scholarix
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#ed4747] text-white items-center justify-center duration-300 border-2 border-[#ed4747]  focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline transition ease-in-out delay-50 text-lg flex hover:text-[#ed4747] hover:bg-transparent hover:border-2 hover:border-[#ed4747]"
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
                                            Sign In with Google
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                                    >
                                        Or sign in with e-mail
                                    </div>
                                </div>

                                <form onSubmit={handleLogin} className="mx-auto max-w-xs">
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
                                    <div className='flex justify-center mt-6'>
                                        <button
                                            type='submit'
                                            className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg flex hover:text-[#ed4747] items-center gap-2'
                                        >
                                            <span className="">
                                                Sign In
                                            </span>
                                            <IoIosLogIn className='text-2xl font-bold' />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:flex">
                        <div>
                            <Lottie animationData={loginLottie} loop={true} />
                        </div>
                    </div>
                </div>

                <div className='text-center text-2xl font-bold text-[#0e2b45]'>
                    Don't have an Account? <Link className='text-[#ed4747] hover:underline' to={"/register"}>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;