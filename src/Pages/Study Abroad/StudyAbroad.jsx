import React from 'react';
import abroadLottie from "../../assets/LottieFiles/abroadLottie.json"
import abroadLottie2 from "../../assets/LottieFiles/abroadLottie2.json"
import Lottie from 'lottie-react';
import usa from "../../assets/ChooseCountry/usa.jpg"
import cn from "../../assets/ChooseCountry/cn.jpg"
import can from "../../assets/ChooseCountry/can.jpg"
import uk from "../../assets/ChooseCountry/uk.jpg"
import mal from "../../assets/ChooseCountry/mal.jpg"
import au from "../../assets/ChooseCountry/au.jpg"
import ind from "../../assets/ChooseCountry/ind.jpg"
import ger from "../../assets/ChooseCountry/ger.jpg"
import frnc from "../../assets/ChooseCountry/frnc.jpg"
import StudyAbroadTabs from './StudyAbroadTabs';

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
                <div className='pt-8 pb-6 flex items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-[60%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Why Study Abroad?</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad is a transformative experience that opens doors to a world of opportunities and personal growth. Beyond the academic benefits, immersing oneself in a foreign country provides a unique chance to broaden cultural horizons, fostering a global perspective and understanding. The exposure to diverse traditions, languages, and perspectives cultivates adaptability, resilience, and cross-cultural communication skills, all of which are increasingly valuable in our interconnected world. Additionally, studying abroad often allows students to access top-notch educational institutions, cutting-edge research, and industry expertise that may not be readily available in their home country. Beyond the classroom, the experience encourages independence, self-discovery, and the development of a global network. Overall, studying abroad is an investment in both academic and personal development, offering a rich tapestry of experiences that contribute to a well-rounded and globally-minded individual.
                        </p>
                    </div>

                    <div className='w-[40%]'>
                        <Lottie animationData={abroadLottie} loop={true} />
                    </div>
                </div>

                <div className='pt-0 pb-6 flex flex-row-reverse text-right items-center justify-between'>
                    <div className="max-w-3xl mx-auto w-[55%]">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Benefits of studying Abroad</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">Studying abroad presents a myriad of benefits that extend far beyond the classroom, enriching students' lives in profound ways. Firstly, the exposure to diverse cultures enhances one's global perspective, fostering a deep understanding and appreciation for different customs, traditions, and ways of thinking. This cultural immersion not only broadens horizons but also nurtures adaptability and cross-cultural communication skills—essential attributes in today's interconnected world. Academically, students gain access to world-class institutions, cutting-edge research, and innovative teaching methodologies, elevating the quality of education they receive. Beyond personal growth, studying abroad provides a unique opportunity to build an international network, opening doors to global career prospects.
                        </p>
                    </div>

                    <div className='w-[45%]'>
                        <Lottie animationData={abroadLottie2} loop={true} />
                    </div>
                </div>

                <div className='pb-6'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Explore Countries</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">As you navigate through the options, take the time to select your country of interest, and unveil a world of academic opportunities specifically curated to suit your ambitions.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-8'>
                        {/* CARD 1 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={usa} alt="" />
                                <div class="card__content">
                                    <p class="card__title">United States</p>
                                    <p class="card__description">The United States is a melting pot of cultures, offering a vast array of educational opportunities. Renowned for its prestigious Ivy League institutions and a wide range of programs, students can experience a diverse and dynamic environment. From the bustling cities to serene campuses, the USA provides a well-rounded education with a global perspective.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={cn} alt="" />
                                <div class="card__content">
                                    <p class="card__title">China</p>
                                    <p class="card__description">China has rapidly become a global education hub, blending ancient traditions with modern advancements. With a growing number of universities ranking among the world's best, international students are drawn to China for its rich cultural heritage, economic growth, and opportunities for cross-cultural exchange.</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={can} alt="" />
                                <div class="card__content">
                                    <p class="card__title">Canada</p>
                                    <p class="card__description">Known for its friendly communities and high-quality education, Canada stands out as a top destination for international students. The country's universities consistently rank among the best globally, offering a welcoming atmosphere and a chance to explore diverse landscapes, from vibrant cities to picturesque natural wonders.</p>
                                </div>
                            </div>
                        </div>


                        {/* CARD 4 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={uk} alt="" />
                                <div class="card__content">
                                    <p class="card__title">United Kingdom</p>
                                    <p class="card__description">The United Kingdom is synonymous with academic excellence, boasting a rich history of scholarship and innovation. From the historic halls of Oxford and Cambridge to modern institutions in bustling cities, the UK provides a globally recognized education. Students benefit from a diverse cultural environment and exposure to cutting-edge research.</p>
                                </div>
                            </div>
                        </div>


                        {/* CARD 5 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={mal} alt="" />
                                <div class="card__content">
                                    <p class="card__title">Malaysia</p>
                                    <p class="card__description">Malaysia offers a unique blend of cultures, making it an enticing destination for international students. With affordable education, a tropical climate, and a variety of programs taught in English, Malaysia provides a multicultural experience against the backdrop of stunning landscapes and bustling urban centers.</p>
                                </div>
                            </div>
                        </div>


                        {/* CARD 6 */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={au} alt="" />
                                <div class="card__content">
                                    <p class="card__title">Australia</p>
                                    <p class="card__description">Australia's world-class universities and laid-back lifestyle make it a sought-after destination for students worldwide. From the vibrant cities of Sydney and Melbourne to the pristine beaches and natural wonders, Australia offers a high standard of living along with excellent academic programs across various disciplines.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 7  */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={ger} alt="" />
                                <div class="card__content">
                                    <p class="card__title">Germany</p>
                                    <p class="card__description">Germany is a powerhouse for innovation and technology, making it an ideal destination for students pursuing engineering, science, and research-oriented programs. The country's strong emphasis on practical skills, combined with a rich cultural scene, attracts students seeking a holistic and forward-thinking education.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 8  */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={ind} alt="" />
                                <div class="card__content">
                                    <p class="card__title">India</p>
                                    <p class="card__description">India's education system reflects its diverse cultural heritage and rapid economic growth. With a mix of traditional wisdom and modern innovation, students in India experience a dynamic learning environment. The country's renowned institutions offer a wide range of courses, making it a hub for various academic disciplines.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 9  */}
                        <div>
                            <div class="card">
                                <img className='object-cover' src={frnc} alt="" />
                                <div class="card__content">
                                    <p class="card__title">France</p>
                                    <p class="card__description">France, a global center for art, culture, and innovation, provides a unique educational experience. Renowned for its culinary arts, fashion, and architectural marvels, France's universities offer programs that blend creativity and academic rigor. Students can immerse themselves in a rich cultural tapestry while pursuing their academic goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <StudyAbroadTabs></StudyAbroadTabs>

            </div>
        </div>
    );
};

export default StudyAbroad;