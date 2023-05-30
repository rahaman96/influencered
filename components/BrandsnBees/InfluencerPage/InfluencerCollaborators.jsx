import React from 'react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
const InfluencerCollaborators = () => {
    return (
        <div className='py-8 mx-auto'>
            <Wrapper>
                <h6 className='text-center text-[#000000] text-[30] md:text-[74px] md:leading-[79px] leading-[43px] font-bold'>
                    <span>Our</span>
                    <span className='text-[#5A914D]' > collaborators</span>
                </h6>
                <div className="md:py-5 flex justify-between md:mt-4 gap-10 md:gap-0">
                    <div>
                        <Image
                            src='../image/google.svg'
                            width={113}
                            height={35}
                            alt='google'
                            className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                        />

                    </div>
                    <div>
                        <Image src="../image/netflex.svg"
                            alt="netflex"
                            width={113}
                            height={35}
                            className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                        />
                    </div>
                    <div>
                        <Image src="../image/air.svg"
                            alt="air"
                            width={113}
                            height={35}
                            className='w-[113px] h-[35px] md:w-[195px] md:h-[52px] '
                        />
                    </div>
                    <div className='md:mt-3 mt-1'>
                        <Image src="../image/amazon.svg"
                            alt="amazon"
                            width={113}
                            height={35}
                            className='w-[113px] h-[35px] md:w-[198px] md:h-[59px] '
                        />
                    </div>
                    <div >
                        <Image src="../image/facebook.svg"
                            alt="facebook"
                            width={113}
                            height={35}
                            className='w-[113px] h-[35px] md:w-[249px] md:h-[49px] '
                        />
                    </div>
                </div>
                {/* </div> */}
            </Wrapper>
        </div>
    )
}

export default InfluencerCollaborators