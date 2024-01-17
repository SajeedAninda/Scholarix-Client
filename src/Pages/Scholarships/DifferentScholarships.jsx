import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

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
            setTab((prevTab) => (prevTab % 9) + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <div className="max-w-3xl mx-auto pb-12">
                <h1 className="text-lg text-[#0e2b45] text-center">Popular Scholarships in Different Countries</h1>
                <p className="text-xl font-semibold text-[#0e2b45] text-center">Elevate your academic journey, as we guide you through these esteemed scholarship programs designed to empower aspiring minds, fostering cross-cultural exchange, and shaping the leaders of tomorrow.
                </p>
            </div>

            <div className="flex gap-10 flex-col md:flex-row justify-between items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 " data-aos="fade-right">
                    <div className="mb-8 md:mb-0">
                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(1); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 1 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in USA</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(2); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 2 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in China</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(3); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 3 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in Canada</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(4); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 4 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in United Kingdom</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(5); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 5 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in Australia</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 6 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(6); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 6 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in Germany</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 7 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(7); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 7 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in India</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 8 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(8); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 8 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in France</div>
                            </div>
                        </a>

                        <a
                            className={`flex items-center text-lg px-5 py-3 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 9 ? 'bg-[#F7FFF7] shadow-md shadow-[#ec6d6d] hover:shadow-[#ec6d6d] border-gray-200 hover:shadow-2xl' : 'bg-gradient-to-r from-[#ed4747] to-[#920707] border-transparent'}`}
                            href="#0"
                            onClick={(e) => { e.preventDefault(); setTab(9); }}
                        >
                            <div>
                                <div className={`font-bold text-xl leading-snug tracking-tight mb-1 ${tab !== 9 ? `text-[#0e2b45]` : `text-white`} `}>Scholarships in Malaysia</div>
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
                                <div className="relative inline-flex flex-col space-y-12 pl-4">
                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Fulbright Scholarship
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Fulbright scholarships are highly competitive awards for international students, scholars, and professionals to pursue graduate study, research, or teaching in the United States. The program covers tuition, living expenses, and airfare.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Hubert H. Humphrey Fellowship Program
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        The Humphrey Fellowship Program brings accomplished mid-career professionals from designated countries to the United States for a year of non-degree graduate-level study, leadership development, and professional collaboration.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Merit-Based Scholarships at various universities
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Many U.S. universities offer merit-based scholarships for international students based on academic excellence, leadership, and other criteria. Examples include the Harvard University Scholarship and Stanford Graduate Fellowships.
                                        </p>
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
                                 <div className="relative inline-flex flex-col space-y-12 pl-4">
                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Chinese Government Scholarship
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        This scholarship is offered by the Chinese government to international students at all levels, including undergraduate, master's, and Ph.D. It covers tuition, accommodation, stipend, and comprehensive medical insurance.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Confucius Institute Scholarship
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        The Confucius Institute Scholarship supports students, scholars, and Chinese language teachers worldwide in studying Chinese language and culture at Chinese universities.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        CSC Scholarship
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        The China Scholarship Council (CSC) provides scholarships to international students for undergraduate, master's, and Ph.D. programs in Chinese universities across various disciplines.
                                        </p>
                                    </div>
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
                                 <div className="relative inline-flex flex-col space-y-12 pl-4">
                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Vanier Canada Graduate Scholarships
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        The Vanier Canada Graduate Scholarships support doctoral students who demonstrate leadership skills, a high standard of scholarly achievement in graduate studies, and research potential
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Canada Graduate Scholarships (CGS):
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        The CGS program provides funding to Canadian and international students pursuing master's or doctoral studies in various fields.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-3xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        Lester B. Pearson International Scholarship Program
                                        </h2>
                                        <p className='font-bold text-xl leading-snug tracking-tight mb-1 text-[#0e2b45]'>
                                        This program at the University of Toronto provides scholarships to exceptional international students who have demonstrated creativity, leadership, and a commitment to making a positive impact.
                                        </p>
                                    </div>
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