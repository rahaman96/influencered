import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Counter from './Counter'
import { useRouter } from 'next/router'
const Brands = () => {
    const router = useRouter()
    return (
        <div className='md:py-10'>
            <Wrapper>
                <div>
                    <div className=''>
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex  md:flex-row flex-col-reverse">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16 mb-5 justify-center">
                                    <h1 className="flex gap-2  text-[18px] leading-[27px] md:text-[38px] md:leading-[57px] font-semibold font-sans mt-5 md:mt-0 cursor-pointer" 
                                    // onClick={() => router.push('brandsness/brands')} 
                                    >
                                        <a href="brandsness/brands">
                                            <span className='text-[#131313]'>For {""}</span>
                                            <span className='text-[#5A914D]'>Brands</span>
                                        </a>
                                    </h1>
                                    <p className="mb-8 md:w-[619px] text-[#000000] text-[16px] md:text-[18px] leading-[30px] font-normal font-sans ">
                                        With our platform, brands can connect with niche influencers to reach highly targeted audiences for maximum impact. By leveraging the influence of these creators, businesses can reduce costs while achieving better results and increased brand recognition. Laser-focused approach ensures that your {"brand's"} message is seen by the right people, at the right time.
                                    </p>
                                </div>
                                <Counter />

                                <div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Brands