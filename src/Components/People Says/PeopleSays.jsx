import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaQuoteLeft } from "react-icons/fa";


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
            setTab((prevTab) => (prevTab % 6) + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-[#F7FFF7]">

            <div className="relative w-[90%] mx-auto px-4 sm:px-6">
                <div className="pt-8">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">What Peoples Say About Us</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Echoes of Triumph, Satisfaction, and Unwavering Trust – Hear What Our Valued Clients, Successful Graduates, and Respected Academic Partners Have to Say About Scholarix's Unparalleled Commitment to Excellence, Personalized Guidance, and Transformative Educational Journeys.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/men/53.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>Michael Turner</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>Engineering Professional</div>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Emily Thompson</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Undergraduate Student</div>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/men/50.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>Rajesh Patel</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>IT Professional</div>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/women/51.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 4 ? `text-[#0e2b45]` : `text-white`} `}>Sophie Williams</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 4 ? `text-[#0e2b45]` : `text-white`} `}>High School Graduate</div>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/men/7.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 5 ? `text-[#0e2b45]` : `text-white`} `}>Dr. Muhammad Rahman</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 5 ? `text-[#0e2b45]` : `text-white`} `}>Medical Practitioner</div>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 6 ? 'hidden' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-3 items-center'>
                                            <img className='w-[50px] rounded-full' src="https://randomuser.me/api/portraits/women/7.jpg" alt="" />
                                            <div className={`text-2xl font-bold leading-snug tracking-tight mb-1 ${tab !== 6 ? `text-[#0e2b45]` : `text-white`} `}>Isabella Garcia</div>
                                        </div>
                                        <div className={`font-medium ${tab !== 6 ? `text-[#0e2b45]` : `text-white`} `}>Business Student</div>
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Transformative Guidance for Engineering Aspirants</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">Scholarix played a pivotal role in my decision to pursue a master's in engineering abroad. The team's comprehensive understanding of international educational systems and dedication to individualized support ensured a smooth transition. I'm now thriving in my chosen field, thanks to Scholarix</p>
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Beyond Consultancy - A Partner in Success</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">Choosing Scholarix for my undergraduate journey was the best decision I made. The guidance, mentorship, and resources provided were instrumental in shaping my academic path. Scholarix goes beyond being an education consultancy; it's a partner in your educational success.</p>
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Navigating IT Professional Advancements</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">As an IT professional seeking advanced studies, Scholarix helped me navigate through complex admission processes. Their expertise in evaluating international qualifications streamlined my application, and I am now pursuing a specialized program that aligns perfectly with my career goals.</p>
                                        </div>
                                    </Transition>


                                    {/* Item 4 */}
                                    <Transition
                                        show={tab === 4}
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Seamless Transition to University Life</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">Transitioning from high school to university seemed daunting until I found Scholarix. Their guidance not only made the application process seamless but also provided valuable insights into campus life and academic expectations. Scholarix truly cares about students' holistic development.</p>
                                        </div>
                                    </Transition>


                                     {/* Item 5 */}
                                     <Transition
                                        show={tab === 5}
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Gateway to Advanced Studies</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">Scholarix understands the unique challenges faced by medical professionals seeking advanced studies. Their personalized approach, coupled with knowledge of global medical education, guided me to prestigious institutions. Now, I am contributing to healthcare in new and impactful ways.</p>
                                        </div>
                                    </Transition>

                                     {/* Item 6 */}
                                     <Transition
                                        show={tab === 6}
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
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                            <div className='flex justify-between'>
                                            <FaQuoteLeft className='text-[40px] text-[#0e2b45]'/>
                                            <h3 className="text-[#0e2b45] mb-3">Strategic Guidance for Career Advancement</h3>
                                            </div>
                                            <p className="text-xl font-semibold text-[#0e2b45]">I turned to Scholarix for career advancement through education. The team's expertise in business education and commitment to my success were evident throughout the application process. Today, I attribute my career growth to Scholarix's strategic guidance.</p>
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