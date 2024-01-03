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

const Banner = () => {
    return (
        <div className='overflow-x-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                    speed: 1500
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img className='h-[85vh] w-full object-cover' src={bannerImg1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=''>
                        <img className='h-[85vh] w-full object-cover' src={bannerImg2} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=''>
                        <img className='h-[85vh] w-full object-cover' src={bannerImg3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=''>
                        <img className='h-[85vh] w-full object-cover' src={bannerImg4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=''>
                        <img className='h-[85vh] w-full object-cover' src={bannerImg5} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
