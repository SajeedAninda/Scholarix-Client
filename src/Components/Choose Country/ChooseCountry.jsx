import React from 'react';
import "./country.css"
import usa from "../../assets/ChooseCountry/usa.jpg"
import cn from "../../assets/ChooseCountry/cn.jpg"
import can from "../../assets/ChooseCountry/can.jpg"
import uk from "../../assets/ChooseCountry/uk.jpg"
import mal from "../../assets/ChooseCountry/mal.jpg"
import au from "../../assets/ChooseCountry/au.jpg"
import ind from "../../assets/ChooseCountry/ind.jpg"
import ger from "../../assets/ChooseCountry/ger.jpg"
import frnc from "../../assets/ChooseCountry/frnc.jpg"

const ChooseCountry = () => {
    return (
        <div className='bg-[#F7FFF7]'>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Choose Your Desired Country</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">As you navigate through the options, take the time to select your country of interest, and unveil a world of academic opportunities specifically curated to suit your ambitions. Whether you envision studying in renowned institutions in the United States, exploring the rich cultural tapestry of European universities, or embracing the innovation hubs of Asia – the power to choose your destination lies in your hands.
                        </p>
                    </div>

                    <div className='grid grid-cols-3 mt-6 gap-8'>
                        {/* CARD 1 */}
                        <div>
                            <div class="card">
                                <img className='object-cover'  src={usa} alt="" />
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
            </div>
        </div>
    );
};

export default ChooseCountry;