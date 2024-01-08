import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import whatimg1 from "../../assets/WhatWeDoImG/what1.png"
import whatimg2 from "../../assets/WhatWeDoImG/what2.png"
import whatimg3 from "../../assets/WhatWeDoImG/what3.png"
import { GiOpenBook } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";

const PeopleSays = () => {
    const [tab, setTab] = useState(1);
    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) {
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
        }
    };

    useEffect(() => {
        heightFix();
        const interval = setInterval(() => {
            setTab((prevTab) => (prevTab % 3) + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="relative bg-[#F7FFF7]">

            <div className="relative w-[90%] mx-auto px-4 sm:px-6">
                <div className="pt-8">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">What we do</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Scholarix is your trusted partner in navigating the path to educational excellence. At Scholarix, we are dedicated to guiding and empowering students on their educational journey, ensuring they make informed decisions that align with their aspirations and potential.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="text-[#0e2b45] mb-3">Navigating Educational Pathways</h3>
                                <p className="text-xl font-semibold text-[#0e2b45]">We guide you through the maze of options, assisting in the selection of institutions that match your academic ambitions and personal preferences. Our expertise ensures that you embark on a journey tailored to your unique strengths and aspirations.</p>
                            </div>

                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div>
                                        <div className={`font-bold leading-snug tracking-tight mb-1 ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>Tailored Admissions Guidance</div>
                                        <div className={`font-medium ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>At Scholarix, we understand that the journey to higher education begins with the right choice of institution. </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-[#F7FFF7] rounded-full shadow flex-shrink-0 ml-3">
                                        <GiOpenBook />
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div>
                                        <div className={`font-bold leading-snug tracking-tight mb-1 ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Comprehensive Scholarship Assistance</div>
                                        <div className={`font-medium ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships can significantly alleviate the financial burden of education. We specialize in identifying and assisting students in applying for various scholarship opportunities.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-[#F7FFF7] rounded-full shadow flex-shrink-0 ml-3">
                                        <GiGraduateCap />
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                                >
                                    <div>
                                        <div className={`font-bold leading-snug tracking-tight mb-1 ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>Holistic Career and Educational Planning</div>
                                        <div className={`font-medium ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>Education is not just about acquiring knowledge; it's about building a foundation for a successful career. Scholarix goes beyond traditional consultancy by offering holistic career and educational planning services.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-[#F7FFF7] rounded-full shadow flex-shrink-0 ml-3">
                                        <FaUserGraduate />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <div className="transition-all">
                                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                                    {/* Item 1 */}
                                    <Transition
                                        show={tab === 1}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <img className="md:max-w-none mx-auto rounded" src={whatimg1} width={500} height="462" alt="Features bg" />
                                        </div>
                                    </Transition>

                                    {/* Item 2 */}
                                    <Transition
                                        show={tab === 2}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <img className="md:max-w-none mx-auto rounded" src={whatimg2} width={500} height="462" alt="Features bg" />
                                        </div>
                                    </Transition>

                                    {/* Item 3 */}
                                    <Transition
                                        show={tab === 3}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <img className="md:max-w-none mx-auto rounded" src={whatimg3} width={500} height="462" alt="Features bg" />
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleSays;