import React, { useState } from 'react';
import choose1 from "../../assets/WhyChooseScholarixImg/chooseImg1.jpg"
import choose2 from "../../assets/WhyChooseScholarixImg/chooseImg2.jpg"

const WhyChooseScholarix = () => {
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const accordionData = [
        {
            title: 'Global Expertise',
            content: 'Scholarix brings a wealth of global expertise to guide you through the complex world of international education. Our team comprises seasoned professionals with extensive knowledge of various educational systems, ensuring you receive tailored advice for your academic journey.',
        },
        {
            title: 'Personalized Guidance',
            content: 'At Scholarix, we believe in personalized guidance. Our dedicated consultants take the time to understand your aspirations, academic background, and preferences. This allows us to provide customized solutions, ensuring you make informed decisions that align with your goals.',
        },
        {
            title: 'Comprehensive Services',
            content: 'From university selection and application assistance to visa support and post-arrival services, Scholarix offers a comprehensive suite of services. We streamline the entire process, providing end-to-end support to make your transition into international education seamless and stress-free.',
        },
        {
            title: 'Network of Top Institutions',
            content: 'Partnering with some of the world\'s leading universities, Scholarix opens doors to a diverse range of academic opportunities. Our extensive network allows you to explore programs that match your interests and ambitions, ensuring you receive a top-notch education.',
        },
        {
            title: 'Holistic Approach to Education',
            content: 'Scholarix adopts a holistic approach to education, emphasizing not only academic success but also personal and professional development. We guide you in selecting programs that align with your long-term career goals, ensuring you graduate with a well-rounded skill set.',
        },
        {
            title: 'Transparent Process',
            content: 'Transparency is at the core of Scholarix\'s ethos. We demystify the application process, keeping you informed at every step. Our consultants provide clear timelines, breakdowns of costs, and detailed information, empowering you to make decisions with confidence.',
        },
        {
            title: 'Post-Placement Support',
            content: 'Scholarix\'s commitment doesn\'t end with securing your admission. We offer post-placement support, assisting you in acclimating to your new academic environment. Whether it\'s finding accommodation, navigating local services, or addressing any concerns, we\'re here for you beyond enrollment.',
        },
    ];


    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Choose Scholarix</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">At Scholarix, we take pride in being more than just an education consultancy; we are your dedicated partners in navigating the intricate landscape of global education. Our commitment to excellence extends beyond mere guidance; we are devoted to empowering your educational journey at every step.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='images flex-1 relative'>
                        <img className='w-[65%] rounded-lg border-8 border-[#ed4747]' src={choose2} alt="" />
                        <img className='w-[65%] rounded-lg border-8 border-[#ed4747] top-48 left-32 sm:top-72 sm:left-32 md:top-56 md:left-24 absolute lg:top-64 lg:left-32 xl:top-80 xl:left-32' src={choose1} alt="" />
                    </div>

                    <div className="flex justify-center flex-1 pt-32 md:pt-0">
                        <div className="rounded-lg space-y-6 cursor-pointer">
                            {/* maping each accordion  */}
                            {accordionData.map((arr, idx) => (
                                <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                                    {/* the index div  */}
                                    <div className="w-16 h-16 bg-[#ed4747] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                                        <span>0{idx + 1}</span>
                                    </div>
                                    <div className="w-10 h-[2px] bg-[#ed4747] relative">
                                        <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#ed4747]"></span>
                                        <span className="bg-[#ed4747] w-10 h-1"></span>
                                    </div>
                                    {/* main accordion div  */}
                                    <div>
                                        <div className="max-w-[450px] bg-[#F7FFF7] shadow-lg hover:shadow-2xl border-t-[12px] p-3 border-[#ed4747] relative">
                                            <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#ed4747] absolute top-0 right-0"></span>
                                            <h1 className="text-[#ed4747] text-xl text-center">{arr?.title}</h1>
                                        </div>
                                        <div
                                            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#ed4747] text-white p-6 text-center text-sm">
                                                   {arr?.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseScholarix;