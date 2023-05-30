import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const MobileBrandCard = () => {
    const [active, setActive] = useState('ground');
   
    const handleClick = (data) => {
        console.log('data',data);
        setActive(data);
    };
 


    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        third: false,
        ground: true
    });

    const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
            // ...prevState,

            // [order]: !prevState[order],
            [order]: !prevState[order],
            [!order]: prevState[order],
            [!order]: prevState[order]


        }));
    };

    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[450px]   w-[364px md:h-[708px]  h-[928px] mb-10 rounded-[10px] z-10 pt-10 '>

                    <div className='px-4' id="accordion-collapse" data-accordion="collapse">
                        {/* <div  > */}
                            {/* <div> */}
                                {/* <div> */}
                                    <div className='mb-4 md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('ground'); onClickHandler("ground") }}
                                        style={{ backgroundColor: active==='ground' ?  "black" : "#EDFFE9", }}>
                                        <h2 id="accordion-collapse-heading-10" >
                                            <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-10" aria-expanded="true" aria-controls="accordion-collapse-body-10"  style={{ color: active==='ground' ? '#FFFFFF':'#114067'}}>
                                                <span>Brand Awerness</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-10" aria-labelledby="accordion-collapse-heading-10" >
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '
                                                style={{ color: active==='ground' ? '#FFFFFF':'#114067' }}
                                            >
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>

                                {/* </div> */}
                                <div className='md:w-[455px] md:h-[480px] md:mt-10'>
                                    {imageClicked.ground && <img src="../image/brandsness/card1.svg" alt="ground" />}

                                </div>


                            {/* </div> */}
                            {/* <div> */}
                                {/* <div> */}

                                    <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('first'); onClickHandler("first") }}
                                        style={{ backgroundColor: active==='first' ? "black" : "#EDFFE9", }}

                                    >
                                        <h2 id="accordion-collapse-heading-11">
                                            <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-11" aria-expanded="false" aria-controls="accordion-collapse-body-11" style={{ color: active==='first' ? '#FFFFFF':'#114067' }}>
                                                <span>Affiliate marketing</span>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-11" aria-labelledby="accordion-collapse-heading-11">
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active==='first' ? '#FFFFFF':'#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div>
                                {/* </div> */}
                                <div className='md:w-[455px] md:h-[480px] md:-mt-[100px]'>
                                    {imageClicked.first && <img src="../image/brandsness/dashboard.svg" alt="first" />}

                                </div>
                            {/* </div> */}
                            {/* <div> */}
                                <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                    onClick={() => { handleClick('second'); onClickHandler("second") }}
                                    style={{ backgroundColor: active==='second' ? "black" : "#EDFFE9", }}

                                >
                                    <h2 id="accordion-collapse-heading-12">
                                        <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-12" aria-expanded="false" aria-controls="accordion-collapse-body-12" style={{ color: active==='second' ? '#FFFFFF':'#114067' }}>
                                            <span>Content creation</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-12" aria-labelledby="accordion-collapse-heading-12">
                                        <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active==='second' ? '#FFFFFF':'#114067' }}>
                                            Select this option if your campaign objective is to
                                            increase brand recognitionSelect this option if your campaign
                                        </p>
                                    </div>
                                </div>
                                <div className='md:w-[455px] md:h-[480px] md:-mt-[100px]'>
                                    {imageClicked.second && <img src="../image/brandsness/card1.svg" alt="second" />}

                                </div>
                            {/* </div> */}

                            {/* <div> */}

                                <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                    onClick={() => { handleClick('third'); onClickHandler("third") }}
                                    style={{ backgroundColor: active==='third' ? "black" : "#EDFFE9", }}

                                >
                                    <h2 id="accordion-collapse-heading-13">
                                        <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-13" aria-expanded="false" aria-controls="accordion-collapse-body-13" style={{ color: active==='third' ? '#FFFFFF':'#114067' }}>
                                            <span>Website traffic</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-13" aria-labelledby="accordion-collapse-heading-13">
                                        <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active==='third' ? '#FFFFFF':'#114067' }}>
                                            Select this option if your campaign objective is to
                                            increase brand recognitionSelect this option if your campaign
                                        </p>
                                    </div>
                                </div>
                                <div className='md:w-[455px] md:h-[480px] md:-mt-[100px]'>
                                    {imageClicked.third && <img src="../image/brandsness/dashboard.svg" alt="third" />}

                                </div>                                                         
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MobileBrandCard;