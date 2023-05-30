import { useRouter } from 'next/router'
import React from 'react'
const ContentCreation = () => {
    const router=useRouter()
    return (
        <>
            <div className=''>
                <div className=''>
                    <img class="md:h-[310px] md:w-[490px w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                </div>
                <div className='text-center py-5 cursor-pointer' onClick={() => (router.push({ pathname: 'ecommerce/affiliatehero', query: { data: 'Content creation to recuse' } }),localStorage.setItem("headtext","Content creation to recuse"))}>
                    <h6 className='text-[#000000] text-[32px] leading-[48px] font-medium font-sans md:mb-3'>Content creation</h6>
                    <p className='text-[#000000] text-[18px] leading-[28px] font-normal w-[300px h-[64p'>Partner with influencers for original, high quality, and engaging content.</p>
                </div>


            </div>
        </>
    )
}

export default ContentCreation