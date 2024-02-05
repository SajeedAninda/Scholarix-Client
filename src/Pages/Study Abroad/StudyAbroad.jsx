import React from 'react';
import abroadLottie from "../../assets/LottieFiles/abroadLottie.json"
import abroadLottie2 from "../../assets/LottieFiles/abroadLottie2.json"
import Lottie from 'lottie-react';
import StudyAbroadTabs from './StudyAbroadTabs';
import CountrySkeleton from '../../Components/Skeleton/CountrySkeleton';
import { Link } from 'react-router-dom';
import useCountries from '../../Hooks/useCountries';

const StudyAbroad = () => {
    let { countries } = useCountries();

    return (
        <div className='w-[90%] mx-auto py-8'>
            <div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-lg text-[#0e2b45] text-center">Study Abroad?</h1>
                        <p className="text-xl font-semibold text-[#0e2b45] text-center">Embark on a Global Educational Journey: Explore Opportunities, Embrace Cultures, and Achieve Excellence Abroad
                        </p>
                    </div>
                </div>
                <div className='pt-8 pb-6 flex flex-col md:flex-row items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-full md:w-[60%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Study Abroad?</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad is a transformative experience that opens doors to a world of opportunities and personal growth. Beyond the academic benefits, immersing oneself in a foreign country provides a unique chance to broaden cultural horizons, fostering a global perspective and understanding. The exposure to diverse traditions, languages, and perspectives cultivates adaptability, resilience, and cross-cultural communication skills, all of which are increasingly valuable in our interconnected world. Additionally, studying abroad often allows students to access top-notch educational institutions, cutting-edge research, and industry expertise that may not be readily available in their home country. Beyond the classroom, the experience encourages independence, self-discovery, and the development of a global network. Overall, studying abroad is an investment in both academic and personal development, offering a rich tapestry of experiences that contribute to a well-rounded and globally-minded individual.
                        </p>
                    </div>

                    <div className='w-full md:w-[40%]'>
                        <Lottie animationData={abroadLottie} loop={true} />
                    </div>
                </div>

                <div className='pt-0 pb-6 flex flex-col md:flex-row-reverse text-center md:text-right items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-full md:w-[55%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Benefits of studying Abroad</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad presents a myriad of benefits that extend far beyond the classroom, enriching students' lives in profound ways. Firstly, the exposure to diverse cultures enhances one's global perspective, fostering a deep understanding and appreciation for different customs, traditions, and ways of thinking. This cultural immersion not only broadens horizons but also nurtures adaptability and cross-cultural communication skills—essential attributes in today's interconnected world. Academically, students gain access to world-class institutions, cutting-edge research, and innovative teaching methodologies, elevating the quality of education they receive. Beyond personal growth, studying abroad provides a unique opportunity to build an international network, opening doors to global career prospects.
                        </p>
                    </div>

                    <div className='w-full md:w-[45%]'>
                        <Lottie animationData={abroadLottie2} loop={true} />
                    </div>
                </div>

                <div className='pb-6'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Explore Countries</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">As you navigate through the options, take the time to select your country of interest, and unveil a world of academic opportunities specifically curated to suit your ambitions.
                        </p>
                    </div>

                    {
                        countries ?
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-8'>
                                {
                                    countries?.map(country =>
                                        <div class="card">
                                            <img className='object-cover' src={country?.country_img_url} alt="" />
                                            <div class="card__content">
                                                <p class="card__title">{country?.country_name}</p>
                                                <p class="card__description">
                                                    {country?.country_brief_details}
                                                </p>

                                                <div className='flex justify-end'>
                                                    <Link to={`/countryDetails/${country?._id}`} className='text-[white] font-bold underline hover:opacity-50'>
                                                        See Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <CountrySkeleton></CountrySkeleton>
                    }



                </div>

                <StudyAbroadTabs></StudyAbroadTabs>

            </div>
        </div>
    );
};

export default StudyAbroad;