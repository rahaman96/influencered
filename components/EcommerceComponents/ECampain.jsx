import React, { useState, useEffect } from 'react'
import Wrapper from '../Wrapper'
import HeroHeader from './HeroHeader'
import HeroNav from './HeroNav'
import About from '../Home/About'
import Footer from '../Home/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import AwarenessHeader from './AwarenessHeader'

const ECampain = () => {
    const router = useRouter()
    const headerData = router.query.name



    const [counters, setCounters] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
        counter5: 0,
        counter6: 0,
        counter7: 0,
        counter8: 0,
        counter9: 0,
        counter10: 0,
    });
    const [total, setTotal] = useState(0);
    const [levelsum, setLevelSum] = useState(0)
    useEffect(() => {
        const storedCounters = localStorage.getItem('counters');
        if (storedCounters) {
            setCounters(JSON.parse(storedCounters));
            setTotal(counters.counter1 + counters.counter2 + counters.counter3 + counters.counter4 + counters.counter5 + counters.counter6 + counters.counter7);
            setLevelSum(counters.counter8+counters.counter9+counters.counter10)
        }
    },
        [counters.counter1 + counters.counter2 + counters.counter3 + counters.counter4 + counters.counter5 + counters.counter6 + counters.counter7,counters.counter8+counters.counter9+counters.counter10]);

    const updateCounter = (id, action) => {
        setCounters(prevCounters => {
            const counter = prevCounters[`counter${id}`];

            if (action === 'increment') {
                const updatedCounters = {
                    ...prevCounters,
                    [`counter${id}`]: counter + 1,
                };
                localStorage.setItem('counters', JSON.stringify(updatedCounters));
                return updatedCounters;
            } else if (action === 'decrement') {
                const updatedCounters = {
                    ...prevCounters,
                    [`counter${id}`]: counter > 0 ? counter - 1 : 0,
                };
                localStorage.setItem('counters', JSON.stringify(updatedCounters));
                return updatedCounters;
            }

            return prevCounters;
        });
    };




    return (
        <>
            <div>
                <AwarenessHeader headerData={headerData} />
                <HeroNav />
                <Wrapper>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-10 md:py-24 flex justify-center mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <h2 className="pb-3 md:w-[684px] text-[#000000] text-[20px] md:text-[36px] leading-[27px] md:leading-[54px] font-medium font-sans">Customize your campaign</h2>
                                        <div>
                                            <p className='mb-5 md:w-[728px]  text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>We have recommended the number of deliverables and influencers required based on your campaign objective. The numbers can be adjusted according to preference.</p>
                                        </div>

                                        <div>
                                            <h6 className='text-[#000000] opacity-90  text-[25px] leading-[38px] font-medium font-sans ' >Plan name</h6>
                                            <p className='border-b-[1px] border-[#000000] opacity-60 md:w-[497px] text-[#000000] text-[14px] md:text-[25px] leading-[38px] font-normal font-sans'>Dhaatri naturals - Brand Awareness</p>
                                        </div>

                                        {/*Customize no of posts Start  */}
                                        <div className='mt-8'>
                                            <h6 className='text-[#000000] opacity-90  text-[25px] leading-[38px] font-medium font-sans mb-10' >Customize no of posts</h6>
                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[55px] h-[30px] '>Reels</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(1, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>
                                                                    {counters.counter1}
                                                                </p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(1, 'increment')}

                                                                >+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[122px] h-[59px] '>Try product and review</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(2, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{counters.counter2}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(2, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[86px] h-[59px] '>Youtube posts</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(3, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{counters.counter3}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(3, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[131px] h-[30px] '>Short videos</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(4, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{counters.counter4}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(4, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[129px] h-[30px]'>Meme posts</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(5, 'decrement')}>-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{counters.counter5}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(5, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[120px] h-[59px] '>Pre-release Campaigns</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(6, 'decrement')}>-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{counters.counter6}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(6, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:w-[319px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <p className='text-[22px] leading-[29px] font-normal font-sans w-[95px] h-[59px] '>Tips and Tricks</p>
                                                        <div className='flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] w-[px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(7, 'decrement')}>-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{Number(counters.counter7)}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(7, 'increment')}>+</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/*Customize no of posts End */}


                                        {/* Customize no of Influencers start */}

                                        <div>
                                            <h6 className='text-[#000000] opacity- py-8 text-[20px] leading-[27px] md:text-[25px] md:leading-[37px] font-medium font-sans '>Customize no of Influencers</h6>
                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">

                                                <div className='md:w-[319px] h-[172px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <div className='mt-14'>
                                                            <h6 className='text-[22px] leading-[29px] font-medium font-sans  h-[30px]'>Level 1</h6>
                                                            <p className='pt-2 w-[147px] h-[72px] text-[16px] leading-[24px] font-normal '>Profiles with followers ranging
                                                                between 1k-10k</p>
                                                        </div>
                                                        <div className='w-[120px] flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer' onClick={() => updateCounter(8, 'decrement')}>-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{Number(counters.counter8)}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer'
                                                                    onClick={() => updateCounter(8, 'increment')}
                                                                >+</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='md:w-[319px] h-[172px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <div className='mt-14'>
                                                            <h6 className='text-[22px] leading-[29px] font-medium font-sans  h-[30px]'>Level 2</h6>
                                                            <p className='pt-2 w-[147px] h-[72px] text-[16px] leading-[24px] font-normal '>
                                                                Profiles with followers ranging between 10k-100k
                                                            </p>
                                                        </div>
                                                        <div className='w-[120px] flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer' onClick={() => updateCounter(9, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{Number(counters.counter9)}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer' onClick={() => updateCounter(9, 'increment')}
                                                                >+</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='md:w-[319px] h-[172px] border-[1px] border-[#114067] bg-[#EDFFE9] rounded-[5px] '>
                                                    <div className="flex justify-between px-4 items-center  h-[99px]">
                                                        <div className='mt-14'>
                                                            <h6 className='text-[22px] leading-[29px] font-medium font-sans  h-[30px]'>Level 3</h6>
                                                            <p className='pt-2 w-[147px] h-[72px] text-[16px] leading-[24px] font-normal '>
                                                                Profiles with followers ranging between 100k-250k
                                                            </p>
                                                        </div>
                                                        <div className='w-[120px] flex gap-4 border-[1px] border-[#CECECE] rounded-[5px] items-center '>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-l-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer' onClick={() => updateCounter(10, 'decrement')}
                                                                >-</p>
                                                            </div>
                                                            <div className='w-[14px] h-[30px]  flex items-center justify-center '>
                                                                <p className='text-[#0A0A0A] text-[22px] leading-[29px] font-normal font-sans'>{Number(counters.counter10)}</p>
                                                            </div>
                                                            <div className='w-[39px] h-[39px] bg-[#0F3D68] rounded-r-[5px] flex items-center justify-center '>
                                                                <p className='text-[#FFFFFF] text-[25px] cursor-pointer' onClick={() => updateCounter(10, 'increment')}
                                                                >+</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        {/* Customize no of Influencers End */}
                                        {/* Summery Start */}
                                        <div className='py-8 '>
                                            <h6 className='mb-6 text-[#000000] text-[25px] leading-[37px] font-medium text-center md:text-left '>Summery</h6>
                                            <div className="gap-4 grid grid-cols- justify-center md:grid-cols-4">
                                                <div className='py-4 px-6 w-[182px] h-[108px] rounded-[9px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] '>
                                                    <h6 className='mb-1 text-[#FFFFFF] text-[30px] leading-[45px] font-semibold '>

                                                        {total}
                                                    </h6>
                                                    <p className=' text-[#FFFFFF] text-[17px] leading-[25px] font-medium font-sans'>Influencers</p>
                                                </div>

                                                <div className='py-4 px-6 w-[182px] h-[108px] rounded-[9px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] '>
                                                    <h6 className='mb-1 text-[#FFFFFF] text-[30px] leading-[45px] font-semibold '>{levelsum}</h6>
                                                    <p className=' text-[#FFFFFF] text-[17px] leading-[25px] font-medium font-sans'>Total posts</p>
                                                </div>
                                                <div className='py-4 px-6 w-[182px] h-[108px] rounded-[9px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] '>
                                                    <h6 className='mb-1 text-[#FFFFFF] text-[30px] leading-[45px] font-semibold '>9,111</h6>
                                                    <p className=' text-[#FFFFFF] text-[17px] leading-[25px] font-medium font-sans'>Estimated Reach</p>
                                                </div>
                                                <div className='py-4 px-6 w-[182px] h-[108px] rounded-[9px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] '>
                                                    <h6 className='mb-1 text-[#FFFFFF] text-[30px] leading-[45px] font-semibold '>₹ 10,028</h6>
                                                    <p className=' text-[#FFFFFF] text-[17px] leading-[25px] font-medium font-sans'>Approx Spending</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Summery End */}

                                        {/* butto Start */}
                                        <div className="flex gap-4 py-10 md:gap-10 mb-16 md:pb-0 justify-center"
                                        // onClick={() => router.push('etarget')} 
                                        // onClick={() => router.push({ pathname: 'etarget', query: { name: headerData } })}
                                        >
                                            <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                <AiOutlineArrowLeft />
                                            </div>
                                            <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] ">Next</button>
                                        </div>
                                        {/* butto End */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Wrapper>

                {/* Last Section start */}
                <div>
                    <About />
                    <Footer />
                </div>
                {/* Last Section end */}
            </div>
        </>
    )
}

export default ECampain