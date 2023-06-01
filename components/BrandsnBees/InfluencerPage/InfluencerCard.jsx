import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const InfluencerCard = () => {
    const [active, setActive] = useState(1);
    console.log('active', active);
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
            [order]: !prevState[order],
            [!order]: prevState[order],
            [!order]: prevState[order]


        }));
    };


    const influencerData = [
        {
            id: 1,
            title: '100+ brand requests everyday',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign'
        },
        {
            id: 2,
            title: 'Sell with a free Store',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign'
        },
        {
            id: 3,
            title: 'Earn with your content',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign'
        },
        {
            id: 4,
            title: 'Sell anywhere',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign'
        },
    ]

    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[422px]   w-[364px md:h-[600px]  h-[928px] mb-10 rounded-[10px] z-10 '>

                    <div className="flex flex-wrap md:px-10  mx-auto items-center justify-between gap-6 md:gap-0">
                        <div className={`scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  md:mt-10 md:h-[515px]  md:overflow-y-scroll overflow-y-none ${styles.scrollbar_thin} `}>
                            <div className={`md:w-[502px h-full md:h-[515px] md:pr-12 `}>

                                <div>
                                    {influencerData.map((item) => {
                                        return (
                                            <div key={item} className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                                onClick={() => { handleClick(item.id); onClickHandler(item.id) }}
                                                style={{ backgroundColor: active === item.id ? "black" : "#EDFFE9", }}>
                                                <h2>
                                                    <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" style={{ color: active === item.id ? '#FFFFFF' : '#114067' }}>
                                                        <span>{item.title}</span>
                                                    </button>
                                                </h2>
                                                {
                                                    active === item.id ?
                                                        <div>
                                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active === item.id ? '#FFFFFF' : '#114067' }}>
                                                                {item.description}
                                                            </p>
                                                        </div> : null
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[455px] md:h-[480px] md:mt-10'>
                            {active === 1 && <img src="../image/brandsness/card1.svg" alt="ground" />}
                            {active === 2 && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                            {active === 3 && <img src="../image/brandsness/card1.svg" alt="first" />}
                            {active === 4 && <img src="../image/brandsness/ziczac.svg" alt="second" />}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default InfluencerCard;