import React from 'react';
import abroadLottie from "../../assets/LottieFiles/abroadLottie.json"
import abroadLottie2 from "../../assets/LottieFiles/abroadLottie2.json"
import Lottie from 'lottie-react';

const StudyAbroad = () => {
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
                <div className='pt-8 pb-8 flex items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-[60%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Study Abroad?</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad is a transformative experience that opens doors to a world of opportunities and personal growth. Beyond the academic benefits, immersing oneself in a foreign country provides a unique chance to broaden cultural horizons, fostering a global perspective and understanding. The exposure to diverse traditions, languages, and perspectives cultivates adaptability, resilience, and cross-cultural communication skills, all of which are increasingly valuable in our interconnected world. Additionally, studying abroad often allows students to access top-notch educational institutions, cutting-edge research, and industry expertise that may not be readily available in their home country. Beyond the classroom, the experience encourages independence, self-discovery, and the development of a global network. Overall, studying abroad is an investment in both academic and personal development, offering a rich tapestry of experiences that contribute to a well-rounded and globally-minded individual.
                        </p>
                    </div>

                    <div className='w-[40%]'>
                        <Lottie animationData={abroadLottie} loop={true} />
                    </div>
                </div>

                <div className='pt-0 pb-8 flex flex-row-reverse text-right items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-[60%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Benefits of studying Abroad</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad presents a myriad of benefits that extend far beyond the classroom, enriching students' lives in profound ways. Firstly, the exposure to diverse cultures enhances one's global perspective, fostering a deep understanding and appreciation for different customs, traditions, and ways of thinking. This cultural immersion not only broadens horizons but also nurtures adaptability and cross-cultural communication skills—essential attributes in today's interconnected world. Academically, students gain access to world-class institutions, cutting-edge research, and innovative teaching methodologies, elevating the quality of education they receive. Beyond personal growth, studying abroad provides a unique opportunity to build an international network, opening doors to global career prospects.
                        </p>
                    </div>

                    <div className='w-[40%]'>
                        <Lottie animationData={abroadLottie2} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;