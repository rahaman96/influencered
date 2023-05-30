import React from 'react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import styles from './Collaborators.module.css'
const Collaborators = () => {
    return (
        <div className='py-8 mx-auto md:w-[1240px md:w-full w-[450px]'>
            <Wrapper>
                <h6 className='text-center text-[#000000] text-[30] md:text-[74px] md:leading-[79px] leading-[43px] font-bold'>
                    <span>Our</span>
                    <span className='text-[#5A914D]' > collaborators</span>
                </h6>
                <div className="md:py-5 flex justify-between md:mt-4 gap-10 md:gap-4">
                    {/* <Swiper  pagination={false} autoplay={true} modules={[Pagination,Autoplay]} slidesPerView={4}   data-swiper-autoplay="800"  speed={800} className="mySwiper swiper-slide -mb-14 md:-mb-0 md:w-[1340px] w-[422px]"
                        breakpoints={{
                            0: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },

                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image
                                src='../image/google.svg'
                                width={113}
                                height={35}
                                alt='google'
                                className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                            />


                        </SwiperSlide>
                        <SwiperSlide>

                            <Image src="../image/netflex.svg"
                                alt="netflex"
                                width={113}
                                height={35}
                                className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                            />


                        </SwiperSlide>
                        <SwiperSlide>

                            <Image src="../image/air.svg"
                                alt="air"
                                width={113}
                                height={35}
                                className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                            />


                        </SwiperSlide>
                        <SwiperSlide>

                            <Image src="../image/amazon.svg"
                                alt="amazon"
                                width={113}
                                height={35}
                                className='w-[113px] h-[35px] md:w-[198px] md:h-[59px] '
                            />


                        </SwiperSlide>
                        <SwiperSlide>

                            <Image src="../image/facebook.svg"
                                alt="facebook"
                                width={113}
                                height={35}
                                className='w-[113px] h-[35px] md:w-[249px] md:h-[49px] '
                            />

                        </SwiperSlide>
                    </Swiper>
                    */}



                    <div className={styles.wrapper}>
                        <div className={styles.slider}>
                            <div className={`flex gap-6 ${styles.slide_track}`}>

                                <div className={styles.slide}>
                                    <img src='../image/google.svg' />
                                </div>

                                <div className={styles.slide}>
                                    <img src="../image/netflex.svg" />
                                </div>

                                <div className={styles.slide}>
                                    <img src="../image/air.svg" />
                                </div>

                                <div className={styles.slide}>
                                    <img src="../image/amazon.svg" />
                                </div>

                                <div className={styles.slide}>
                                    <img src="../image/facebook.svg" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
           
        </div>
    )
}

export default Collaborators