import React from 'react'
import { useRouter } from 'next/router'
const BrandAwareness = () => {
    const router = useRouter()
    return (
        <>
            <div className=''>
                <div className=''>
                    <img class="md:h-[310px] md:w-[490px w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                </div>

                <div className='text-center py-5 cursor-pointer' onClick={() =>( router.push({ pathname: 'ecommerce/affiliatehero', query: { data: 'Elevating Your Brands Presence and Impact' } }),localStorage.setItem("headtext","Brand Awarness"))}>
                    <h6 className='text-[#000000] text-[32px] leading-[48px] font-medium font-sans md:mb-3'>Brand awareness</h6>
                    <p className='text-[#000000] text-[18px] leading-[28px] font-normal w-[300px h-[64p'>Get your brand in front of the right people and maximize your {"brand's"} visibility.</p>
                </div>


            </div>
        </>
    )
}

export default BrandAwareness