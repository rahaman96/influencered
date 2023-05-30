import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const BrandCard = () => {
    const [active, setActive] = useState('ground');
   
    const handleClick = (data) => {
        console.log('data',data);
        setActive(data);
    };

   

    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        ground: true
    });

    const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
            // ...prevState,

            [order]: !prevState[order],
            [!order]: prevState[order],
            [!order]: prevState[order]


        }));
    };

    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[422px]   w-[364px md:h-[708px]  h-[928px] mb-10 rounded-[10px] z-10 '>

                    <div className="flex flex-wrap md:px-10  mx-auto items-center justify-between gap-6 md:gap-0">
                        <div className={`scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  md:mt-10 md:h-[515px] md:overflow-y-scroll overflow-y-none ${styles.scrollbar_thin} `}>
                            <div className={`md:w-[502px h-full md:h-[515px] md:pr-12 `}>
                               
                                <div id="accordion-collapse" data-accordion="collapse" >
                                    <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('ground'); onClickHandler("ground") }}
                                        style={{ backgroundColor: active==='ground' ? "black" : "#EDFFE9", }}>
                                        <h2 id="accordion-collapse-heading-1" >
                                            <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"  style={{ color: active==='ground' ? '#FFFFFF':'#114067'}}>
                                                <span>Affiliate marketing</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1" >
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '  style={{ color: active==='ground' ? '#FFFFFF':'#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>



                                    <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('first'); onClickHandler("first") }}
                                        style={{ backgroundColor: active==='first' ? "black" : "#EDFFE9", }}

                                    >
                                        <h2 id="accordion-collapse-heading-2">
                                            <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2"  style={{ color: active==='first' ? '#FFFFFF' : '#114067' }}>
                                                <span>Content creation</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '  style={{ color: active==='first' ? '#FFFFFF' : '#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>

                                    <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick("second"); onClickHandler("second"); }}
                                        style={{ backgroundColor: active==='second' ? "black" : "#EDFFE9" }}

                                    >
                                        <h2 id="accordion-collapse-heading-3">
                                            <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3"  style={{ color: active==='second' ? '#FFFFFF':'#114067' }}>
                                                <span>Website traffic</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '  style={{ color: active==='second' ? '#FFFFFF':'#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>



                                    {/* Extra card start */}
                                    {/* <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick(); onClickHandler("ground") }}
                                        style={{ backgroundColor: active ? "#EDFFE9" : "black", }}>
                                        <h2 id="accordion-collapse-heading-1" >
                                            <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={handleClick} style={{ color: active ? '#114067' : '#FFFFFF' }}>
                                                <span>Affiliate marketing</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1" >
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' onClick={handleClick} style={{ color: active ? '#114067' : '#FFFFFF' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>
                                    <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick(); onClickHandler("ground") }}
                                        style={{ backgroundColor: active ? "#EDFFE9" : "black", }}>
                                        <h2 id="accordion-collapse-heading-1" >
                                            <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={handleClick} style={{ color: active ? '#114067' : '#FFFFFF' }}>
                                                <span>Affiliate marketing</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1" >
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' onClick={handleClick} style={{ color: active ? '#114067' : '#FFFFFF' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div> */}
                                    {/* Extra card end */}

                                </div>
                            </div>
                        </div>
                        <div className='md:w-[455px] md:h-[480px] md:mt-10'>
                            {imageClicked.ground && <img src="../image/brandsness/card1.svg" alt="ground" />}
                            {imageClicked.first && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                            {imageClicked.second && !imageClicked.ground && <img src="../image/brandsness/ziczac.svg" alt="second" />}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandCard