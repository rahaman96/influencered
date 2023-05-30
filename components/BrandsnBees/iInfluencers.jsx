import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Counter from './Counter'
import { useRouter } from 'next/router'
const Influencers = () => {
    const router = useRouter()
    return (
        <div className='md:py-16'>
            <Wrapper>
                <div>
                    <div className=''>
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex  md:flex-row flex-col-reverse">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16 mb-5 justify-center">
                                    <h1 className="flex gap-2  text-[18px] leading-[27px] md:text-[38px] md:leading-[57px] font-semibold font-sans mt-5 md:mt-0 cursor-pointer "
                                    // onClick={() => router.push('brandsness/influencer')}

                                    >
                                        <a href="brandsness/influencer">
                                            <span className='text-[#131313]'>For {" "}</span>
                                            <span className='text-[#5A914D]'>
                                                Influencers</span>
                                        </a>
                                    </h1>
                                    <p className="mb-8 md:w-[619px] text-[#000000] text-[16px] md:text-[18px] leading-[30px] font-normal font-sans ">
                                        As an influencer on our platform, you will have the opportunity to collaborate with various niche brands, connecting with their highly targeted audiences and growing your own following in the process. With a steady stream of brand requests coming in every day, you can continue to increase your earnings and achieve your goals as an influencer. Join us today to take advantage of our robust network of brands and elevate your influencer career to new heights!
                                    </p>

                                </div>

                                <div>
                                    <Counter />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Influencers