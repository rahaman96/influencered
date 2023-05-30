import React from 'react'
import Wrapper from '../Wrapper'
import { useRouter } from 'next/router'
const About = () => {
    const router=useRouter( )
    return (
        <>
            {/* <Wrapper> */}
                <div className='bg-[#F2FFEF] py-10'>
                    <h6 className='md:w-[849px] mx-auto text-center text-[#0F3D68] text-[20px] leading-[27px] md:text-[45px] md:leading-[61px] font-semibold'>
                        Would you like to know more about
                        Lynktown
                    </h6>
                    <button className='mt-5 text-[#0F3D68] w-[156px] h-[35px]  md:w-[221px] md:h-[50px] text-[14px] leading-[17px] md:text-[20px] md:leading-[24px] border-[#114067] border-[1px] mx-auto text-center items-center flex justify-center ' onClick={()=>router.push('landing')}>Schedule demo</button>
                </div>
            {/* </Wrapper> */}
        </>
    )
}

export default About