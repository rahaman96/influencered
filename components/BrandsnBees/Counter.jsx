import React from 'react'

const Counter = () => {
    return (
        <div className="lg:max-w-lg bg-[#FAFAFA] lg:w-full md:w-[551px] md:h-[329px] w-full h-[237px]">
            <div className='md:p-4 md:px-16 md:mt-0 md:mb-0 mt-6 mb-4'>
                <div className="flex justify-between  md:pb-6">
                    <div>
                        <h6 className='text-[#000000] text-[30px] md:text-[53px] md:leading-[80px]  md:w-[120px] md:h-[80px] w-full text-center'>10k+</h6>
                        <p className='md:w-[134px] md:h-[44px]  w-full font-medium text-[14px] leading-[18px] font-sans text-center px-2 md:px-0'>Niche influencers on the platform</p>
                    </div>
                    <div>
                        <h6 className='text-[#000000] text-[30px] md:text-[53px] md:leading-[80px] md:w-[120px] md:h-[80px] text-center'>1M+</h6>
                        <p className='md:w-[134px] md:h-[44px] w-full font-medium text-[14px] leading-[18px] font-sans text-center px-4 md:px-0'>Content generated by influencers</p>

                    </div>
                </div>

                <div className="flex justify-between  md:pb-6 mt-4 md:mt-0">
                    <div>
                        <h6 className='text-[#000000] text-[30px] md:text-[53px] md:leading-[80px]  md:w-[120px] md:h-[80px] w-full text-center'>5k+</h6>
                        <p className='md:w-[134px] md:h-[44px]  w-full font-medium text-[14px] leading-[18px] font-sans text-center px-4 md:px-0'>Collaborations</p>
                    </div>
                    <div>
                        <h6 className='text-[#000000] text-[30px] md:text-[53px] md:leading-[80px]  md:w-[120px] md:h-[80px] text-center'>100M+</h6>
                        <p className='md:w-[134px] md:h-[44px] w-full font-medium text-[14px] leading-[18px] font-sans text-center px-4 md:px-0'>Target audience Reach</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Counter