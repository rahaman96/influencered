import React from 'react'
import { useRouter } from 'next/router'

const Affiliate = () => {
    const router = useRouter()
    return (
        <>
            <div className='ml-[] w-[]'>
                <div className=''>
                    <img class="md:h-[310px] md:w-[490px  object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                </div>
                <div className='text-center py-5 cursor-pointer'
                    onClick={() =>( router.push({
                        pathname: 'ecommerce/affiliatehero', query: {
                            data: 'For brand and Ecommerce  businesses'
                        }
                    }),localStorage.setItem("headtext","Affilate Marketing"))}>
                    <h6 className='text-[#000000] text-[32px] leading-[48px] font-medium font-sans md:mb-3'>Affiliate</h6>
                    <p className='text-[#000000] text-[18px] leading-[28px] font-normal w-[300px h-[64p'>Pay after every sale. Increase sales by 60% from 1000+ influencers from your niche.</p>
                </div>
            </div>
        </>
    )
}

export default Affiliate;