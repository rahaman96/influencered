import React from 'react'
import BrandCounter from './BrandCounter'
import styles from '../../../styles/BrandPage.module.css'
const Works = () => {
    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[450px]  md:h-[720px]  h-[1139px md:mb-10 rounded-[10px] z-10 p-6 md:p-0 '>

                    <div className="flex flex-wrap md:px-10  justify-between gap-6 md:gap-0">
                        {/* <div className={`md:w-[502px] h-full md:h-[789px] md:pr-12   md:mt- overflow-y-auto md:mt-6 scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  md:overflow-y-scroll overflow-y-none ${styles.scrollbar_thin}  `}> */}
                        <div className={`md:w-[502px] h-full md:h-[389px] md:pr-12   md:mt-10`}>

                            <h6 className='flex gap-2 md:gap-4 text-[#000000] text-[30px] leading-[80px] md:text-[74px] md:leading-[105px] font-medium font-sans ' >
                                <span>How</span>
                                <span className='text-[#5A914D]'>it works</span>
                            </h6>
                            <p className='text-[#000000] opacity-90 text-[12px] leading-[21px] md:text-[16px] md:leading-[28px] font-medium font-sans md:w-[427px] ' >Select this option if your campaign objective is to increase brand recognitionSelect this option if</p>
                            <div className='md:visible invisible'>
                                <button className='w-[212px] h-[60px] md:w-[178px] md:h-[50px] border-[1px] border-[#5A914D] rounded-[5px] text-[#5A914D] md:text-[20px] md:leading-[24px] font-medium font-sans mt-6 '>
                                    Start now
                                </button>

                                <div className={`md:mt-10 mt-16 mb-6 md:mb-0 ${styles.brandCounter} `}>
                                    <BrandCounter className='' />
                                </div>
                            </div>
                        </div>
                        {/* flex-col-reverse */}
                        {/* <div className='md:w-[589px] md:h-[789px] md:mt-[60px] '> */}
                        <div className={`md:w-[589px] w-full md:h-[600px] md:overflow-x-hidden md:mt-10 md:overflow-y-auto scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  overflow-y-none ${styles.scrollbar_works}  `}>

                            <div className={`md:ml-[20px] ${styles.brandCard}`}>
                                <div className='w-[355px] h-[103px] md:w-[589px] md:h-[171px] rounded-[10px] bg-[#FFFFFF] flex gap-6 px-5'>
                                    <p className='text-[#5A914D] w-[15px] h-[53px] md:w-[25px]  md:h-[88px] text-[41px] leading-[73px] md:text-[69px] md:leading-[121px] font-medium font-sans '>1</p>
                                    <div className='md:mt-6 mt-4'>
                                        <h6 className='text-[#000000] w-[56px] h-[29px] md:w-[93px] md:leading-[48px]  md:text-[32px]  font-medium font-sans md:mb-5 '>Apply</h6>
                                        <p className='text-[#000000] w-[288px] h-[32px] text-[10px] leading-[16px]  md:w-[478px] md:h-[54] md:text-[18px] md:leading-[27px] font-normal font-sans'>Fill in the form. Our team will get back to you shortly with the best solution possible</p>
                                    </div>
                                </div>

                                <div className='mt-5 w-[355px] h-[103px] md:w-[589px] md:h-[171px] rounded-[10px] bg-[#FFFFFF] flex gap-6 px-5'>
                                    <p className='text-[#5A914D] w-[15px] h-[53px] md:w-[25px]  md:h-[88px] text-[41px] leading-[73px] md:text-[69px] md:leading-[121px] font-medium font-sans '>2</p>
                                    <div className='md:mt-6 mt-4'>
                                        <h6 className='text-[#000000] w-[56px] h-[29px] md:w-[93px] md:leading-[48px]  md:text-[32px]  font-medium font-sans md:mb-5 '>Apply</h6>
                                        <p className='text-[#000000] w-[288px] h-[32px] text-[10px] leading-[16px]  md:w-[478px] md:h-[54] md:text-[18px] md:leading-[27px] font-normal font-sans'>Fill in the form. Our team will get back to you shortly with the best solution possible</p>
                                    </div>
                                </div>

                                <div className='mt-5 w-[355px] h-[103px] md:w-[589px] md:h-[171px] rounded-[10px] bg-[#FFFFFF] flex gap-6 px-5'>
                                    <p className='text-[#5A914D] w-[15px] h-[53px] md:w-[25px]  md:h-[88px] text-[41px] leading-[73px] md:text-[69px] md:leading-[121px] font-medium font-sans '>3</p>
                                    <div className='md:mt-6 mt-4'>
                                        <h6 className='text-[#000000] w-[56px] h-[29px] md:w-[93px] md:leading-[48px]  md:text-[32px]  font-medium font-sans md:mb-5 '>Apply</h6>
                                        <p className='text-[#000000] w-[288px] h-[32px] text-[10px] leading-[16px]  md:w-[478px] md:h-[54] md:text-[18px] md:leading-[27px] font-normal font-sans'>Fill in the form. Our team will get back to you shortly with the best solution possible</p>
                                    </div>
                                </div>

                                <div className='mt-5 w-[355px] h-[103px] md:w-[589px] md:h-[171px] rounded-[10px] bg-[#FFFFFF] flex gap-6 px-5'>
                                    <p className='text-[#5A914D] w-[15px] h-[53px] md:w-[25px]  md:h-[88px] text-[41px] leading-[73px] md:text-[69px] md:leading-[121px] font-medium font-sans '>4</p>
                                    <div className='md:mt-6 mt-4'>
                                        <h6 className='text-[#000000] w-[56px] h-[29px] md:w-[93px] md:leading-[48px]  md:text-[32px]  font-medium font-sans md:mb-5 '>Apply</h6>
                                        <p className='text-[#000000] w-[288px] h-[32px] text-[10px] leading-[16px]  md:w-[478px] md:h-[54] md:text-[18px] md:leading-[27px] font-normal font-sans'>Fill in the form. Our team will get back to you shortly with the best solution possible</p>
                                    </div>
                                </div>

                            </div>

                            <div className=' md:hidden visible mt-10'>
                                <div className={`md:mt-16 mb-6 md:mb-0`}>
                                    <BrandCounter className='' />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='w-[212px] h-[60px] md:w-[178px] md:h-[50px] border-[1px] border-[#5A914D] rounded-[5px] text-[#5A914D] md:text-[20px] md:leading-[24px] font-medium font-sans mt-6 '>
                                        Start now
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Works