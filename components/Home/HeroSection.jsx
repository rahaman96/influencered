import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import DEsktopSteper from './DesktopSteper'
import MobileSteper from './MobileSteper'
const HeroSection = () => {
    return (
        <div>
            <Wrapper >
                <h6 className='text-[#0F3D68] text-[20px] md:text-[45px] font-bold font-sans  text-center items-center mt-5 md:md-0 md:py-5' >
                    How it works?
                </h6>

                <div>
                    <div className='md:visible invisible'>
                        <DEsktopSteper />
                    </div>
                    <div className='visible md:hidden -mt-40'>
                        <MobileSteper />
                    </div>

                    <div className='flex gap-4 mx-auto justify-center py-12 '>
                        <button class=" w-[177px] h-[50px] bg-[#114067] text-[20px] leading-[24px] font-medium text-[#FFFFFF] items-center ">
                            Know More
                        </button>

                        <button class="invisible md:visible w-[177px] h-[50px] bg-[#114067] text-[20px] leading-[24px] font-medium text-[#FFFFFF] items-center ">
                            Know More
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default HeroSection
