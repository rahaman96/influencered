import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const MobileFeatures = () => {
    const [active, setActive] = useState('ground');

    const handleClick = (data) => {
        console.log('data', data);
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
            <div className='bg-[#FAFAFA] w-[450px] h-[1183px pb-5 py- rounded-[10px]'>

                <div className='px-4'>
                    <h6 className='py-10 flex gap-2 md:gap-4 text-[#000000] text-[31px] leading-[47px] font-medium font-sans' >
                        <span> Features </span>
                        <span className='md:text-[#000000] text-[#5A914D] '>for you</span>

                    </h6>
                    {/* Track your campaign start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('ground'); onClickHandler("ground") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'ground' ? '#5A914D' : '#000000' }} >Track your campaign</h6>
                                <img src="../image/border.svg" alt=""
                                    className='md:invisible visible'
                                />
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.ground && <img src="../image/brandsness/dashboard.svg" alt="ground" />}
                        </div>

                    </div>
                    {/* Track your campaign start */}

                    {/* Chat with your creators start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('first'); onClickHandler("first") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'first' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'first' ? '#5A914D' : '#000000' }}> Chat</span> with your creators
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.first && <img src="../image/brandsness/ziczac.svg" alt="first" />}
                        </div>

                    </div>
                    {/* Chat with your creators end */}


                    {/* Analyze performance start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('second'); onClickHandler("second") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'second' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'second' ? '#5A914D' : '#000000' }}> Anal</span>yze performance
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.second && <img src="../image/brandsness/card1.svg" alt="second" />}
                        </div>

                    </div>
                    {/* Analyze performance end */}

                    {/* Premium support start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('third'); onClickHandler("third") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'third' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'third' ? '#5A914D' : '#000000' }}> Prem</span>ium support
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.third && <img src="../image/brandsness/dashboard.svg" alt="third" />}
                        </div>

                    </div>
                    {/* Premium support end */}
                </div>
            </div>


            {/* </div> */}

        </>
    )
}

export default MobileFeatures;