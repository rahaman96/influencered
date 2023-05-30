import React from 'react'
import Elevating from './Elevating'
import Results from './Results'
import BrandCard from './BrandCard'
import Deliverables from './Deliverables'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Works from './Works'
import FeaturesFor from './FeaturesFor'
import Collaborators from './Collaborators'
import Testimonials from './Testimonials'
import About from '@/components/Home/About'
import Footer from '@/components/Home/Footer'
import BrandsnessAbout from '../BrandsnessAbout'
import MobileBrandCard from '../MobileView/MobileBrandCard'
import MobileFeatures from '../MobileView/MobileFeatures'


const data = [
    { id: 1, name: "Instagram post", url: "/" },
    { id: 2, name: "Unboxing product", url: "/Unboxing product" },
    { id: 3, name: "Youtube videos" },
    { id: 4, name: "Short videos" },
    { id: 5, name: "Website clicks" },
    { id: 6, name: "Website views" },
    { id: 7, name: "Memes creation" },
    { id: 8, name: "Instagram reels" },

];
console.log('data', data);

const BrandPage = () => {
    return (
        <>
            <div>
                <div className='w-[450px]'>
                    <Elevating />
                </div>
                <Results />
                {/* Brand Card  */}
                <div className='md:visible invisible'>
                    <BrandCard />
                </div>
                <div className='md:invisible visible -mt-[1000px] md:-mt-0'>
                    {/* <BrandCardExtra /> */}
                    <MobileBrandCard />
                </div>
                {/* BrandCard */}

                <div className='md:mb-2 mb-16 md:-mt-[800px] -mt-0'>
                    <Wrapper>
                        <h6 className='mb-10 md:mb-0 md:py-10 text-[#000000] text-[30px] md:text-[74px] md:leading-[105px] font-medium font-sans flex gap-2 md:gap-4'>
                            <span>Our</span>
                            <span className='text-[#5A914D]'>deliverables </span>
                        </h6>
                    </Wrapper>

                    <div className='md:w-[1240px] grid md:grid-cols-4 invisible md:visible'>
                        {data.map((item) => {
                            return (
                                <>
                                    <Deliverables name={item.name} />

                                </>
                            )

                        })}
                       
                    </div>


                    <div className={`md:hidden visible ${styles.brandPages} `}>
                        <Swiper pagination={true} modules={[Pagination]} slidesPerView={4} className="mySwiper -mb-14 md:-mb-0 md:w-[1340px] w-[422px]"
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
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },

                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                            }}
                        >
                            {data.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <Deliverables name={item.name} />
                                        </SwiperSlide>                                       
                                    </>
                                )

                            })}
                        </Swiper>
                    </div>
                </div>
                <Works />
                {/* Features Start */}
                <div className='md:visible invisible'>
                    <FeaturesFor />
                </div>
                <div className='md:hidden visible md:-mt-0 -mt-[1500px]'>
                    <MobileFeatures />
                </div>

                {/* Features End*/}

                <Collaborators />
                <Testimonials />

                <div>
                    <div className='md:hidden visible w-[450px]'>
                        <BrandsnessAbout />
                    </div>
                    <div className='md:visible invisible'>
                        <About />
                    </div>
                </div>

                <div className={`md:w-[1349px] w-[450px] ${styles.footerPage}`}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BrandPage