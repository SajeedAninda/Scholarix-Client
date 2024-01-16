import React from 'react';
import abroadLottie from "../../assets/LottieFiles/abroadLottie.json"
import Lottie from 'lottie-react';

const StudyAbroad = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div>
                <div className='pt-16 pb-8 flex items-center justify-between'>
                    <div className="max-w-3xl mx-auto flex-1">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Study Abroad?</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad is a transformative experience that opens doors to a world of opportunities and personal growth. Beyond the academic benefits, immersing oneself in a foreign country provides a unique chance to broaden cultural horizons, fostering a global perspective and understanding. The exposure to diverse traditions, languages, and perspectives cultivates adaptability, resilience, and cross-cultural communication skills, all of which are increasingly valuable in our interconnected world. Additionally, studying abroad often allows students to access top-notch educational institutions, cutting-edge research, and industry expertise that may not be readily available in their home country. Beyond the classroom, the experience encourages independence, self-discovery, and the development of a global network. Overall, studying abroad is an investment in both academic and personal development, offering a rich tapestry of experiences that contribute to a well-rounded and globally-minded individual.
                        </p>
                    </div>

                    <div className='flex-1'>
                    <Lottie animationData={abroadLottie} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;