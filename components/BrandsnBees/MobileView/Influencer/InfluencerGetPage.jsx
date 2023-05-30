import React, { useState } from 'react'
import styles from '../../../../styles/BrandPage.module.css'
import 'flowbite';
const InfluencerGetPage = () => {
    const [active, setActive] = useState('ground');

    const handleClick = (data) => {
        console.log('data', data);
        setActive(data);
    };



    const [imageClicked, setImageClicked] = useState({
        ground: true,
        first: false,
        second: false,
        third: false,
        four:false
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
            <div className='bg-[#FAFAFA] w-[450px] h-[1280px] py- rounded-[10px]'>

                <div className='px-4'>
                    <h6 className='py-10 flex gap-2 md:gap-4 text-[#000000] text-[31px] leading-[47px] font-medium font-sans' >
                        <span> What </span>
                        <span className='md:text-[#000000] text-[#5A914D] '>you will get</span>

                    </h6>
                    {/* Exclusive app start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('ground'); onClickHandler("ground") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'ground' ? '#5A914D' : '#000000' }} >Exclusive app</h6>
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
                    {/* Exclusive app start */}

                    {/* Track your campaign start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('first'); onClickHandler("first") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'first' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'first' ? '#5A914D' : '#000000' }}> Track</span>  your campaign
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.first && <img src="../image/brandsness/ziczac.svg" alt="first" />}
                        </div>

                    </div>
                    {/* Track your Campaign end */}


                    {/* Chat with your collaborators */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('second'); onClickHandler("second") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'second' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'second' ? '#5A914D' : '#000000' }}> Chat</span> with your collaborators
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.second && <img src="../image/brandsness/card1.svg" alt="second" />}
                        </div>

                    </div>
                    {/* Chat with your collaborators */}

                    {/* Sales report start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('third'); onClickHandler("third") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'third' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'third' ? '#5A914D' : '#000000' }}> Sales</span> report
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.third && <img src="../image/brandsness/dashboard.svg" alt="third" />}
                        </div>

                    </div>
                    {/* Sales report end */}

                    {/* Sales report start */}
                    <div>
                        <div className='mb-4'>
                            <div onClick={() => { handleClick('four'); onClickHandler("four") }}>
                                <h6 className='pb-1 text-[31px] leading-[47px] font-medium font-sans' style={{ color: active === 'four' ? '#5A914D' : '#000000' }} >
                                    <span className={`pb-2 ${styles.chat}`} style={{ color: active === 'third' ? '#5A914D' : '#000000' }}> Sales</span> report
                                </h6>
                            </div>
                            <p className='mb-6 pt-4 w-[410px] h-[66px] text-[17px] leading-[28px] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>

                        <div className='bg-[#EDFFE9]'>
                            {imageClicked.four && <img src="../image/brandsness/card1.svg" alt="four" />}
                        </div>

                    </div>
                    {/* Sales report end */}
                </div>
            </div>


            {/* </div> */}

        </>
    )
}

export default InfluencerGetPage;