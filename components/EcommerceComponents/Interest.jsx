import React from 'react'
import Wrapper from '../Wrapper'
import { TbBulb } from 'react-icons/tb'
import About from '../Home/About'
import Footer from '../Home/Footer'
import { useRouter } from 'next/router'
const Interest = () => {
    const router = useRouter()
    return (
        <>
            <div>
                <Wrapper>
                    <div className='py-10'>
                        <div className="text-center">
                            <h1 className='mb-4 text-[#000000] md:text-[36px] md:leading-[50px] font-medium font-sans '>Select your Interest and begin.</h1>
                            <p className='text-[#000000] opacity-70 md:text-[16px] md:leading-[24px] font-normal font-sans  '>Help us curate the best media plan. The no of posts will be suggested based on the objective</p>
                        </div>


                        {/* card start */}
                        <div className="flex flex-wrap gap-4 mt-10">
                            <div
                                className="border-l-[5px] border-b-[5px] md:w-[460px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] " onClick={() => router.push('edetail')}>
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
                                className="hover:border-l-[5px] hover:border-b-[5px] md:w-[460px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] cursor-pointer " onClick={() => router.push('emarketing')}>
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Affiliate Marketing</h1>
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
                                className="hover:border-l-[5px] hover:border-b-[5px] md:w-[460px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
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
                                className="hover:border-l-[5px] hover:border-b-[5px] md:w-[460px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Website Traffic</h1>
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
                        {/* Card End */}

                        <div className='flex justify-center py-14 ' onClick={()=>router.push('affiliate/affiliateinterest')} >
                            <button className='text-center  w-[221px] h-[50px] border-[1px border-[#114067 rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] text-[#FFFFFF] text-[20px] leading-[24px] font-medium font-sans '>
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

export default Interest