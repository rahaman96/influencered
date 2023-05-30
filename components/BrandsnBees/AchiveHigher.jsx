import React,{useState} from 'react'
import Wrapper from '../Wrapper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper";

import Affiliate from './Affiliate';
import BrandAwareness from './BrandAwareness';
import ContentCreation from './ContentCreation';
import WebsiteTrafic from './WebsiteTraffic';
import styles from '../../styles/AchiveHigher.module.css'
const AchiveHigher = () => {
    const [headtext, setHeadText] = useState('Affiliate Marketing')

    return (
        <>
            <div className='md:py-10 md:mt-10 py-5 bg-[#EDFFE9] md:w-[810px] md:rounded-r-[28px] w-full'>
                <Wrapper className='md:w-[1345px] w-full'>
                    <div className='mb-6'>
                        <h1 className='md:w-[1250px]  w-full md:text-[64px] md:leading-[90px] font-semibold font-sans text-[#000000] ' >
                            Achieve higher results with Our <br /> <span className='text-[#5A914D]'>Influencer Campaigns!</span>
                        </h1>
                    </div>


                    {/* Swiper start */}
                    <Swiper pagination={false}  modules={[Pagination]} slidesPerView={3} className={styles.mySwiper}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                        }}
                    >
                        <SwiperSlide >
                            <Affiliate />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BrandAwareness />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ContentCreation />
                        </SwiperSlide>

                        <SwiperSlide >
                            <WebsiteTrafic />
                        </SwiperSlide>

                    </Swiper>
                 
                    {/* Swiper End */}
                    <div className="mt-7 mb-5 flex justify-center items-center gap-[31px]">
                        <button className="w-[170px] h-[38px] md:w-[219px] md:h-[62px] border-[1px] border-[#5A914D] rounded-[6px] text-[#5A914D] text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] font-medium font-sans ">
                        Try for free
                        </button>
                        <button className="w-[170px] h-[38px] md:w-[219px] md:h-[62px] border-[1px] border-[#5A914D] rounded-[6px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] text-[#FFFFFF] text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] font-medium font-sans ">
                        Know more
                        </button>                      
                    </div>
                </Wrapper>





            </div>
        </>
    )
}

export default AchiveHigher