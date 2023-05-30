// import React from 'react'
// import Wrapper from '../Wrapper'
// import Image from 'next/image'

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

// const Helping = () => {
//     return (
//         <div className='py-8'>
//             <Wrapper>
//                 {/* <h6 className='text-center text-[#0F3D68] text-[20] md:text-[45px] md:leading-[79px] leading-[30px] font-bold'>Helping 1,000s of on Online Brands succeed</h6> */}
//                 <div className="py-5 flex justify-between mt-4 gap-10 md:gap-0">

//                     <Swiper pagination={true} modules={[Pagination]} slidesPerView={5} className="mySwiper -mb-14 md:-mb-0 md:w-[1340px] w-[422px]"
//                         breakpoints={{
//                             0: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 10
//                             },
//                             640: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 10
//                             },
//                             768: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 10
//                             },
//                             992: {
//                                 slidesPerView: 6,
//                                 spaceBetween: 10
//                             },

//                             1200: {
//                                 slidesPerView: 6,
//                                 spaceBetween: 10
//                             },
//                         }}
//                     >

//                         <SwiperSlide>
//                             <div>
//                                 <Image
//                                     src='image/google.svg'
//                                     width={85}
//                                     height={23}
//                                     alt='google'
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>

//                         <SwiperSlide>
//                             <div>
//                                 <Image src="image/netflex.svg"
//                                     alt="netflex"
//                                     width={85}
//                                     height={23}
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>

//                         <SwiperSlide>
//                             <div>
//                                 <Image src="image/air.svg"
//                                     alt="air"
//                                     width={91}
//                                     height={28}
//                                     className='w-[91px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className='md:mt-3 mt-1'>
//                                 <Image src="image/amazon.svg"
//                                     alt="amazon"
//                                     width={86}
//                                     height={26}
//                                     className='w-[86px] h-[23px] md:w-[198px] md:h-[59px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div >
//                                 <Image src="image/facebook.svg"
//                                     alt="facebook"
//                                     width={85}
//                                     height={23}
//                                     className='w-[85px] h-[23px] md:w-[249px] md:h-[49px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div>
//                                 <Image
//                                     src='image/google.svg'
//                                     width={85}
//                                     height={23}
//                                     alt='google'
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div>
//                                 <Image
//                                     src='image/google.svg'
//                                     width={85}
//                                     height={23}
//                                     alt='google'
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div>
//                                 <Image
//                                     src='image/google.svg'
//                                     width={85}
//                                     height={23}
//                                     alt='google'
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div>
//                                 <Image
//                                     src='image/google.svg'
//                                     width={85}
//                                     height={23}
//                                     alt='google'
//                                     className='w-[85px] h-[23px] md:w-[195px] md:h-[52px] '
//                                 />
//                             </div>

//                         </SwiperSlide>

//                     </Swiper>

//                 </div>
//                 {/* </div> */}
//             </Wrapper>
//         </div>
//     )
// }

// export default Helping


import React from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../Home/Helping.module.css'
const Helping = () => {
    return (
        <div className={`py-8 mx-auto md:w-[1100px md:w-full ${styles.helpingMain}`}>
            <Wrapper>
                <h6 className='text-center text-[#000000] text-[30] md:text-[74px] md:leading-[79px] leading-[43px] font-bold'>
                    <span>Our</span>
                    <span className='text-[#5A914D]' > collaborators</span>
                </h6>
                <div className="md:py-5 flex justify-between md:mt-4 gap-10 md:gap-4">
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

export default Helping