import React from 'react'
const BrandsnessAbout = () => {
    return (
        <>
            <div>
                <div className='bg-[#F2FFEF] md:h-[347px] md:py-14 py-8 px-4'>
                    <h6 className='md:w-[820px] w-full mx-auto text-center text-[#0F3D68] text-[16px] leading-[27px] md:text-[45px] md:leading-[61px] font-semibold'>
                        <span className='text-[#5A914D] px-'> Schedule demo</span> to know more about
                        the opportunities for you
                    </h6>
                   <div className="flex justify-center gap-6 px- md:mt-8">
                   <button className='mt-5 text-[#5A914D] w-[156px] h-[35px]  md:w-[221px] md:h-[50px] text-[14px] leading-[17px] md:text-[20px] md:leading-[24px] border-[#5A914D] border-[1px]  text-center items-center flex justify-center rounded-[5px] ' >As a brand</button>
                    <button className='mt-5 text-[#5A914D] w-[156px] h-[35px]  md:w-[221px] md:h-[50px] text-[14px] leading-[17px] md:text-[20px] md:leading-[24px] border-[#5A914D] border-[1px]  text-center items-center flex justify-center rounded-[5px] ' >As an influencer</button>

                   </div>
                </div>
            </div>
        </>
    )
}

export default BrandsnessAbout;