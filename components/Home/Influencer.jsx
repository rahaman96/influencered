import React from 'react'
import Wrapper from '../Wrapper'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Influencer = () => {
    const router=useRouter()
    return (
        <>
            <div className='md:py-16'>
            
                <Wrapper>
                    <div>
                        <div className=''>
                            <section className="text-gray-600 body-font md:mb-10">
                                <div className="container mx-auto flex  md:flex-row flex-col md:gap-20">
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full ">
                                        <Image className="object-cover object-center rounded" alt="hero" 
                                        width={530}
                                        height={354}
                                         src="image/lady.svg" />
                                    </div>
                                    
                                    <div className="md:w-1/2  flex flex-col mb-4 mt- justify-center ">
                                        <h1 className="text-[#131313] text-[18px] leading-[27px] md:text-[38px] md:leading-[57px] font-semibold font-sans mt-5 md:mt-0">For Influencers</h1>
                                        <p className="mb-8 text-[#000000] text-[16px] md:text-[18px] leading-[30px] font-normal font-sans ">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        </p>

                                        <button className="w-[170px] h-[38px] md:w-[221px] md:h-[50px] border-[1px] border-[#114067] text-[#0F3D68] text-[15px] leading-[19px] md:text-[20px] md:leading-[24px] font-medium font-sans " onClick={() => router.push('affiliate/affiliatehero')}>
                                            Know More
                                        </button>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </Wrapper>
            </div>

        </>
    )
}

export default Influencer