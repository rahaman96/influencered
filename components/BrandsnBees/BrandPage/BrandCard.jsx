import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import styles from '../../../styles/BrandPage.module.css'
import 'flowbite';
const BrandCard = () => {
    const [active, setActive] = useState(1);

    const handleClick = (data) => {
        console.log('data', data);
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

    const cardData = [
        {
            id: 1,
            title: 'Affiliate marketing',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
        {
            id: 2,
            title: 'Content creation',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },
        {
            id: 3,
            title: 'Website traffic',
            description: 'Select this option if your campaign objective is to increase brand recognitionSelect this option if your'
        },

    ]

    // const [cards, setCards] = useState([
    //     { id: 1, isOpen: true },
    //     { id: 2, isOpen: false },
    //     { id: 3, isOpen: false }
    // ]);

    // const handleCardClick = (cardId) => {
    //     const updatedCards = cards.map(card => {
    //         if (card.id === cardId) {
    //             return { ...card, isOpen: true };
    //         }
    //         return { ...card, isOpen: false };
    //     });
    //     setCards(updatedCards);
    // };

    return (
        <>
            <div className='md:px-10'>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[422px] md:h-[600px]  h-[928px] mb-10 rounded-[10px] z-10 '>

                    <div className="flex flex-wrap md:px-10  mx-auto items-center justify-between gap-6 md:gap-0">
                        <div className={`scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  md:mt-10 md:h-[515px] md:overflow-y-scroll overflow-y-none ${styles.scrollbar_thin} `}>
                            <div className={`md:w-[502px h-full md:h-[515px] md:pr-12 `}>

                                <div id="accordion-collapse" data-accordion="collapse" >
                                    {/* <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('ground'); onClickHandler("ground") }}
                                        style={{ backgroundColor: active === 'ground' ? "black" : "#EDFFE9", }}
                                        id="accordion-collapse-heading-1"
                                    >
                                        <div data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" >
                                            <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" style={{ color: active === 'ground' ? '#FFFFFF' : '#114067' }}>
                                                <span>Affiliate marketing</span>
                                            </button>
                                        </div>
                                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1" >
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active === 'ground' ? '#FFFFFF' : '#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div> */}

                                    {cardData.map((cardText) => {
                                        console.log('cardText', cardText)
                                        return (
                                            <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                                onClick={() => { handleClick(cardText.id); onClickHandler(cardText.id) }}
                                                style={{ backgroundColor: active === cardText.id ? "black" : "#EDFFE9", }}

                                            >

                                                <div>
                                                    <button type="button" className="text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" style={{ color: active === cardText.id ? '#FFFFFF' : '#114067' }}>
                                                        <span>{cardText.title}</span>
                                                    </button>
                                                </div>

                                                {
                                                    active === cardText.id ?
                                                        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1" >
                                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active === cardText.id ? '#FFFFFF' : '#114067' }}>
                                                                {cardText.description}
                                                            </p>
                                                        </div> :
                                                        null

                                                }


                                            </div>
                                        )
                                    })}




                                    {/* <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick('first'); onClickHandler("first") }}
                                        style={{ backgroundColor: active === 'first' ? "black" : "#EDFFE9", }}
                                        id="accordion-collapse-heading-2"
                                    >
                                        <div data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" style={{ color: active === 'first' ? '#FFFFFF' : '#114067' }}>
                                                <span>Content creation</span>
                                            </button>
                                        </div>
                                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active === 'first' ? '#FFFFFF' : '#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div> */}

                                    {/* <div className='md:p-6 p-3 border-[1px] border-[#5A914D] mt-5 md:w-[502px] rounded-[10px]'
                                        onClick={() => { handleClick("second"); onClickHandler("second"); }}
                                        style={{ backgroundColor: active === 'second' ? "black" : "#EDFFE9" }}
                                        id="accordion-collapse-heading-3"
                                    >
                                        <div data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <button type="button" className="text-[#114067] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans" style={{ color: active === 'second' ? '#FFFFFF' : '#114067' }}>
                                                <span>Website traffic</span>
                                            </button>
                                        </div>
                                        <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                            <p className='text-[#114067] opacity-90 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] ' style={{ color: active === 'second' ? '#FFFFFF' : '#114067' }}>
                                                Select this option if your campaign objective is to
                                                increase brand recognitionSelect this option if your campaign
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[455px] md:h-[480px] md:mt-10'>
                            {active===1 && <img src="../image/brandsness/card1.svg" alt="ground" />}
                            {active===2 && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                            {active===3 &&  <img src="../image/brandsness/ziczac.svg" alt="second" />}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandCard