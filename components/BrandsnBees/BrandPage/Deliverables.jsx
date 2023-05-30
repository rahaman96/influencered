import React from 'react'
import Wrapper from '@/components/Wrapper'
import { useRouter } from 'next/router'

const Deliverables = ({name}) => {
    const router = useRouter()
    return (
        <>
            <div className=''>
                <Wrapper>
                    <div className='md:w-[288px] md:h-[412px]'>
                        <div className='mx-aut flex jus w-[422px w-full'>
                            <img class="md:h-[310px] md:w-[490px w-[508px object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                        </div>
                        <div className='text-center py-5 cursor-pointer ' onClick={() => router.push('https://www.geeksforgeeks.org/')}>
                            <h6 className='text-[#000000] text-[32px] leading-[48px] font-medium font-sans md:mb-3'>
                                {name}
                            </h6>
                        </div>

                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default Deliverables