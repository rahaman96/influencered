import React, { useState } from 'react'
import Wrapper from '../Wrapper'
import { TbBulb } from 'react-icons/tb'
import About from '../Home/About'
import Footer from '../Home/Footer'
import AffliateHeader from './AffiliateHeader'
import { useRouter } from 'next/router'

const AffiliateInterest = () => {
    const router = useRouter()
    return (
        <>
            <div>
                <AffliateHeader />
                <Wrapper>
                    <div className="py-10 ">
                        <div className="text-center mb-10">
                            <h1 className='text-[#000000] md:text-[36px] md:leading-[50px] font-medium font-sans '>Select your Interest and begin.</h1>
                            <p className='text-[#000000] opacity-70 md:text-[16px] md:leading-[24px] font-normal font-sans'>Help us curate the best media plan. The no of posts will be suggested based on the objective</p>
                        </div>


                        <div
                            className="border-l-[5px] border-b-[5px]  md:h-[515px] pt- rounded-[10px] p-6 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                            <div className='flex justify-between mb-2'>
                                <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[127px] h-[127px] py-2 px-2 ' />
                                <div className='mt-2'>
                                    <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[52px] h-[52px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                </div>
                            </div>
                            <div className='mt-6'>
                                <h1 className='mb-2 text-[#000000] text-[30px] leading-[46px] font-medium font-sans h-[46px] '>Affiliate Marketing</h1>
                                <p className='mt-3 md:mb-12 mb-6 text-[#000000] opacity-70 text-[16px] md:text-[25px] md:leading-[38px] font-medium font-sans md:w-[575px] h-[76px] '>
                                    Select this option if your campaign objective is to increase brand recognition
                                    is to increase brand recognition</p>
                                <h5 className='mt-6 text-[#000000] text-[20px] md:text-[27px] md:leading-[40px] font-medium font-sans h-[41px] '>Suggested deliverables</h5>

                                <div className="flex flex-wrap gap-2 mt-6 md:gap-6">
                                    <p className='bg-[#FFFFFF] text-[23px] text-[#114067] leading-[35px] font-medium flex justify-center items-center  w-[198px] h-[42px]'>Product views</p>
                                    <p className='bg-[#FFFFFF] text-[23px] text-[#114067] leading-[35px] font-medium flex justify-center items-center  w-[193px] h-[42px]'>Product sales</p>
                                    <p className='bg-[#FFFFFF] text-[23px] text-[#114067] leading-[35px] font-medium flex justify-center items-center  w-[209px] h-[42px]'>Product review</p>
                                    <p className='bg-[#FFFFFF] text-[23px] text-[#114067] leading-[35px] font-medium flex justify-center items-center  w-[243px] h-[42px]'>Product unboxing</p>

                                </div>
                            </div>
                        </div>


                        {/* 3 card start */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto justify-center">
                            <div
                                className="md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Brand Awareness</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>

                                    <div className="flex flex-wrap gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram Stories</p>

                                    </div>
                                </div>
                            </div>

                            <div
                                className=" md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] cursor-pointer " onClick={() => router.push('emarketing')}>
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Content Creation to Reuse</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>

                                    <div className="flex flex-wrap gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram Stories</p>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '> Website Traffic</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>

                                    <div className="flex flex-wrap gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[152px] h-[26px]'>1x Instagram Stories</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 card End */}

                        <div className='flex justify-center py-14 '>
                            <button className='text-center  w-[221px] h-[50px] border-[1px border-[#114067 rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] text-[#FFFFFF] text-[20px] leading-[24px] font-medium font-sans '
                                onClick={() => router.push({ pathname: 'edetail', query: { name: 'Affiliate Marketing', second: 'brand Awer', eData: 'ground' } })}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </Wrapper>
                {/* Last Section start */}
                <div>
                    <About />
                    <Footer />
                </div>
                {/* Last Section end */}
            </div>
        </>
    )
}

export default AffiliateInterest