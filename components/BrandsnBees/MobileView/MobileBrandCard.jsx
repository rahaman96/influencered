import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const MobileBrandCard = () => {
    const [active, setActive] = useState(1);

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

    const cardData = [
        {
            id: 1,
            title: 'Brand awareness ',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
        {
            id: 2,
            title: 'Affiliate marketing',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
        {
            id: 3,
            title: 'Content creation',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
        {
            id: 4,
            title: 'Website traffic',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
    ]

    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[450px]   w-[364px md:h-[708px]  h-[928px] mb-10 rounded-[10px] z-10 pt-10 '>

                    <div className='px-4'>
                        {cardData.map((Text) => {
                            console.log('cardTextData', Text)
                            return (


                                <div key={Text} className='mb-4 md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                    onClick={() => { handleClick(Text.id); onClickHandler(Text.id) }}
                                    style={{ backgroundColor: active === Text.id ? "black" : "#EDFFE9", }}
                                >
                                    <h2>
                                        <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" data-accordion-target="#accordion-collapse-body-10" aria-expanded="true" aria-controls="accordion-collapse-body-10" style={{ color: active === Text.id ? '#FFFFFF' : '#114067' }}>
                                            <span>{Text.title}</span>
                                        </button>
                                    </h2>
                                    {active === Text.id ?
                                        <div>
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '
                                                style={{ color: active === Text.id ? '#FFFFFF' : '#114067' }}
                                            >
                                                {Text.description}
                                            </p>
                                        </div>
                                        : null

                                    }
                                </div>
                            )
                        })}
                    </div>
                    <div className='md:w-[455px] md:h-[480px] md:mt-10'>
                        {active === 1 && <img src="../image/brandsness/card1.svg" alt="ground" />}
                        {active === 2 && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                        {active === 3 && <img src="../image/brandsness/ziczac.svg" alt="second" />}
                        {active === 4 && <img src="../image/brandsness/card1.svg" alt="ground" />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileBrandCard;