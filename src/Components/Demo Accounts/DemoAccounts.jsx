import React from 'react';
import toast from 'react-hot-toast';
import { IoIosLogIn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const DemoAccounts = () => {
    let { signIn } = useAuth();
    let navigate = useNavigate();

    let handleUserLogin = (e) => {
        e.preventDefault();
        let email = "demouser@gmail.com";
        let password = "Aninda!9";
        let loadingToast = toast.loading('Logging In...');

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.dismiss(loadingToast);
                toast.success('Logged In Successfully As an User!');
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

    let handleAdminLogin = (e) => {
        e.preventDefault();
        let email = "scholarix@admin.com";
        let password = "Aninda!9";
        let loadingToast = toast.loading('Logging In...');

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.dismiss(loadingToast);
                toast.success('Logged In Successfully As an Admin!');
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



    return (
        <div className='flex gap-6 items-center justify-center'>
            <div className='flex justify-center mt-6'>
                <button
                    onClick={handleUserLogin}
                    type='button'
                    className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg flex hover:text-[#ed4747] items-center gap-2'
                >
                    <span className="">
                        Demo User
                    </span>
                    <IoIosLogIn className='text-2xl font-bold' />
                </button>
            </div>

            <div className='flex justify-center mt-6'>
                <button
                    onClick={handleAdminLogin}
                    type='submit'
                    className='bg-[#ed4747] px-7 py-2 rounded-md font-bold text-[#F7FFF7] border-2 border-[#ed4747] hover:border-2 hover:bg-transparent hover:border-[#ed4747] transition ease-in-out delay-50 text-lg flex hover:text-[#ed4747] items-center gap-2'
                >
                    <span className="">
                        Demo Admin
                    </span>
                    <IoIosLogIn className='text-2xl font-bold' />
                </button>
            </div>
        </div>
    );
};

export default DemoAccounts;