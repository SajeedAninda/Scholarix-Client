import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import bannerImg1 from "../../assets/BannerImg/bannerImg1.jpg";
import bannerImg2 from "../../assets/BannerImg/bannerImg2.jpg";
import bannerImg3 from "../../assets/BannerImg/bannerImg3.jpg";
import bannerImg4 from "../../assets/BannerImg/bannerImg4.jpg";
import bannerImg5 from "../../assets/BannerImg/bannerImg5.jpg";
import 'swiper/swiper-bundle.css';
import "./banner.css"

const Banner = () => {
    return (
        <div className='overflow-x-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                    speed: 9500
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[85vh] w-full banner1'>
                        <div className='flex flex-col gap-4 justify-center items-center h-full'>
                            <h2 className='text-center text-5xl md:text-6xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Empowering Dreams, Guiding Futures</h2>
                            <p className='text-2xl text-center md:text-3xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Your Journey to Academic Excellence Begins Here.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[85vh] w-full banner2'>
                        <div className='flex flex-col gap-4 justify-center items-center h-full'>
                            <h2 className='text-center text-5xl md:text-6xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Unlocking Potential, Embracing Knowledge</h2>
                            <p className='text-2xl text-center md:text-3xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Exploring Boundless Horizons for Personal and Collective Growth</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[85vh] w-full banner3'>
                        <div className='flex flex-col gap-4 justify-center items-center h-full'>
                            <h2 className='text-center text-5xl md:text-6xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Bridging Aspirations with Education</h2>
                            <p className='text-2xl text-center md:text-3xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Building Academic Bridges for Lifelong Success</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[85vh] w-full banner4'>
                        <div className='flex flex-col gap-4 justify-center items-center h-full'>
                            <h2 className='text-center text-5xl md:text-6xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Bridging Aspirations with Education</h2>
                            <p className='text-2xl text-center md:text-3xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Fostering Lifelong Learning and Achievement Through Educational Excellence</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[85vh] w-full banner5'>
                    <div className='flex flex-col gap-4 justify-center items-center h-full'>
                            <h2 className='text-center text-5xl md:text-6xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Where Passion Meets Pedagogy.</h2>
                            <p className='text-2xl text-center md:text-3xl drop-shadow-2xl  text-[#F7FFF7] font-bold'>Come Join Us</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
