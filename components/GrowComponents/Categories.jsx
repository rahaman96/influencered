import React from 'react'
import Wrapper from '../Wrapper'
import BrandHeader from './BrandHeader'
import DesktopsideBar from './DesktopsideBar'
import { BsBicycle } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
const Categories = () => {
    const router = useRouter()
    return (
        <>
            <div className=''>
                <BrandHeader />

                <div className='md:flex'>
                    <div className=''>
                        <DesktopsideBar />
                    </div>
                    <Wrapper>
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 md:py-24 mx-auto">
                                <div className="-my-8 divide-y-2 divide-gray-100">
                                    <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                                        <div className="md:flex-grow">
                                            <h2 className="md:pb-3 md:w-[684px] text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans">Select upto 3 categories/niche for your product</h2>
                                            <div>
                                                <p className='mb-5 md:w-[728px]  text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Select upto 3 categories relevent to the products of your campaign, the influencers will be shortlisted based on selected categories</p>
                                            </div>
                                            {/* Button start */}
                                            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                                <div class="cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                                                    <BsBicycle
                                                        className='w-[27px] h-[23px]'
                                                    />
                                                    <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                                                        Life style
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* butto Start */}
                                            <div className="flex gap-4 py-10 md:gap-10 pb-10 md:pb-0" onClick={() => router.push('/grow/requirments')} >
                                                <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                    {/* <Image
                                                                src='icon/arrow.svg'
                                                                width={23}
                                                                height={0}
                                                                alt=''
                                                            /> */}
                                                    <AiOutlineArrowLeft />
                                                </div>
                                                <button type="submit" className="text-[#0F3D68] text-[20px] leading-[24px] font-medium rounded-[5px] border-[#114067] border-[1px] w-[221px] h-[50px] " onClick={() => router.push('objective')} >Next</button>
                                            </div>
                                            {/* butto End */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Wrapper>
                </div>

            </div>
        </>
    )
}

export default Categories