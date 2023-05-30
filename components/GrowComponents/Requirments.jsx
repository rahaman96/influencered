import React from 'react'
import BrandHeader from './BrandHeader'
import DesktopsideBar from './DesktopsideBar'
import Wrapper from '../Wrapper'
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../../styles/requirments.module.css'
import { useRouter } from 'next/router';
const Requirments = () => {
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
                                            <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans">Fill your requirements</h2>
                                            <div>
                                                <p className='md:pb-5 text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Let us help you and plan tour campaign better</p>
                                                <h2 className='mb-2 md:pb-3 text-[#000000] text-[25px] leading-[38px] font-medium font-sans opacity-90'>Budget:10,000</h2>
                                                <p className='mb-5 text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>This wil help you to suggest optimal number of influencers and deliverables
                                                    to achieve your object
                                                </p>
                                                <div className={styles.progress}>
                                                    <ProgressBar completed={60}
                                                        className={styles.progressBar}
                                                    />
                                                </div>
                                            </div>
                                            <div className='md:mt-8'>
                                                <form>
                                                    <div className="grid md:grid-cols-2 md:gap-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <input type="text" name="link" id="link" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Link Your Website*</label>
                                                        </div>

                                                    </div>
                                                </form>

                                            </div>
                                            <div class='pb-10 md:pb-0'>
                                                <p className='mb-4 text-[#000000] text-[16px] md:text-[25px] md:leading-[38px] leading-[24px] font-medium font-sans'>
                                                    Are you executing a campaign for the first time?*
                                                </p>
                                                <label for="toggleTwo" class="flex cursor-pointer select-none items-center">
                                                    <div class="relative">
                                                        <input type="checkbox" id="toggleTwo" class="sr-only" />
                                                        <div class="px-4 border-[1px] border-[#114067]  h-[30px] w-[136px] items-center flex justify-between rounded-full bg-[#FFFFFF]">
                                                            <p>No</p>
                                                            <p onClick={()=>router.push('/grow/category')}>Yes</p>
                                                        </div>
                                                        <div
                                                            class="dot absolute left- -mt-1 top-1 h-[30px] w-[68px] rounded-full bg-[#114067] transition"
                                                        >

                                                        </div>
                                                    </div>
                                                </label>
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

export default Requirments