import React from 'react'
import Wrapper from '../Wrapper'
import DesktopsideBar from './DesktopsideBar'
import BrandHeader from './BrandHeader'
import { TbBulb } from 'react-icons/tb'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router'
const Objectives = () => {
    const router = useRouter()
    return (
        <div className=''>
            <BrandHeader />

            <div className='md:flex'>
                <div className=''>
                    <DesktopsideBar />
                </div>
                <Wrapper>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 md:py-24 mx-auto">
                            <div className="-my-8">
                                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans">Select the objective of your campaign</h2>
                                        <p className='text-[#000000] text-[16px] leading-[24px] font-normal font-sans '>
                                            Help us curate the best media plan. The no of posts will be suggested based on the objective
                                        </p>
                                    </div>

                                </div>

                                {/* card start */}
                                <div className="flex flex-wrap gap-4 mt-10">
                                    <div
                                        className="border-l-4 border-b-4 md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                        <div className='flex justify-between'>
                                            <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                            <div className='mt-2'>
                                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

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
                                        className=" md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                        <div  >
                                            <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
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
                                        className=" md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                        <div className='flex'>

                                            <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />



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
                                        className=" md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                        <div  >
                                            <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
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
                                        className=" md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ">
                                        <div  >
                                            <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
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
                                </div>
                                {/* Card End */}
                                <div>

                                </div>
                            </div>

                            {/* butto Start */}
                            <div className="flex mt-5 gap-4 py-10 md:gap-10 pb-10 md:pb-0" onClick={() => router.push('/grow/requirments')} >
                                <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>

                                    <AiOutlineArrowLeft />
                                </div>
                                <button type="submit" className="text-[#0F3D68] text-[20px] leading-[24px] font-medium rounded-[5px] border-[#114067] border-[1px] w-[221px] h-[50px] " onClick={() => router.push('target')} >Next</button>
                            </div>
                            {/* butto End */}

                        </div>
                    </section>
                </Wrapper>
            </div>

        </div>
    )
}

export default Objectives