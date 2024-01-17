import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import whatimg1 from "../../assets/WhatWeDoImG/what1.png"
import whatimg2 from "../../assets/WhatWeDoImG/what2.png"
import whatimg3 from "../../assets/WhatWeDoImG/what3.png"

const DifferentScholarships = () => {
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
        }, 6500);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <div className="max-w-3xl mx-auto pb-12">
                <h1 className="text-lg text-[#0e2b45] text-center">Popular Scholarships in Different Countries</h1>
                <p className="text-xl font-semibold text-[#0e2b45] text-center">Elevate your academic journey, as we guide you through these esteemed scholarship programs designed to empower aspiring minds, fostering cross-cultural exchange, and shaping the leaders of tomorrow.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 " data-aos="fade-right">
                    <div className="mb-8 md:mb-0">
                        <a
                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(1); }}
                        >
                            <div>
                                <div className={`font-bold text-2xl leading-snug tracking-tight mb-1 ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in USA</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(2); }}
                        >
                            <div>
                                <div className={`font-bold text-2xl leading-snug tracking-tight mb-1 ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in China</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(3); }}
                        >
                            <div>
                                <div className={`font-bold text-2xl leading-snug tracking-tight mb-1 ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in Canada</div>
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
                                    <div>
                                        <h2>
                                            
                                        </h2>
                                    </div>
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
    );
};

export default DifferentScholarships;