import React from 'react'
import Wrapper from '../Wrapper'
import DesktopsideBar from './DesktopsideBar'
import Image from 'next/image'
import MobileSideBar from './MobileSideBar'
import { useRouter } from 'next/router'
import BrandHeader from './BrandHeader'
import {AiOutlineArrowLeft} from 'react-icons/ai';
const PersonalDetails = () => {
    const router = useRouter()
    return (
        <>
            <div className=''>
                <BrandHeader />
                {/* <div className='md:hidden visible'>
                    <MobileSideBar />
                </div> */}
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
                                            <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans mb-2">Lets get you started</h2>
                                            <div className='md:mt-8'>
                                                <form>
                                                    <div className="grid md:grid-cols-2 md:gap-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">What’s your name*</label>
                                                        </div>
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone Number*</label>
                                                        </div>
                                                    </div>
                                                    <div className="grid md:grid-cols-2 md:gap-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Work Email*</label>
                                                        </div>
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name*</label>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 md:gap-10 pb-10 md:pb-0" onClick={() => router.push('/grow/requirments')} >
                                                        <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                            {/* <Image
                                                                src='icon/arrow.svg'
                                                                width={23}
                                                                height={0}
                                                                alt=''
                                                            /> */}
                                                            <AiOutlineArrowLeft/>
                                                        </div>
                                                        <button type="submit" className="text-[#0F3D68] text-[20px] leading-[24px] font-medium rounded-[5px] border-[#114067] border-[1px] w-[221px] h-[50px] ">Next</button>
                                                    </div>
                                                </form>

                                            </div>
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

export default PersonalDetails